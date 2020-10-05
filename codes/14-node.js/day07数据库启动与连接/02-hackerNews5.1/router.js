// 外置路由，根据不同的请求，处理路由
const express = require('express');
const handler = require("./handler");

// 创建外置路由对象
const router = express.Router();

// 注册路由
router.get('/', (req, res) => {
    handler.showIndex(req, res);
});

// 首页
router.get('/index', (req, res) => {
    handler.showIndex(req, res);
})

// 详情页
router.get('/detail', (req, res) => {
    handler.showDetail(req, res);
})

// 提交页
router.get('/submit', (req, res) => {
    handler.showSubmit(req, res);
})

// post提交
router.post('/add', (req, res) => {
    handler.addPost(req, res);
})

// 删除
router.get('/delete', (req, res) => {
    handler.delete(req, res);
})


// 导出
module.exports = router;