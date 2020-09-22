const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    console.log("请求来了");
    // 获取请求报文中的数据
    // 状态码 res.statusCode
    // 状态文本 res.statusMessage
    // 响应头 res.setHeader(name, value);
    // 响应主体 res.write(data);
    // 结束响应标志 res.end(); res.end(data);
    // res.statusCode = 404;
    res.statusMessage = "not fund"; // 状态文本用英文
    res.setHeader('content-type', 'text/html;charset=utf-8'); // 响应数据的格式
    res.write('<h1>我是大标题</h1>'); // 返回到客户端的数据
    res.end('end'); // 告诉客户端请求结束
});
server.listen(9999, () => {
    console.log('http://localhost:9999/ 服务器已经启动');
})