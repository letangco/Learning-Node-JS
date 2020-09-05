const EventEmitter = require('events');
const util = require('util');
const { emit } = require('process');

function Dialog() {
    this.message = "Hello Node JS";
}

util.inherits(Dialog, EventEmitter); // Đối tượng Dialog kế thừa EventEmitter

Dialog.prototype.sayHello=function(name){
    console.log(this.message);
    this.emit('letangco',name);
}
var dialog = new Dialog();

dialog.on('letangco', (name) => {
    setImmediate(() => {
        console.log(name + " is learning Node JS");
    })
})
dialog.sayHello('Le Tang Co');