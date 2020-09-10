const express =  require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var port = process.env.PORT || 3000;

const userRouter = require('./routers/user.route');
const authRouter = require('./routers/auth.route');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Phần trong Signed Cookie, truyền chuỗi ngẫu nhiên
app.use(cookieParser('lkdsnfsd83wunlwlaihoassee'));

// Index hiển thị danh sách User và tìm kiếm User
app.use('/',userRouter);
app.use('/auth',authRouter);

// Static Files: Lưu trữ các file static ở trong thư mục public
app.use(express.static('public'))

app.listen(port, function(){
    console.log("Server is listening on "+port);
})