const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine','pug');
app.set('views','./views');

const user = [
    {id:1,name:'Le Tang Co'},
    {id: 2,name: 'Truong Thi My Linh'}
];

app.get('/',(req,res)=>{
    res.render('index',{name:'Le Tang Co'});
});

app.get('/user',(req,res)=>{
    res.render('user',{user:user})
});

app.get('/user/search', (req, res)=>{
    var key = req.query.q || '';
    var matchValue = user.filter(function(item){
        return item.name.toLowerCase().indexOf(key.toLowerCase())!==-1;
    });
    res.render('user',{user:matchValue});
});

app.listen(port,()=>{
    console.log('server listening on port'+port);
});