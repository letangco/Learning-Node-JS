// Là những chuỗi mẫu cho phép nhúng các biểu thức để nối các chuỗi trong javascript (ES6)
// giúp lập trình nhanh chóng và tiện lợi

const { access } = require("fs");

// Đây là một kiểu 1 ví dụ của ES6 trong javascript
var a = 8;
var b = 14;

console.log(`Tổng a + b = ${a+b} \n Hiệu a - b = ${a-b}`);

var person ={
    name : "Linh",
    major : "accountant"
}

console.log("I am "+ person.name+", I do "+person.major);
console.log(`I am ${person.name}, I do ${person.major}`);