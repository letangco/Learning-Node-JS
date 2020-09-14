const express =  require('express');
const app = express();

require('dotenv').config();
console.log(process.env.SESSION_SECRET)
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

var port = process.env.PORT || 3000;

const userRouter = require('./routers/user.route');
const authRouter = require('./routers/auth.route');
const productRouter = require('./routers/product.router');
const cardRouter = require('./routers/card.route');

const sessionMiddleware = require('./middleware/session.middleware');
const viewCardProduct = require('./middleware/viewCardProduct.middleware');

// HTTP API
const apiProductRoute = require('./api/router/products.route');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Phần trong Signed Cookie, truyền chuỗi ngẫu nhiên
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
app.use(viewCardProduct.viewCardProduct);

// Index hiển thị danh sách User và tìm kiếm User
app.use('/',userRouter);
app.use('/auth', authRouter);
app.use('/',productRouter);
app.use('/card', cardRouter);

// Static Files: Lưu trữ các file static ở trong thư mục public
app.use(express.static('public'))

// App HTTP API
app.use('/api/products',apiProductRoute);

app.listen(port, function(){
    console.log("Server is listening on "+port);
})