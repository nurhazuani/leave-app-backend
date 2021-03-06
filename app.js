var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var env = require('dotenv').config()
var cors = require('cors');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var leaveRouter = require('./routes/leave');
var adminRouter = require('./routes/admin');

var Models = require("./models")

var app = express();

// start database
Models.sequelize.sync();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/leave', leaveRouter)
// app.use('/admin', adminRouter)
app.use('/api/user', adminRouter)

module.exports = app;
