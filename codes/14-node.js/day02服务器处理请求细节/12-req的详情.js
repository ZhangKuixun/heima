const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    console.log("请求来了");
    // 获取请求报文中的数据
    // 请求地址 req.url 不包含域名和端口
    // 请求方式 req.method
    // 请求头 req.headers获取的是一个对象  req.rawHeaders获取的是一个数组
    // 请求主体 req.body
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.body);

    res.end('end');
});
server.listen(9999, () => {
    console.log('http://localhost:9999/ 服务器已经启动');
})