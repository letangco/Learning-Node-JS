const db =  require('../db');

module.exports.addToCard = (req,res,next)=>{
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    if (!sessionId){
        res.redirect('/products');
        return;
    }
    var countProduct = db.get('sessions').find({id:sessionId}).get('card.'+productId,0).value();
    db.get('sessions').find({id: sessionId}).set('card.'+productId,countProduct+1).write();
    res.redirect('/products');
};

module.exports.viewCardProduct = (req, res, next)=>{
    var sessionId = req.signedCookies.sessionId;
    if (sessionId){
        var id = db.get('sessions').find({id : sessionId}).value();
        res.render('layouts/common',{id: id});
    }
    next();
}