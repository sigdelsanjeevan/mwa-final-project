const mongoose = require("mongoose");
require('dotenv').config();


require("./user-model");
require("./ride-model");

mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log('connected')})
.catch((err)=>{
  console.log(err)
});

mongoose.connection.on("connected", function () {
    console.log("mongoose connect " );
});

mongoose.connection.on("disconnected", function () {
    console.log("mongoose disconnect to " );
});

mongoose.connection.on("error", function () {
    console.log("mongoose connect error ");
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




