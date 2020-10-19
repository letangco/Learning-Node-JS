"use strict";

var db = require('../db');

module.exports.showProduct = function (req, res, next) {
  var q = req.query.q || ''; // const matchValue = db.get('products').value().filter(function(user){
  //     return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
  // })
  // res.render('products/product',{products:  matchValue});

  var page = parseInt(req.query.page) || 1; //n

  var perPage = 8;
  var start = (page - 1) * perPage;
  var end = page * perPage;
  res.render('products/product', {
    products: db.get('products').value().slice(start, end).filter(function (user) {
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
  });
};