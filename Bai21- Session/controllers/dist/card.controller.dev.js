"use strict";

var db = require('../db');

module.exports.addToCard = function (req, res, next) {
  var productId = req.params.productId;
  var sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect('/products');
    return;
  }

  var countProduct = db.get('sessions').find({
    id: sessionId
  }).get('card.' + productId, 0).value();
  db.get('sessions').find({
    id: sessionId
  }).set('card.' + productId, countProduct + 1).write();
  res.redirect('/products');
};