// 引入path模块
const path = require('path');

module.exports = {
    // 入口
    entry: "src/index.js",
    // 出口
    output: {
        // 出口文件
        filename: 'index.js',
        // 出口目录
        path: path.resolve(__dirname, 'dist')
    },
    // 模式
    // module: 'development'
};