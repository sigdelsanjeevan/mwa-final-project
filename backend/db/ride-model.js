const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    model: {
        type: String,
        required: true
    },

    year: {
        type: Date,
        required: true
    },

    color: {
        type: String,
        required: true
    },


});


const rideShema = new mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    
    from: {
        type: String,
        required: true
    },

    to: {
        type: String,
        required: true
    },

    createdOn: {
        type: Date,
        required: true
    },

    seatsNumber: {
        type: Number,
        required: true
    },

    car:carSchema

});

module.exports = mongoose.model('ride', rideShema);
