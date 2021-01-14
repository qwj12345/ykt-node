var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 在引入路由之前引入
var mongoose = require('./config/mongoose.js');
var db = mongoose();

var usersRouter = require('./routes/users');
var tableRouter = require('./routes/table');
var studentRouter = require('./routes/student');
var wxRouter = require('./routes/wxLogin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// 自定义token
logger.token('localDate',function getDate(req) {
  let date = new Date();
  return date.toLocaleString()
})
logger.format('joke', '[joke] :localDate :method :url :status :res[content-length] - :response-time ms');
app.use(logger('kklt', {stream: accessLogStream}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/wx', wxRouter);
app.use('/student', studentRouter);
app.use('/table', tableRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
