const path=require("path");
var  mongoose=require("mongoose");
const userModel=mongoose.model('user')
const rideModel=mongoose.model('ride')

var responseGenerator = require("./../../libs/responseGenerator");
var auth = require("./../../middlewares/authorization");

var crypto = require("./../../libs/crypto");
var key = "Crypto-Key";


module.exports.doLogin=function(req,res) {
   res.json('login')
};


// -------- API TO SIGNUP USER ---------
module.exports.doSignUP=function(req,res) {
    var signupInfo = {};

    if(req.body.firstname!=undefined && req.body.lastname!=undefined && req.body.password!=undefined &&
        req.body.email!=undefined && req.body.phone!=undefined){

        userModel.findOne({"email":req.body.email},function(err,user){
            if(err){
                var myResponse = responseGenerator.generate(true,err,500,null);
                res.send(myResponse);
            }
            else if(user && user!==null){

                signupInfo.alreadyPresent = true;
                var myResponse = responseGenerator.generate(false,"Email already in use",200,signupInfo);
                res.send(myResponse);
            }
            else{
                var newUser = new userModel({

                    username    : req.body.firstname+' '+req.body.lastname,
                    firstName   : req.body.firstname,
                    lastName    : req.body.lastname,
                    email       : req.body.email,
                    gender       : req.body.gender,
                    dob         : req.body.dateOfbirth,
                    phone       : req.body.phone
                });

                newUser.password = crypto.encrypt(key,req.body.password);
                newUser.save(function(err,result){
                    if(err){
                        var myResponse = responseGenerator.generate(true,"Check paramaters",500,null);
                        res.send(myResponse);
                    }
                    else{
                        req.session.user = newUser;
                        req.session.loginStatus = true;

                        delete req.session.user.password ;

                        var myResponse = responseGenerator.generate(
                            false,"Signed up successfully",200,req.session.user);
                        res.send(myResponse);
                    }
                });
            }
        })
    }
    else{
        var myResponse = responseGenerator.generate(true,"Parameter missing",500,null);
        res.send(myResponse);
    }
};

module.exports.doUpdate=function(req,res) {
    res.json('updateprofile')
};


