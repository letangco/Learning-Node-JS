const express = require('express');
const app = express();

const port =3000;
app.get('/',function(request, response){
    response.send("<h1>Hello Node JS</h1>");
});
app.listen(port,()=>{
    console.log("server app listening at port"+ port);
});