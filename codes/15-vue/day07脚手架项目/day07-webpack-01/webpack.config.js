// js引入path模块
const path = require('path');

// 引入html-webpack-plugin插件
const htmlWebpackPlugin = require('html-webpack-plugin');

// webpack基于node，webpack的配置文件里面可以直接使用
module.exports = {
    // 入口
    entry: "./src/index.js",
    // 出口
    output: {
        // 出口文件
        filename: 'index.js',
        // 出口目录
        path: path.resolve(__dirname, 'dist')
    },
    // 模式
    mode: 'development',
    // 插件
    plugins: [
        // 配置html-webpack-plugin插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 源模板文件
            filename: 'index.html', // 输出文件
        })
    ],
    // webpack-dev-server的配置信息
    devServer: {
        open: true, // 是否打开服务器
        port: 3002 // 端口：3002
    }
};