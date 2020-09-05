// module.exports.SayHello = function (){
//     console.log("Say Hello Module Khai Bao va Su Dung Module");
// }

function Person (){
    this.message = "Hello Node JS";
    this.sayHello = function(){
        console.log(this.message);
    }
}

function Hello4(){
    this.message = "Hello Node JS";
    this.sayHello = function(){
        console.log(this.message);
    }
}

var message = "Hello Trương Thị Mỹ Linh";
function sayHelloTTML()
{
    console.log(message);
}

module.exports = {
    greeting: sayHelloTTML
};