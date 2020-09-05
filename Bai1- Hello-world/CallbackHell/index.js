var fs = require('fs');
// Sync
// var file1 = fs.readFileSync('file1.txt', {encoding: 'utf-8'});
// var file2 = fs.readFileSync('file2.txt', {encoding: 'utf-8'});
// var file3 = fs.readFileSync('file3.txt', {encoding: 'utf-8'});

// console.log(file1, file2, file3);

// Async
fs.readFile('./file1.txt',{encoding: 'utf-8'},function (err, f1){
    console.log(f1);
    fs.readFile('./file2.txt',{encoding: 'utf-8'},function(err, f2) {
        console.log(f2);
        fs.readFile('./file3.txt',{encoding: 'utf-8'},function(err,f3) {
            console.log(f3);
        });
    });
});