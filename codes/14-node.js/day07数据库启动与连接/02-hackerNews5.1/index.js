const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router');

// 创建服务器
const app = express();

// 配置模板引擎
app.engine('html', require('express-art-template'));
// 页面路径
// app.set('views', './pages');

// 静态资源
app.use('/assets', express.static('assets'));

// 给req.body赋值
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

// 处理路由
app.use(router);

// 设置端口监听
app.listen(9999, () => { console.log('http://localhost:9999  服务器已启动') })