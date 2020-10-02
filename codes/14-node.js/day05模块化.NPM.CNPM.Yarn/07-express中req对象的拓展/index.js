const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // 创建服务器

// 1.安装body-parser：npm i body-parser；引入body-parser
// 2.给req.body赋值
app.use(bodyParser.urlencoded({ extended: true }));

// 路由监听
app.use('/', (req, res) => {
    console.log(req.url, req.method);
    console.log(req.query);

    // express中新增：
    // req.query 存放get方式传递数据
    // req.body 存放post方式传递的数据
    // req.query1 = url.parse(req.url,true).query;

    // req.body 默认undefined;
    // console.log(req.body);


    console.log(req.body);

    res.send('use-');
});



app.listen(9999, () => {
    console.log('http://localhost:9999 服务器已启动');
});