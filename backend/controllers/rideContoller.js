const path=require("path");


module.exports.getAllRides=function(req,res) {
    res.json('all rides')
};

module.exports.publishRide=function(req,res) {
    res.json('publishRide')
};

module.exports.searchRide=function(req,res) {
    res.json('searchRide')
};

module.exports.updateRide=function(req,res) {
    res.json('updateRide')
};

module.exports.deleteRide=function(req,res) {
    res.json('deleteRide')
};


