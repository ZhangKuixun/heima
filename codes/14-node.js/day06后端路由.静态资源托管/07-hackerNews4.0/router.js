const express = require('express');
const path = require('path');
const fs = require('fs');

// 创建外置路由对象
const router = express.Router();

// 首页
router.get('/index', (req, res) => {
    // 读数据，排序，渲染模板
    readData(data => {
        data.list.sort((a, b) => a.id - b.id);
        res.render('index.html', data);
    })
});

// 首页
router.get('/', (req, res) => {
    // 重定向到index
    res.redirect('/index');
});

// 详情页
router.get('/detail', (req, res) => {
    // 获取前端的id，查数据，渲染页面
    let id = req.query.id;
    readData(data => {
        let info = data.list.find(v => v.id == id);
        res.render('detail.html', info);
    })
});

// 提交
router.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'submit.html'))
})

// 添加数据
router.post('/add', (req, res) => {
    // 读表单数据；读数据库数据；给新数据添加id；把新数据添加到数组；把数据存回数据库；
    let info = req.body;
    readData(data => {
        info.id = data.list[data.list.length - 1].id + 1; //设置id
        data.list.push(info);
        data = JSON.stringify(data, null, 4);
        writeData(data, () => {
            res.redirect('/');
        })
    })
})

// 绑定路由
module.exports = router;


// // 路由
// module.exports = function(req, res) {
//     console.log(req.url, req.method);
//     if (req.url.startsWith('/index') || req.url === '/') { // 首页
//         handler.showIndex(req, res);
//     } else if (req.url.startsWith('/detail')) { // 详情页
//         handler.showDetail(req, res);
//     } else if (req.url.startsWith('/submit')) { // 提交页面
//         handler.showSubmit(req, res);
//     } else if (req.url.startsWith('/assets')) { // 静态资源处理
//         handler.showAssets(req, res);
//     } else if (req.url.startsWith('/add') && req.method == "GET") { // 处理提交
//         handler.addGet(req, res);
//     } else if (req.url.startsWith('/add') && req.method == "POST") { // 处理提交
//         handler.addPost(req, res);
//     } else {
//         handler.show404(req, res);
//     }
// }


// 读取文件
function readData(callback) {
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
        if (err) {
            return console.log("读取失败：", err);
        }
        data = JSON.parse(data);

        callback && callback(data); // 把数据交割回调函数
    });
}

// 写入文件
function writeData(data, callback) {
    fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, 'utf-8', (err, data) => {
        if (err) {
            return console.log("添加失败：", err);
        }

        callback && callback(); // 把数据交割回调函数
    })
}