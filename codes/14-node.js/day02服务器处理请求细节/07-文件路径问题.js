// 读取文件内容
// 必须要到这个文件的的目录里面来执行js代码
// fs模块操作文件，如果书写相对路径，是相对node命令执行的位置，不是js文件所在位置，
// 如果执行位置改变了，文件就找不到了
// 解决方案：使用绝对路径
/* 
  读取失败: [Error: ENOENT: no such file or directory, open 'F:\web\data.txt'] {
    errno: -4058,
    code: 'ENOENT',
    syscall: 'open',
    path: 'F:\\web\\data.txt'
  }
*/
const fs = require('fs')

fs.readFile(__dirname + '\\data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("读取失败:", err);
    } else {
        console.log(data);
    }
})

// 绝对路径
// console.log(__dirname + '\\data.txt');
// console.log(__filename);