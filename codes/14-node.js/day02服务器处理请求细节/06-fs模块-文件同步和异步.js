// 同步和异步读取文件区别
const fs = require('fs');

// 异步读取文件
console.log("1111111111111");
// 异步
fs.readFile('data.txt', 'utf8', (err, data) => {
    console.log(data);
});
// 同步
console.log(fs.readFileSync('data.txt', 'utf8'));
console.log("2222222222222");