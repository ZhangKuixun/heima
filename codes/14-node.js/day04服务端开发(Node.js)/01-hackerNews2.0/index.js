const http = require('http');
// const mime = require('mime');
const fs = require('fs');
const path = require('path');
const template = require('art-template');

const server = http.createServer();
server.on('request', (req, res) => {
    //路由
    console.log(req.url, req.method);
    // res.setHeader('conetnt-type', mime.getType(req.url));
    if (req.url.startsWith('/index') || req.url === '/') {
        // 读取数据，渲染数据
        console.log(path.join(__dirname, 'data', 'data.json'));
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) {
                return console.log("读取失败", err);
            }
            data = JSON.parse(data);
            // 渲染模板
            let str = template(path.join(__dirname, 'views', 'index.html'), data);
            res.end(str);
        });
    } else if (req.url.startsWith('/detail')) {
        res.end("detail")
    } else if (req.url.startsWith('/submit')) {
        res.end("submit")
    } else {
        res.end("non")
    }
})
server.listen(9999, () => { console.log("http://localhost:9999 服务器已启动") });