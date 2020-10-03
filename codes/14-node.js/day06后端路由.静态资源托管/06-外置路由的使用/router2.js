// 外置路由：
// 在express提供了一个外置路由模块，可以用来绑定路由，绑定之后，传给主模块进行使用

const express = require('express');

// 创建外置路由对象，app对象的替身
const router = express.Router();

// module.exports = (app) => {
// app = 'hh'; // app传进来不安全；
router.get('/index', (req, res) => { res.send('首页') });
router.get('/list', (req, res) => { res.send('列表') });
router.get('/detail', (req, res) => { res.send('详情') });
router.get('/login', (req, res) => { res.send('登录') });
router.get('/cart', (req, res) => { res.send('购物车') });

module.exports = router; // 把路由对象导出