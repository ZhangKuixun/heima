// 如果用内置路由，会把app传入其他模块，其他模块可以随意的更改app，不安全；
module.exports = (app) => {
    // app = 'hh'; // app传进来不安全；
    app.get('/index', (req, res) => { res.send('首页') });
    app.get('/list', (req, res) => { res.send('列表') });
    app.get('/detail', (req, res) => { res.send('详情') });
    app.get('/login', (req, res) => { res.send('登录') });
    app.get('/cart', (req, res) => { res.send('购物车') });
}