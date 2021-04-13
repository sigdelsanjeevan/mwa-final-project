const mongoose = require("mongoose");

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

    gender: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    phone: {
        type: Number,
        unique: true,
        required: true
    },

    dateOfbirth: {
        type: Date,
        required: true
    },

});

const User = mongoose.model('user', userSchema);
module.exports =User;
