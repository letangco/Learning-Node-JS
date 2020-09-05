const EventEmitter = require ('events');
var emitter = new EventEmitter();

// Sử dụng module Event để thực hiện demo Event Emitter không phải khởi tạo đối tượng

emitter.on("Gioi",function(){
    console.log("Hs Gioi");
});

emitter.emit("Gioi");

class MyEmitter extends EventEmitter{} // Kế thừa từ module EventEmitter
const myemitter = new MyEmitter();
myemitter.on ('callEvent', ()=>{
    console.log("Sự kiện được kích hoạt!!!!")
})

myemitter.emit('callEvent');

