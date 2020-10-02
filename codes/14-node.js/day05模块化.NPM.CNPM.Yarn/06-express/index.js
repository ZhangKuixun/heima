const express = require('express');

// 创建服务器
const app = express();

// 1-路由，以特定的方式请求特定的地址，没有地址,默认是index
app.get('/index', (req, res) => {
    res.send('首页');
})
app.get('/list', (req, res) => {
    res.send('列表页');
})
app.get('/detail', (req, res) => {
    res.send("详情页");
})


// 2-app.all(url,(req,res)=>{})，以任意请求方式，监听指定url请求，如：get,post
app.all('/index', (req, res) => {
    console.log(req.method, req.url); // GET /index
    res.send('all-首页');
});


// 3.app.use(url,(req,res)=>{})
// 任意请求方式，监听指定url开头的请求
app.use('/index', (req, res) => {
    console.log(req.url, req.method);
    res.send('use-首页');
    //http://localhost:9999/index  打印：/ GET
    //http://localhost:9999/index/aa/bb  打印：/aa/bb GET
})



// 启动服务器
app.listen(9999, () => {
    console.log('http://localhost:9999 服务器已启动');
});