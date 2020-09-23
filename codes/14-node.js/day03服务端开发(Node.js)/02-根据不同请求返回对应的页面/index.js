const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
server.on('request', (req, res) => {
    console.log(req.url);
    // 根据用户请求req.url返回对应页面
    if (req.url.startsWith('/index') || req.url === '/') {
        // 服务器去读取index.html中内容，添加到响应主体中，返回浏览器解析
        fs.readFile(path.join(__dirname, 'pages', 'index.html'), (err, data) => {
            // 异步读取内容
            if (err) {
                return console.log('读取首页失败：' + err);
            }
            res.end(data);
        })
    } else if (req.url.startsWith('/list')) {
        // 返回列表页
        fs.readFile(path.join(__dirname, 'pages', 'list.html'), (err, data) => {
            if (err) {
                return console.log('读取列表页失败：' + err);
            }
            res.end(data);
        })
    } else if (req.url.startsWith('/login')) {
        // 返回登录页
        fs.readFile(path.join(__dirname, 'pages', 'login.html'), (err, data) => {
            if (err) {
                return console.log("读取登录页失败：" + err);
            }
            res.end(data);
        })
    } else {
        // 返回404
        fs.readFile(path.join(__dirname, 'pages', '404.html'), (err, data) => {
            if (err) {
                return console.log("读取404失败：" + err);
            }
            res.end(data);
        })
    }
});
server.listen(9999, () => {
    console.log('http://localhost:9999 服务器已启动');
})