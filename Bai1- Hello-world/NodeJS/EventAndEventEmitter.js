// SystemEvent (xảy ra trong C++ Core Node JS)
// Custom Event (Event Emitter - xảy ra ở tầng cao hơn trong hệ thống) 

var obj ={
    sayHello: "hello"
}
console.log(obj.sayHello);
console.log(obj["sayHello"]);

 var prop = "sayHello";
 console.log(obj[prop]);

 // Arr
 var arr = [];
 arr.push(function(){
     console.log("Function1");
 });
 arr.push(function(){
    console.log("Function2");
});
arr.push(function(){
    console.log("Function3");
});

arr.forEach(element => {

    element();
});

