const path=require("path");
var  mongoose=require("mongoose");

var responseGenerator = require("../libs/responseGenerator");
var auth = require("../middlewares/authorization");

var crypto = require("../libs/crypto");
var key = "Crypto-Key";


module.exports.doLogin=function(req,res) {
   res.json('login')
};


// -------- API TO SIGNUP USER ---------
module.exports.doSignUP=function(req,res) {

    const response = {
        status: 400,
        message: { "Message": "data error happend" }
    };
    if (req.body && req.body._id && req.body.name && req.body.course && req.body.grade) {
        User.create({
            _id: req.body._id,
            username    : req.body.firstname+' '+req.body.lastname,
            firstName   : req.body.firstname,
            lastName    : req.body.lastname,
            email       : req.body.email,
            gender       : req.body.gender,
            dob         : req.body.dateOfbirth,
            phone       : req.body.phone
        }, function (err, student) {
            if (err) {
                response.status = 400;
                response.message = { "Message": err }
            } else {
                response.status = 201;
                response.message = { "Message": "student created" }
            }

            res.status(response.status).json(response.message);
        });
    }
    else {
        res.status(response.status).json(response.message);
    }
    /*
    var signupInfo = {};

    if(req.body.firstname && req.body.lastname && req.body.password &&
        req.body.email && req.body.phone){

        User.findOne({"email":req.body.email},function(err,user){
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
                var newUser = new User({

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
    }*/
};

module.exports.doUpdate=function(req,res) {
    res.json('updateprofile')
};


