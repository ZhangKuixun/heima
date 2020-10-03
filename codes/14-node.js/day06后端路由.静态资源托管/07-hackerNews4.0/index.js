// 使用express做index.js

const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

// 创建服务
const app = express();

// 配置整个项目的模板
app.engine('html', require('express-art-template'));
// 模板目录，默认目录是“/views”
// app.set('views', './pages');

app.use('/assets', express.static('assets'));

// 给req.body赋值
app.use(bodyParser.urlencoded({ extended: false }))

// 辅助观察
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

// 处理路由
app.use(router);

// 设置端口
app.listen(9999, () => { console.log("http://localhost:9999 服务器已启动") });