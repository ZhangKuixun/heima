// 在node中没有现成服务器，需要手动搭建服务器，进行前后端交互
// http模块，用于处理http请求

// 搭建服务器步骤：
// 1.引入http模块
// 2.创建服务器实例
// 3.绑定事件接收处理请求
// 4.设置端口启动服务器
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    // 接受到请求
    // req:request 请求报文对象
    // res:response 响应报文对象
    // 此时可以获取完整的请求报文，并且可以使用请求报文数据
    // 响应报文还没有生成，需要我们自己去设置响应报文
    // 处理请求函数
    console.log("有请求进来了");
    // res.write('响应主体...'); // 响应主体
    // res.end(); // 给客户端返回一个结束标记，表示响应完成
    res.end('body...'); // 合并响应主体和结束标记
});
server.listen(9999, () => { // 端口号尽量在7000以上
    console.log("服务器已启动");
});