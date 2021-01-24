// 3.x 版本的配置
module.exports = {
  devServer: {
    proxy: {
      '/myapi': {
        // 代理的目标服务器地址
        target: 'https://douban.uieee.com/v2',

        // https://douban.uieee.com/v2/myapi/movie/in_theaters
        // 把myapi替换成空字符串
        // https://douban.uieee.com/v2/movie/in_theaters
        pathRewrite: { '^/myapi': '' },

        // 识别服务器里面的端口号，设置https
        secure: false,
        // 是否允许跨域，必须设置该项
        changeOrigin: true,
      }
    }
  }
}