const db =  require('../db');
const { v4: uuidv4 } = require('uuid');

module.exports.index = (req, res)=>{
    const q= req.query.q || '';
    const matchValue = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    })

    res.render('user',{users: matchValue});
};

module.exports.postAdd = (req, res)=>{
    req.body.id = uuidv4();
    db.get('users').push(req.body).write();
    res.redirect('/');
};