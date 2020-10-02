const mime = require('mime');
const fs = require('fs');
const path = require('path');
const template = require('art-template');
const url = require('url');
const query = require('querystring');
const tool = require('./tool');

// 处理请求的功能
module.exports = {
    showIndex(req, res) {
        // 读取data.json数据，排序，渲染html，返回html
        tool.readFile((data) => {
            data.list.sort((a, b) => a.id - b.id); // 排序
            let str = template(path.join(__dirname, 'views', 'index.html'), data);
            res.end(str);
        })
    },
    showDetail(req, res) {
        // 1.获取前端传递数据id，去数据库中查找对应id的数据
        // 2.渲染详情页，返回到前端
        let urlObj = url.parse(req.url, true);
        let id = "1";
        if (urlObj != null) {
            id = urlObj.query.id;
        }
        tool.readFile((data) => {
            let info = data.list.find(v => v.id == id); // 查找相同id
            let str = template(path.join(__dirname, 'views', 'detail.html'), info);
            res.setHeader('conetnt-type', mime.getType(req.url)); // 指定类型
            res.end(str);
        })
    },
    showSubmit(req, res) {
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), 'utf-8', (err, data) => {
            if (err) {
                return console.log("提交页读取失败：", err);
            }
            res.end(data);
        })
    },
    showAssets(req, res) {
        fs.readFile(path.join(__dirname, req.url), (err, data) => { // 读取文件，返回给浏览器即可
            if (err) {
                return console.log('静态资源处理读取失败：', err);
            }
            res.setHeader('conetnt-type', mime.getType(req.url)); // 指定类型
            res.end(data);
        })
    },
    addGet(req, res) {
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
        tool.readFile((data) => {
            if (data.list != null) {
                if (data.list > 0) { // 给from数据添加id
                    info.id = data.list[data.list.length - 1].id + 1;
                } else {
                    info.id = 1;
                }
                data.list.push(info);
            }

            // 写入data.json
            data = JSON.stringify(data, null, 4);
            tool.writeFile(data, () => {
                res.statusCode = 302; // 跳转必须设置状态
                res.setHeader('location', '/index'); // 跳转到首页
                res.end();
            })
        })
    },
    addPost(req, res) {
        let str = '';
        req.on('data', (chunk) => { // 监听post传递的数据，多次接收数据
            str += chunk;
        });
        req.on('end', () => { // 数据传递完成事件
            // 转成对象
            let queryObj = query.parse(str);
            let info = {
                title: queryObj.title,
                url: queryObj.url,
                text: queryObj.text
            };

            tool.readFile((data) => {
                if (data.list != null) {
                    if (data.list.length > 0) {
                        info.id = data.list[data.list.length - 1].id + 1; // 设置id
                    } else {
                        info.id = 1;
                    }
                    data.list.push(info); // 追加
                }

                data = JSON.stringify(data, null, 4); // 转json字符串，保持格式
                tool.writeFile(data, () => {
                    res.statusCode = 302;
                    res.setHeader('location', '/index'); // 跳转首页
                    res.end();
                })
            })
        });
    },
    show404(req, res) {
        res.end('404 页面未找到');
    }
}