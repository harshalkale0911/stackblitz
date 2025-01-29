const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
const User = require('./schema');
const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

mongoose.connect('mongodb://localhost:27017/user_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Failed:', err));


const newUser = new User({
  username: 'JohnDoe',
  email: 'John@example.com',
  password: 'HashedPasswordHere',
  roles: ['admin'],
  profile: {
    firstName: 'JJohn',
    lastName: 'DDoe',
    age: 30
  }
});

newUser.save()
  .then(user => console.log('User created:', user))
  .catch(err => console.error('Error creating user:', err));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});