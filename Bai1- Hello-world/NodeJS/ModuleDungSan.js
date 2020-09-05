var util = require('util');
var name= "Le";
var message = util.format("Hello, %s",name);

util.log(message); // Sử dụng log của module util

console.log(util.isArray([]));