"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var userRouter = require('./routers/user.route');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); // Index hiển thị danh sách User và tìm kiếm User

app.use('/', userRouter); // Static Files: Lưu trữ các file static ở trong thư mục public

app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("Server is listening on " + port);
});