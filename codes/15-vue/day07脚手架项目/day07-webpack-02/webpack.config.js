// js引入path模块
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    plugin: [
        // 配置html-webpack-plugin插件
        new htmlWebpackPlugin({
            template: './src/index.html', // 源模板文件
            filename: 'index.html', // 输出文件
        })
    ],
    // webpack-dev-server的配置信息
    devServer: {
        open: true,
        port: 3002
    },
    // 配置loader加载器
    module: {
        rules: [{
                // 处理css
                test: /\.css$/i,
                // 写的顺序不能错，使用的顺序是从后往前
                // 使用：
                //   css-loader读取demo.css内容，放到一个模块里；
                //   style-loader创建style标签，把模块的内容加载进style标签，插入到页面中
                use: ['style-loader', 'css-loader'],
            },
            // 处理less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ],
    },
};