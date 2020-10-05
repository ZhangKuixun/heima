// 外置路由，根据不同的请求，处理路由
const express = require('express');
const path = require('path');
const mongodb = require('mongodb');


// 创建外置路由对象
const router = express.Router();

// 获取客户端对象，可以连接目标数据库
const mongodbClient = mongodb.MongoClient;
// 连接数据地址+端口
const url = "mongodb://127.0.0.1:27017";

// 注册路由
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'index.html'));
    // 首页：
    //     1.查询数据；
    //     2.用模板引擎渲染数据；
    conDB((news, client) => {
        // 操作集合
        news.find().toArray((err, data) => {
            if (err) {
                console.log("获取数据失败：", err);
            }
            // 拿到数据进行渲染（数据格式是数组）
            res.render('index.html', { list: data });

            // 关闭数据库
            client.close();
        });
    })
});

// 首页
router.get('/index', (req, res) => {
    res.redirect('/');
})

// 详情页
router.get('/detail', (req, res) => {
    // 1.获取数据id
    // 2.根据id查找对应数据
    // 3.用模板引擎渲染
    let id = req.query.id;
    //mongodb里面的id是ObjectID()，接收的的id转成ObjectID()
    id = mongodb.ObjectID(id);
    conDB((news, client) => {
        news.find({ _id: id }).toArray((err, data) => {
            res.render("detail.html", data[0]);
            client.close();
        });
    })
})

// 提交页
router.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'submit.html'))
})

// post提交
router.post('/add', (req, res) => {
    // 1.获取表单数据
    // 2.把数据添加到数据库中
    // 3.重定向，看到添加结果
    // let body = req.body;
    let body = {
        title: req.body.title,
        url: req.body.url,
        text: req.body.text,
    }
    conDB((news, client) => {
        news.insert(body);
        // client.close();
        res.redirect('/');
    })
})

// 删除
router.get('/delete', (req, res) => {
    let id = req.query.id;
    id = new mongodb.ObjectID(id);
    conDB((news, client) => {
        news.deleteOne({ _id: id }) // 删除
        res.redirect('/');
    })
})


// 导出
module.exports = router;

// 封装连接数据库的方法
function conDB(callback) {
    mongodbClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            return console.log('连接数据库失败：', err);
        }
        // 选择数据库/集合
        let news = client.db('hk').collection('news');

        callback && callback(news, client);
    })
}