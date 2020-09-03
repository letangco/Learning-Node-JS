// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

function sayHello(){
  console.log("Hello Node JS");
}
// module.exports  = sayHello;
function parentFunction(f){
  f();
  var f1 = function (){
    console.log("Function seconds")
  };
  return f1;
}
parentFunction(sayHello)();
// Arrow function
var arrF = name=>{
  console.log("Hello "+name);
}
arrF("Lê Tăng Có");