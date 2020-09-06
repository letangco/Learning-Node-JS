const express =  require('express');
const app = express();
const controller = require('./controllers/user.controller');

var port = process.env.PORT || 3000;



app.set('view engine', 'pug');
app.set('views', './views');

// Index hiển thị danh sách User và tìm kiếm User
app.get('/',controller.index);

// Thêm user vào danh sách
app.get('/add', (req, res)=>{
    res.render('add');
});

app.post('/add', controller.postAdd);

app.listen(port, function(){
    console.log("Server is listening on "+port);
})