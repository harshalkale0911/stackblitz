const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

const SECRET_KEY = "your_secret_key_here";
const ENCRYPTION_KEY = "your_encryption_key_here";

function encryptJWT(payload) {
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    return CryptoJS.AES.encrypt(token, ENCRYPTION_KEY).toString();
}

function decryptJWT(encryptedToken) {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedToken, ENCRYPTION_KEY);
        const token = bytes.toString(CryptoJS.enc.Utf8);
        return jwt.verify(token, SECRET_KEY);
    } catch {
        return null;
    }
}

const payload = { userId: 123, username: 'harshal' };
const encryptedJWT = encryptJWT(payload);
console.log('Encrypted:', encryptedJWT);
console.log('Decrypted:', decryptJWT(encryptedJWT));