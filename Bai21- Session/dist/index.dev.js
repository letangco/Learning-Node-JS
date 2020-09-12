"use strict";

var express = require('express');

var app = express();

require('dotenv').config();

console.log(process.env.SESSION_SECRET);

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var port = process.env.PORT || 3000;

var userRouter = require('./routers/user.route');

var authRouter = require('./routers/auth.route');

var productRouter = require('./routers/product.router');

var cardRouter = require('./routers/card.route');

var sessionMiddleware = require('./middleware/session.middleware');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); // Phần trong Signed Cookie, truyền chuỗi ngẫu nhiên

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware); // Index hiển thị danh sách User và tìm kiếm User

app.use('/', userRouter);
app.use('/auth', authRouter);
app.use('/', productRouter);
app.use('/card', cardRouter); // Static Files: Lưu trữ các file static ở trong thư mục public

app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("Server is listening on " + port);
});