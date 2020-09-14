"use strict";

var db = require('../db');

var md5 = require('md5');

module.exports.login = function (req, res, next) {
  res.render('auth/login');
};

module.exports.postLogin = function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var user = db.get('users').find({
    email: email
  }).value();
  var hashPassword = md5(password);

  if (!user) {
    res.render('auth/login', {
      errors: ['User does not exist.'],
      values: req.body
    });
    return;
  } // Kiểm tra mật khẩu trong database và người dùng gửi lên sau khi hash.


  if (user.password !== hashPassword) {
    res.render('auth/login', {
      errors: ['Wrong password.'],
      values: req.body
    });
    return;
  }

  res.cookie('userID', user.id);
  res.redirect('/');
};