"use strict";

var express = require('express');

var router = express.Router();

var db = require('../db');

var _require = require('uuid'),
    uuidv4 = _require.v4;

router.get('/', function (req, res) {
  var key = req.query.q || '';
  var value = db.get('users').value().filter(function (user) {
    return user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
  });
  res.render('user', {
    users: value
  });
});
router.get('/insert', function (req, res) {
  res.render('insert');
});
router.post('/insert', function (req, res) {
  req.body.id = uuidv4();
  db.get('users').push(req.body).write();
  res.redirect('/');
});
router.get('/:id', function (req, res) {
  var id = req.params.id;
  var user = db.get('users').find({
    id: id
  }).value();
  res.render('viewUser', {
    user: user
  });
});
module.exports = router;