const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    console.log(req.url);
    // 服务器根据不同的请求做出不同的响应，要动态判断req.url，根据不同的请求地址，返回不同数据
    res.setHeader('content-type', 'text/html;charset=utf-8');
    if (req.url.startsWith('/index')) {
        res.end('你访问首页');
    }
    res.end('ok');
});
server.listen(9999, () => console.log('http://localhost:9999/ 服务器已经启动'));