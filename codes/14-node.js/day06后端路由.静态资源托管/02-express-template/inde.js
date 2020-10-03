/* 
安装：
npm i express
npm i art-template
npm i express-art-template
*/

const express = require('express');

// 创建服务器
const app = express();

// 1.告诉express用什么模板引擎
// app.engine(模板后缀名, 使用模板);
app.engine('html', require('express-art-template'));

app.use((req, res) => {
    let obj = {
        title: '传值',
        list: ['aa', 'bb', 'cc', 'dd', 'ee']
    }

    // 2.渲染：res.render()
    // 注意：默认路径是“当前目录+views/”
    // 覆盖render默认目录：app.set(key, value);
    app.set('views', './pages');
    res.render('index.html', obj)
});

// 设置端口
app.listen(9999, () => { console.log("http://localhost:9999 服务器已启动"); })