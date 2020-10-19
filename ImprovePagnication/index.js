const express =  require('express');
const app = express();
require('dotenv').config();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-demo', {useNewUrlParser: true, useUnifiedTopology: true});

const apiProductRoute = require('./api/routes/product');

var port = process.env.PORT || 3000;

const userRouter = require('./routers/user.route');
const authRouter = require('./routers/auth.route');
const productRouter = require('./routers/product.router');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Phần trong Signed Cookie, truyền chuỗi ngẫu nhiên
app.use(cookieParser(process.env.SESSION_SECRET));

// Index hiển thị danh sách User và tìm kiếm User
app.use('/',userRouter);
app.use('/auth',authRouter);
app.use('/',productRouter);

// Static Files: Lưu trữ các file static ở trong thư mục public
app.use(express.static('public'))


// API
app.use('/api/products', apiProductRoute);

app.listen(port, function(){
    console.log("Server is listening on "+port);
})