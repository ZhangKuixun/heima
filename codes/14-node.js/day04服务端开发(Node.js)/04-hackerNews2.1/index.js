const http = require('http');
const mime = require('mime');
const fs = require('fs');
const path = require('path');
const template = require('art-template');
const url = require('url');

const server = http.createServer();
server.on('request', (req, res) => { // 路由
    console.log(req.url, req.method);
    if (req.url.startsWith('/index') || req.url === '/') { // 首页
        // 读取data.json数据，渲染到html中
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) {
                return console.log("首页读取失败：", err);
            }
            data = JSON.parse(data);
            let str = template(path.join(__dirname, 'views', 'index.html'), data);
            res.end(str);
        });
    } else if (req.url.startsWith('/detail')) { // 详情页
        // 1.获取前端传递数据id，去数据库中查找对应id的数据
        // 2.渲染详情页，返回到前端
        let urlObj = url.parse(req.url, true);
        let id = "1";
        if (urlObj != null) {
            id = urlObj.query.id;
        }
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) {
                return console.log('详情页读取失败：', err);
            }
            data = JSON.parse(data);
            let info = data.list.find(v => v.id == id); // 查找相同id
            let str = template(path.join(__dirname, 'views', 'detail.html'), info);
            res.setHeader('conetnt-type', mime.getType(req.url)); // 指定类型
            res.end(str);
        });
    } else if (req.url.startsWith('/submit')) { // 提交页面
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), 'utf-8', (err, data) => {
            if (err) {
                return console.log("提交页读取失败：", err);
            }
            res.end(data);
        })
    } else if (req.url.startsWith('/assets')) { // 静态资源处理
        fs.readFile(path.join(__dirname, req.url), (err, data) => { // 读取文件，返回给浏览器即可
            if (err) {
                return console.log('静态资源处理读取失败：', err);
            }
            res.setHeader('conetnt-type', mime.getType(req.url)); // 指定类型
            res.end(data);
        })

    } else if (req.url.startsWith('/add') && req.method == "GET") { // 处理提交
        // 1.获取前端表单提交的数据，转出对象
        // 2.读取data.json数据，转出对象
        // 3.把新数据存储到对象的数组中
        // 4.把数据转出json字符串，写入到data.json
        let query = url.parse(req.url, true).query;
        let info = {
            title: query.title,
            url: query.url,
            text: query.text
        };
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) {
                return console.log("读取data.json错误：", err);
            }
            data = JSON.parse(data);
            if (data.list > 0) { // 给from数据添加id
                info.id = data.list[data.list.length - 1] + 1;
            } else {
                info.id = 1;
            }
            data.list.push(info);

            // 写入data.json
            data = JSON.stringify(data);
            fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, 'utf-8', (err, data) => {
                if (err) {
                    return console.log("添加from失败：", err);
                }

                res.statusCode = 302; // 跳转必须设置状态
                res.setHeader('location', '/index'); // 跳转到首页
                res.end();
            })
        });
    } else if (req.url.startsWith('/add') && req.method == "POST") { // 处理提交
        res.end('post');
    } else {
        res.end('404 页面未找到');
    }
})
server.listen(9999, () => { console.log("http://localhost:9999 服务器已启动") });