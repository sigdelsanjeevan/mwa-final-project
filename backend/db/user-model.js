const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

  email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

   dateOfbirth: {
        type: Date,
        required: false
    },

    phone: {
        type: Number,
        unique: true,
        required: true
    },

    

});

const User = mongoose.model('user', userSchema);
module.exports =User;


module.exports.getUserById=function(id,callback){
    User.findById(id,callback)
}

module.exports.getUserByUsername=function(username,callback){
    const query ={username:username}
    User.findOne(query,callback)
}

module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password=hash;
            console.log(newUser);

            newUser.save(callback)
        })
    })
}
