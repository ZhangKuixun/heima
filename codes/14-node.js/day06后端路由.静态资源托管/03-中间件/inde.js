const express = require('express');

// 创建服务器
const app = express();

// 中间件是一个函数，可以访问请求和响应对象，并可以向下传递；
app.use((req, res, next) => {
    // console.log(req.url, req.method);
    req.aa = 'aa';
    req.bb = 'bb';
    res.cc = 'cc';
    // res.send('over') // 结束，就不能做中间件，没有向下传递
    next(); // 可以通过next传递下一个函数，此时这个函数就是中间件
    // 中间件有两个选择：1.结束请求；2.向下一个中间件传递；
    // 不终止，也不传递，网页会被悬挂在这个地方
})

app.use((req, res, next) => {
    // console.log(req.url, req.method);
    req.say = function() { console.log('say----') }
    req.hi = function() { console.log('hi----') }

    next();
})

app.get('/index', (req, res) => {
    // console.log(req.url, req.method);
    console.log(req.aa, req.bb);
    req.say();
    req.hi();

    res.send('ok');
})

// 打印：
//    aa bb
//    say----
//    hi----


// 设置端口
app.listen(9999, () => { console.log("http://localhost:9999/index 服务器已启动"); })