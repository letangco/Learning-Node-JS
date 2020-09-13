var db = require('../db');

module.exports.viewCardProduct = function (req, res, next) {
    var sessionId = req.signedCookies.sessionId;
    console.log(sessionId);
    var countProduct = 0;
    var id = db.get('sessions').find({ id: sessionId }).value();
    if (id) {
        if (id.card) {
            console.log(Object.values(id.card));
            Object.values(id.card).forEach(item => {
                countProduct = countProduct + item;
            });
        }
        else countProduct = 0;

    }
    res.locals.countProduct = countProduct;
    next();
}

