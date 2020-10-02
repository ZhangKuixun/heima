const fs = require('fs');
const path = require('path');

// 提供公共的工具函数
module.exports = {
    // 读取文件
    readFile(callback) {
        fs.readFile(getPath(), 'utf-8', (err, data) => {
            if (err) {
                return console.log("读取失败：", err);
            }
            data = JSON.parse(data);

            callback && callback(data); // 把数据交割回调函数
        });
    },
    // 写入文件
    writeFile(data, callback) {
        fs.writeFile(getPath(), data, 'utf-8', (err, data) => {
            if (err) {
                return console.log("添加失败：", err);
            }

            callback && callback(); // 把数据交割回调函数
        })
    }
}

function getPath() {
    return pathString = path.join(__dirname, 'data', 'data.json');
}