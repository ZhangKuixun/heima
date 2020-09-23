// fs path http 不需要安装
// mime 要自己安装，第三方模块

// mime.getType('a.jpg'); // ⇨ 'image/jpeg' 返回mime类型
// mime.getExtension('image/jpeg'); // ⇨ 'jpg' 根据mime类型返回后缀名

const mime = require('mime');
console.log(mime.getType('aaa.html'));
console.log(mime.getType('aaa.jpg'));
console.log(mime.getType('aaa.css'));
console.log(mime.getType('aaa.mp4'));
// 输出:
// text/html 
// image/jpeg  jpg和jpeg一样
// text/css  
// video/mp4
console.log(mime.getExtension('image/jpeg'));