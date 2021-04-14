const mongoose = require("mongoose");
var user =require('./user-model')

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
    car:carSchema,
    driver: {
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        phonenumber:{
            type: Number,
            required: true
        }
    }


});

module.exports = mongoose.model('ride', rideShema);


