const mongoose = require("mongoose");

var dburl = "mongodb://localhost:27017/rideshare";
require("./user-model");
require("./ride-model");

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connection.on("connected", function () {
    console.log("mongoose connect to " + dburl);
});

mongoose.connection.on("disconnected", function () {
    console.log("mongoose disconnect to " + dburl);
});

mongoose.connection.on("error", function () {
    console.log("mongoose connect error " + dburl);
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

process.on("SIGTERM", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    });
});

process.once("SIGUSR2", function () {
    mongoose.connection.close(function () {
        console.log("Mongoose disconnected by app termination");
        process.kill(process.pid, "SIGUSR2");
    });
});




