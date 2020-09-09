"use strict";

// Lowdb
var low = require('./node_modules/lowdb/lib/main');

var FileSync = require('./node_modules/lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');
var db = low(adapter); // Set some defaults

db.defaults({
  users: []
}).write();
module.exports = db;