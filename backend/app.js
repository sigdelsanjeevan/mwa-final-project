var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var fs = require('fs');




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.set("port", 3000);

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');


const logFile = path.join(__dirname, 'access.log');
const streamLog = fs.createWriteStream(logFile);
app.use(logger('logs', { stream: streamLog }));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(app.get("port"), function () {
  const port = server.address().port;
  console.log("Listening to port " + port);
});
