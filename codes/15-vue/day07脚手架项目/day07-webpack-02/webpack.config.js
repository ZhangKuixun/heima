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
                // 1.处理css
                test: /\.css$/,
                // 写的顺序不能错，使用的顺序是从后往前
                // 使用顺序：（从后往前）
                //   css-loader 读取demo.css内容，放到一个模块里；
                //   style-loader 创建style标签，把模块的内容加载进style标签，插入到页面中
                use: ['style-loader', 'css-loader'],
            },
            // 2.处理less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 3.处理图片
            {
                test: /\.(png|gif|jpg)$/,
                // 图片大小 < 10000，转化为base64，内部调用url-loader
                // 图片大小 >= 10000，不转化为base64（路径转为md5格式），内部调用file-loader
                use: ['url-loader?limit=10000']
            },
            // 4. 处理字体图标
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: ['url-loader']
            },
            // 5. 处理js
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/ // 排除node_modules的js
            }
        ],
    },
};