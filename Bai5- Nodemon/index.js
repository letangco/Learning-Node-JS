var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

var port = process.env.PORT ||3000;

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(port, () => {
    console.log("server is listening in " + port);
})

// cài đặt file Package.json bằng câu lệnh: npm init
// Vào package.json => trong scripts: start :{nodemon index.js}
// Lưu các thay đổi mà không cần khởi động lại server => Nodemon