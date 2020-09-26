const template = require('art-template');
const path = require('path');

// 1.准备模板(整个heml文件就是一个模板)
// 2.准备数据(数据必须是对象)
// 3.在后台 把模板和数据绑定，生成结构，返回给浏览器进行解析

let obj = {
    title: '传值博客',
    list: ['大前端', 'java', 'UI', '新媒体']
};
// 绑定数据和模板
// template(模板的路径, 对象)
let str = template(path.join(__dirname, 'index.html'), obj);
console.log(str);