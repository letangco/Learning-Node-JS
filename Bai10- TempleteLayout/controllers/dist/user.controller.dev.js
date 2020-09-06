"use strict";

var db = require('../db');

var _require = require('uuid'),
    uuidv4 = _require.v4;

module.exports.index = function (req, res) {
  var q = req.query.q || '';
  var matchValue = db.get('users').value().filter(function (user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('user', {
    users: matchValue
  });
};

module.exports.postAdd = function (req, res) {
  req.body.id = uuidv4();
  db.get('users').push(req.body).write();
  res.redirect('/');
};