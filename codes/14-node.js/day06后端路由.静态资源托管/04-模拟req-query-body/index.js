const express = require('express');
const url = require('url');
const queryString = require('querystring');

// 创建服务器
const app = express();

app.use((req, res, next) => {
    // 创建query1
    req.query1 = url.parse(req.url, true).query;
    next();
})

app.use((req, res, next) => {
    // 创建body1
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })

    req.on('end', () => {
        console.log(str);
        req.body1 = queryString.parse(str);
        next();
    })
})

app.use('/index', (req, res) => {
    // 访问：http://localhost:9999/index?name=%27zs%27&age=16
    // 输出：[Object: null prototype] { name: "'zs'", age: '16' }
    // console.log(req.query1);


    // 访问：http://localhost:9999/index?name=%27zs%27&age=16
    // 输出：[Object: null prototype] { name: "'zs'", age: '16' }
    console.log(req.body1);

    res.send('ok')
})

app.listen(9999, () => { console.log("http://localhost:9999/index 服务器已启动"); });