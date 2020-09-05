var fs = require('fs');
// Sync

// console.log("start");

// var file1 = fs.readFileSync('file1.txt',{encoding: 'utf-8'});
// console.log(file1);

// var file2 = fs.readFileSync('file2.txt',{encoding: 'utf-8'});
// console.log(file2);

// var file3 = fs.readFileSync('file3.txt',{encoding: 'utf-8'});
// console.log(file3);

// console.log("end");

// Async
fs.readFile('file1.txt',{encoding: 'utf-8'},(err, data)=>{
    if(err) console.log(err);
    else console.log(data);
})
console.log('start');
console.log('end');