"use strict";

var db = require('../db');

var _require = require('../node_modules/uuid/dist'),
    uuidv4 = _require.v4; // Trang chủ


module.exports.home = function (req, res) {
  res.render('home');
}; // Hiển thị và search User


module.exports.index = function (req, res) {
  var q = req.query.q || '';
  var matchValue = db.get('users').value().filter(function (user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('user', {
    users: matchValue
  });
}; // Thêm User


module.exports.viewAdd = function (req, res) {
  console.log(req.cookies);
  res.render('add');
};

module.exports.postAdd = function (req, res) {
  req.body.id = uuidv4(); // Đoạn này sử dụng validate kiểm tra submit form từ người dùng
  // Sử dụng Middleware
  // var error=[];
  // if(!req.body.name) {
  //     error.push("Name is required!");
  // }
  // if(!req.body.phone) {
  //     error.push("Phone is required!");
  // }
  // if(error.length){
  //     res.render('add',{errors: error,values: req.body});
  //     return;
  // }
  // Biến local trong vòng đời middleware

  console.log(res.locals);
  db.get('users').push(req.body).write();
  res.redirect('/users');
}; // Xem thông tin người dùng


module.exports.viewUser = function (req, res) {
  var id = req.params.id;
  var user = db.get('users').find({
    id: id
  }).value();
  res.render('viewUser', {
    user: user
  });
};