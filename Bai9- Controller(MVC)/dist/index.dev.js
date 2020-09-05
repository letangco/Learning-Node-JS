"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var userRoutes = require('./routes/user.route');

var port = process.env.PORT || 3000;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/', userRoutes);
app.listen(port, function () {
  console.log("server is listening on " + port);
});