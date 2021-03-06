const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../db/user-model');
//const Secret = require('./secret');

module.exports=function (passport){
    let opts = {};
    opts.jwtFromRequest=ExtractJwt.fromAuthHeaderWithScheme('JWT');
    opts.secretOrKey=process.env.secret;
    passport.use(new JwtStrategy(opts,function(jwt_payload,done){
        User.getUserById(jwt_payload.user._id,(err,user)=>{
            if(err){
                return done(err,false)
            }
            if(user){
                return done (null,user)
            }else{
                return done(null,false)
            }
        })
    }))
}
