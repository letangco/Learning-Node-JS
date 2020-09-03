const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

const port =3000;
app.get('/',function(request, response){
    response.render("index",{
        name: "Le Tang Co"
    });
});
app.get('/user',function(request, response){
    response.render('user', { title: 'Hey', message: 'Hello there!' ,users:[{id:1,name: 'A'},{id:2,name:'B'}]})
});
app.listen(port,()=>{
    console.log("server app listening at port"+ port);
});