var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// Connect
const { mysql_db } = require('./config/connectMysql.js');
const { mongodb } = require('./config/mongodb.js')


const indexRouter = require('./routes/indexRouter');

app.use('/auth', indexRouter);

// Middlewares
app.use(express.json());


app.get("/api", (req, res) => {
  res.json({ message: "Great Day!"});
});


// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404)).json({ message: "ERORR: 404!" });
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 404);
  res.json({ message: "ERORR: 404!" });
});

module.exports = app;
