const express = require('express');
const bodyParser = require('body-parser');

// 创建服务器
const app = express();

// 通过中间件给req.body赋值；
// extended:true 表示使用qs库来解析字符串；qs能解析奇葩的数据
// extended:false 表示使用querystring库来解析字符串；
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/index', (req, res) => {
    console.log(req.body);
    res.send();
});

app.listen(9999, () => { console.log("http://localhost:9999/index 服务器已启动"); });