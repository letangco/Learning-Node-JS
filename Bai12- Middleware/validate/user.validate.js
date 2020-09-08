module.exports.postAdd = function(req,res,next){
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
    res.locals.success = true;
    next();
}