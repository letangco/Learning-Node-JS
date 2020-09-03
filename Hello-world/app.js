const express = require ('express');
const app = express();

const port =3000;
app.get('/', function(request, response){
    response.send('<h1>Hello Node JS</h1>')
});
app.get('/user', function(request, response){
    response.send('<h1>User List</h1>')
});

app.listen(port,function(){
    console.log("Server listening on port "+port);
});