// fs.writeFile
// fs.writeFile(文件路径, 数据, 以什么编码格式写入, (err) => {
//    err:写入失败的错误信息
// })
// 注意：
//    1.写入文件时，会覆盖之前的内容
//    2.如果文件名写错，会创建一个新文件，再把内容写入新文件中
const fs = require('fs');
fs.writeFile('./data.txt', '写入文件', 'utf8', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('文件已被保存');
    }
});