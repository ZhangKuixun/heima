const handler = require('./handler');

// 路由
module.exports = function(req, res) {
    console.log(req.url, req.method);
    if (req.url.startsWith('/index') || req.url === '/') { // 首页
        handler.showIndex(req, res);
    } else if (req.url.startsWith('/detail')) { // 详情页
        handler.showDetail(req, res);
    } else if (req.url.startsWith('/submit')) { // 提交页面
        handler.showSubmit(req, res);
    } else if (req.url.startsWith('/assets')) { // 静态资源处理
        handler.showAssets(req, res);
    } else if (req.url.startsWith('/add') && req.method == "GET") { // 处理提交
        handler.addGet(req, res);
    } else if (req.url.startsWith('/add') && req.method == "POST") { // 处理提交
        handler.addPost(req, res);
    } else {
        handler.show404(req, res);
    }
}