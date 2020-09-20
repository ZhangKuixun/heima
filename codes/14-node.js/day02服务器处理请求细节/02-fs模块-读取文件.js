// node 文件操作模块
// 在node中，只有全局对象的属性可以直接使用，其他模块都不能直接使用，先导入模块才能使用
// 引入fs文件操作模块
const fs = require('fs');

// 读取文件内容
// fs.redFile(文件路径,[读取的文件编码格式],function(err,data){
//    err 错误信息
//    data 读取文件内容
// })
fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    // data.toString() 可以转码
    console.log(data.toString());
})