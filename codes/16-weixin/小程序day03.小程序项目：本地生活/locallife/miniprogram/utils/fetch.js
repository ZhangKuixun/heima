// 网络请求
function fetch(options){
  const p = new Promise((resolve, reject)=>{

    wx.request({
      // 接口
      url: options.url,
      // 参数
      data : options.data || {},
      // 请求头
      header : options.header || {},
      // 请求方式
      method : options.method || "GET",
      // 成功回调
      scucess : resolve,
      // 失败回调
      fail :  reject
    })
  })

  return p;
}

// 把fetch导出去，ES6写法
export default fetch