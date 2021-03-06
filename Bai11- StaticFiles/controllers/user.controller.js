const db =  require('../db');
const { v4: uuidv4 } = require('uuid');

// Trang chủ
module.exports.home = (req,res)=>{
    res.render('home');
};

// Hiển thị và search User
module.exports.index = (req, res)=>{
    const q= req.query.q || '';
    const matchValue = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    })
    res.render('user',{users: matchValue});
};

// Thêm User
module.exports.viewAdd = (req,res)=>{
    res.render('add');
};

module.exports.postAdd = (req,res)=>{
    req.body.id = uuidv4();
    var error=[];
    if(!req.body.name) {
        error.push("Name is required!");
    }
    if(!req.body.phone) {
        error.push("Phone is required!");
    }
    if(error.length){
        res.render('add',{errors: error,values: req.body});
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/users');
};

// Xem thông tin người dùng
module.exports.viewUser = (req, res)=>{
    var id = req.params.id;
    var user = db.get('users').find({id : id}).value();
    res.render('viewUser',{user:user});
};

