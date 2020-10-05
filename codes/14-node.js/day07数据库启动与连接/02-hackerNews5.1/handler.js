// 处理请求各个细节
const path = require('path');
const db = require('./db');

module.exports = {
    // 1.查询数据；
    // 2.用模板引擎渲染数据；
    showIndex(req, res) {
        db.getAllNews(data => {
            // 拿到数据进行渲染（数据格式是数组）
            res.render('index.html', { list: data });
        });
    },
    showDetail(req, res) {
        // 1.获取数据id
        // 2.根据id查找对应数据
        // 3.用模板引擎渲染
        let id = req.query.id;
        db.getNewsById(id, data => {
            res.render("detail.html", data);
        });
    },
    showSubmit(req, res) {
        res.sendFile(path.join(__dirname, 'views', 'submit.html'))
    },
    addPost(req, res) {
        // 1.获取表单数据
        // 2.把数据添加到数据库中
        // 3.重定向，看到添加结果
        // let body = req.body;
        let body = {
            title: req.body.title,
            url: req.body.url,
            text: req.body.text,
        }
        db.addNews(body, () => {
            res.redirect('/');
        })
    },
    delete(req, res) {
        let id = req.query.id;
        db.deleteById(id, () => {
            res.redirect('/');
        })
    }
}