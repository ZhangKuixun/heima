// 负责整个程序运行，服务器的启动监听请求

const http = require('http');
const router = require('./router')

// 创建服务
const server = http.createServer();

// 绑定事件，处理请求
server.on('request', (req, res) => {
    router(req, res);
});

// 处理服务
server.listen(9999, () => { console.log("http://localhost:9999 服务器已启动") });