const db =  require('../db');
var md5 = require('md5');

module.exports.login = (req,res,next)=>{
    res.render('auth/login');
};

module.exports.postLogin= (req,res,next)=>{
    var email = req.body.email;
    var password = req.body.password ;
    var user = db.get('users').find({email : email}).value();
    
    var hashPassword = md5(password);

    if(!user){
        res.render('auth/login',{
            errors:[
                'User does not exist.'
            ],
            values: req.body
        });
        return;
    }
    // Kiểm tra mật khẩu trong database và người dùng gửi lên sau khi hash.
    if(user.password!==hashPassword){
        res.render('auth/login',{
            errors:[
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }

    // Signed Cookie
    res.cookie('userID' ,user.id, {
        signed: true
    } );
    res.redirect('/');
};