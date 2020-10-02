const express = require('express');
const path = require('path');
const fs = require('fs');

// 创建服务器
const app = express();

app.use((req, res) => {
    // 之前res相关的属性：
    // res.statusCode = 404
    // res.setMessage = not found
    // res.setHeader();
    // res.write();
    // res.end();

    // express新增：
    // res.status() 状态码
    // res.set() 响应头
    // res.send() 返回响应主体，结束响应
    // res.sendFile() 向浏览器发送文件的
    // res.redirect() 重定向
    // res.status(404);
    // res.set('content-type', 'text/css'); // 设置响应头
    // res.set({
    //     aa: 'bb',
    //     cc: 'dd'
    // })
    // res.send('res的拓展');


    // 重定向
    // 方式一：
    // fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {//以前读文件的写法
    //     if (err) {
    //         return console.log(err);
    //     }
    //     res.end(data);
    // })
    // res.sendFile(path.join(__dirname, 'index.html')); //文件路径必须是绝对路径

    // 方式二：
    res.redirect('./index')
});

app.listen(9999, () => {
    console.log('http://localhost:9999 服务器已启动');
});