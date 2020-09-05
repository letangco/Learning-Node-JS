// var today = new Date();
// console.log(today);
// var fs = require('promise-fs');

// function onDone(file){
//     console.log(file);
// }
// function onError(error){
//     console.log(error);
// }

// function readFile(path){
//     return fs.readFile(path, {encoding: 'utf8'});
// }

// readFile('file1.txt')
// .then(onDone)
// .catch(onError)
// .then(()=>{
//     return readFile('file2.txt')
// })
// .then(onDone)
// .catch(onError)
// .then(()=>{
//     return readFile('file3.txt')
// })
// .then(onDone)
// .catch(onError);


// Promise
var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject){
        fs.readFile(path, { encoding: 'utf-8' }, function (err, data) {
            if(err){
                reject(err);
            }
            else{
                // Những gì được gọi bởi hàm resole thì sẽ được truyền vào trong then ở dưới
                resolve(data);
            }
        });
    });
}

readFilePromise('file1.txt')
// Dữ liệu được gọi ở hàm resole ở trên được chuyển vào then
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});