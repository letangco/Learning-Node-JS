console.log("Node module system");
var Mouse = require('./mouse');
var Cat = require('./cat');

var mouse1 = new Mouse('yellow', 5);
var mouse2 = new Mouse('yellow', 2);
var mouse3 = new Mouse('yellow', 8);
var mouse4 = new Mouse('yellow', 7);

var cat =new Cat(10);
cat.eat(mouse1);
cat.eat(mouse2);
cat.eat(mouse3);
console.log(cat);