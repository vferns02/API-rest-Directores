var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




var mongodb = require('./lib/mongodb.js'); //no es necesario asignarlo a una variable
 require('./models/Director.js');

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/directores',require('./routes/directores'));
app.use('/directores/563b2ed4de10e78513d26b1a',require('./routes/apiv1/id'));
app.use('/directores/563b36d40181b799144f1c16',require('./routes/apiv1/id2'));
app.use('/directores/563b2ef7de10e78513d26b1b',require('./routes/apiv1/id3'));
app.use('/directores/563b2f023bf7e8a413bcd040',require('./routes/apiv1/id4'));

//API Version 1

app.use('/apiv1/directores',require('./routes/apiv1/directores'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
