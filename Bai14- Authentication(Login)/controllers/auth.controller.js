const db =  require('../db');
const { use } = require('../routers/auth.route');

module.exports.login = (req,res,next)=>{
    res.render('auth/login');
};

module.exports.postLogin= (req,res,next)=>{
    var email = req.body.email;
    var password = req.body.password ;
    var user = db.get('users').find({email : email}).value();
    
    if(!user){
        res.render('auth/login',{
            errors:[
                'User does not exist.'
            ],
            values: req.body
        });
        return;
    }

    if(user.password!==password){
        res.render('auth/login',{
            errors:[
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }

    res.cookie('userID' ,user.id );
    res.redirect('/');
};