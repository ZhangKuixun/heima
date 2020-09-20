// fs.appendFile
// 异步地追加数据到文件，如果文件不存在则创建文件
// fs.appendFile('文件.txt', '追加的数据', '编码格式', (err) => {
//    if (err) throw err;
//    console.log('数据已被追加到文件');
// });
const fs = require('fs');
fs.appendFile('data.txt', '\n藏猫猫', 'utf8', (err) => {
    if (err) {
        console.log("失败：", err);
    } else {
        console.log("追加成功");
    }
})