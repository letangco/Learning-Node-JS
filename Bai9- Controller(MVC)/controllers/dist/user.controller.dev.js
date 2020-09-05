"use strict";

var db = require('../db');

var _require = require('uuid'),
    uuidv4 = _require.v4;

module.exports.index = function (req, res) {
  var key = req.query.q || '';
  var value = db.get('users').value().filter(function (user) {
    return user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
  });
  res.render('user', {
    users: value
  });
};

module.exports.insert = function (req, res) {
  req.body.id = uuidv4();
  db.get('users').push(req.body).write();
  res.redirect('/');
};

module.exports.viewInsert = function (req, res) {
  res.render('insert');
};

module.exports.viewUser = function (req, res) {
  var id = req.params.id;
  var user = db.get('users').find({
    id: id
  }).value();
  res.render('viewUser', {
    user: user
  });
};