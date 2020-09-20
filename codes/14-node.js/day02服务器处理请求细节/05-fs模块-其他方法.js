// rename(oldname, newName, callback) 重命名
const fs = require('fs');
fs.rename('./data1.txt', '修改文件名.txt', (err) => {
    if (err) {
        console.log('修改失败：', err);
    } else {
        console.log("成功");
    }
})

// unlink(path, callback) 删除文件
fs.unlink('data1.txt', (err) => {
    if (err) {
        console.log('删除失败：', err);
    } else {
        console.log('删除成功');
    }
})