var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var fs = require('fs');
const bodyParser = require('body-parser');



const mongoose = require("mongoose");
require('dotenv').config();

var app = express();
app.set("port", 5000);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');





const logFile = path.join(__dirname, 'access.log');
const streamLog = fs.createWriteStream(logFile);
app.use(logger('logs', { stream: streamLog }));

// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));


app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




app.use('/', indexRouter);
app.use('/users', usersRouter);



const server = app.listen(app.get("port"), function () {
  const port = server.address().port;
  console.log("Listening to port " + port);
});
