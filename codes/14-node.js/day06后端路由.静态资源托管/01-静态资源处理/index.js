const express = require('express');
const path = require('path');

const app = express();

// 旧的写法
// app.use((req, res) => {
//     // 返回静态页面 
//     res.sendFile(path.join(__dirname, 'pages', req.url));// 访问：http://localhost:9999/index.html
// });


// 在express中，静态资源托管
// 你只需要告诉express，静态资源在哪个文件夹放着，访问的时候只能用域名+文件名访问
// app.use(express.static('pages'));
// 访问：http://localhost:9999
// 访问：http://localhost:9999/index.html
// 访问：http://localhost:9999/google.png
// 不能访问：http://localhost:9999/pages/index.html


// 用真实的路径方法静态资源，域名+地址+文件名
app.use('/pages', express.static('pages'));
// 访问：http://localhost:9999/pages/index.html


app.listen(9999, () => {
    console.log('http://localhost:9999 服务器已启动');
});