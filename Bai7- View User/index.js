var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
// Lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
 
const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults
db.defaults({ users: []})
  .write()

var port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// var users = [
//     {id: 1,name:"A"},
//     {id: 2,name:"B"},
//     {id: 3,name:"C"},
// ];

app.get('/',(req, res)=>{
    var key = req.query.q || '';
    var value = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
    });
    res.render('user',{users: value});
});

app.get('/insert',(req,res)=>{
    res.render('insert');
});

app.post('/insert',(req,res)=>{
    req.body.id = uuidv4();
    db.get('users').push(req.body).write();
    res.redirect('/');
});

app.get('/:id',(req, res)=>{
    var id = req.params.id;
    var user = db.get('users').find({id : id}).value();
    res.render('viewUser',{user:user});
})

app.listen(port,function(){
    console.log("server is listening on "+port);
})