const Events = require('events');
var myEmitter = new Events();
myEmitter.on('event', (a,b)=>{
    setImmediate(()=>{
        console.log('this happens asynchronously');
        console.log(a,b);
    });
});
myEmitter.emit('event', 'a', 'b');