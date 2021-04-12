const path=require("path");


module.exports.getAllRides=function(req,res) {
    req.collection.find({})
        .toArray()
        .then(results=>res.json(results))
        .catch(err=>res.send(err))
};

module.exports.publishRide=function(req,res) {
    const {from,to,createdOn,seatsNumber} = req.body;
    if(!from || !to  || !createdOn  || !seatsNumber ){
        return res.status(400).json({
            message : 'data is not valid !!'
        });
    }
    const ride = {from,to,createdOn,seatsNumber};
    req.collection.insertone(ride)
        .then(result =>res.json(result))
        .catch(err=>res.send(err));
};

module.exports.searchRide=function(req,res) {
    res.json('searchRide')
};

module.exports.updateRide=function(req,res) {
    res.json('updateRide')
};

module.exports.deleteRide=function(req,res) {
    const {id}=req.params;
    req.collection.deleteOne({id})
        .then(result=>res.json(result))
        .catch(err=>res.send(err))
};


