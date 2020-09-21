// 用path模块优化读取文件
const fs = require('fs');
const path = require('path');

// 读取文件
fs.readFile(path.join(__dirname, './data.txt'), 'utf-8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});