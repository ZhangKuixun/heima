// 根据用户请求，返回一个完整的静态页面
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const server = http.createServer();
server.on('request', (req, res) => {
    console.log(req.url);
    // 注意：设置header:text/html，如果是css文件，浏览器就会当作文本解析
    // res.setHeader('content-type', 'text/html;charset=utf-8');
    // 如果有很多的请求用req.url替换'index.html'
    fs.readFile(path.join(__dirname, 'pages', req.url), (err, data) => {
        if (err) {
            return console.log(err);
        }
        // 响应头
        res.setHeader('content-type', mime.getType(req.url));
        // 响应主体
        res.end(data);
    })
});
server.listen(9999, () => {
    console.log('http://localhost:9999/index.html 服务器已启动');
})