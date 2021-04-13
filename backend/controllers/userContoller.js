const path=require("path");
var  mongoose=require("mongoose");
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');


var responseGenerator = require("../libs/responseGenerator");
var auth = require("../middlewares/authorization");

// var crypto = require("../libs/crypto");
// var key = "Crypto-Key";

const User =require('../db/user-model')


module.exports.doLogin=function(req,res) {
   res.json('login')
};


// -------- API TO SIGNUP USER ---------
module.exports.doSignUP= async function(req,res) {

        let newUser =new User({
            //_id: req.body._id,
            username    : req.body.username,
            firstname   : req.body.firstname,
            lastname    : req.body.lastname,
            email       : req.body.email,
            password       : req.body.password,
            dateOfbirth         : req.body.dateOfbirth,
            phone       : req.body.phone
        });
        console.log(newUser)
        await User.addUser(newUser,(err,user)=>{
            if (err) {
                console.log(err)
                res.json({success:false,message:'failed to register user'})
            } else {
                res.json({success:true,message:'user created successfully'})
            }
        })

   
};

module.exports.getProfile=function(req,res) {
    res.json('profile')
};


