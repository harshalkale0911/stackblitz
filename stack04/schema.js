const mongoose=require('mongoose')

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },

    message: {
        type: String,
        required: true
    },

    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Schema=new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        minlength:5
    },

    content:{
        type:String,
        required:true,
        minlength: 50
    },
    author:{
        type:String,

    },
    tags:{
        type:[String],

    },

    category:{
        type:String,
        default:"General",
    },

    likedBy:{
        type: [String],

    },
    createdDate:{
        type: Date,
        default: Date.now
    },

    updatedDate:{
        type:Date
    },

    comments: [commentSchema]

    
});

module.exports= mongoose.model('Blog',Schema);