const path=require("path");
const Ride = require('../db/ride-Model')


module.exports.getAllRides=async function(req,res) {
    await Ride.find({},(err,ride)=>{
        var response = {
            status: 200,
            message: ride
        };
        if (err) {
            response.status = 404;
            response.message = { "Message": "error happend" }
        }
        else {
            if (!ride) {
                response.status = 200;
                response.message = { "Message": "No rides in DataBase" }
            }
        }
        res.status(response.status).json(response.message);
    })
};

module.exports.publishRide= async function(req,res) {

    const {_id,from,to,createdOn,seatsNumber,car} = req.body;
    if( !_id || !from || !to  || !createdOn  || !seatsNumber || !car ){
        return res.status(400).json({
            message : 'data is not valid !!'
        });
    }
    const ride = {_id,from,to,createdOn,seatsNumber,car};
    await Ride.create(ride)
        .then(result =>res.status(201).json(result))
        .catch(err=>res.send(err));
  

};

module.exports.searchRide=function(req,res) {
    res.json('searchRide')
};

module.exports.updateRide=async function(req,res) { 
   await  Ride.updateOne(
                    { "_id": req.body._id}, 
                    req.body ,

                )
                .then((obj) => {
                    console.log('Updated - ');
                    res.status(201).redirect('ride')
                })
                .catch(err=>res.send("err" +err))
}

module.exports.deleteRide=function(req,res) {
    const {id}=req.params;

    Ride.deleteOne({id})
        .then(result=>res.json(result))
        .catch(err=>res.send(err))
};


