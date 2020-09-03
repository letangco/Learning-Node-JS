var fs = require('fs');
const { resolveTxt } = require('dns');
const { readFile } = require('promise-fs');
const { time } = require('console');


// Khởi tạo đối tượng Promise để thực hiện các tác vụ Promise
function readFilePromise(path){
    return new Promise ((resolve, rejects) => {
        fs.readFile(path, {encoding:'utf-8'}, (err, data)=>{
            if(err){
                rejects(err);
            }
            else resolve(data);
        })
    })
}

readFilePromise('file1.txt')
.then((data)=>{
    console.log(data);
    return readFilePromise('file2.txt');
})
.then((data)=>{
    console.log(data);
    return readFilePromise('file3.txt');
})
.then(data =>{console.log(data)});

console.time("start");
Promise.all([readFilePromise('file1.txt'),readFilePromise('file2.txt'),readFilePromise('file3.txt')])
.then((value)=>{console.log(value);})
.catch((err)=>{
    console.log(err);
});
console.timeEnd("start");