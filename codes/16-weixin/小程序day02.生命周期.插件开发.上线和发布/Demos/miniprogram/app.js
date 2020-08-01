//app.js
App({
  // 生命周期
  onLaunch: function () {
    // 只会执行一次
    console.log('小程序初始化');
    
    // if (!wx.cloud) {
    //   console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    // } else {
    //   wx.cloud.init({
    //     // env 参数说明：
    //     //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
    //     //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
    //     //   如不填则使用默认环境（第一个创建的环境）
    //     // env: 'my-env-id',
    //     traceUser: true,
    //   })
    // }

    // this.globalData = {}
  },
  onShow(){
    // 只要看见都会执行
    console.log('显示')
  },
  onHide(){
    // 只要隐藏都会执行
    console.log('隐藏');
    
  }

})
