"use strict";

var db = require('../db');

var _require = require('../routers/auth.route'),
    use = _require.use;

module.exports.login = function (req, res, next) {
  res.render('auth/login');
};

module.exports.postLogin = function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var user = db.get('users').find({
    email: email
  }).value();

  if (!user) {
    res.render('auth/login', {
      errors: ['User does not exist.'],
      values: req.body
    });
    return;
  }

  if (user.password !== password) {
    res.render('auth/login', {
      errors: ['Wrong password.'],
      values: req.body
    });
    return;
  }

  res.cookie('userID', user.id);
  res.redirect('/');
};