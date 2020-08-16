// miniprogram/pages/message/message.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userMessage: [],
    logined: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 
   * 在tabbar页面中，tabbar1第一次被打开会执行onShow--onReady；
   * 如果切换，比如:tabbar1-->tabbar2-->tabbar1,tabbar1只会触发onShow；
   * 如果是普通的页面，退出然后再次被打开会触发onShow--onReady；
   */
  onShow: function () {
    // 在onshow中，进入页面，监听消息的不断变化；
    if (app.userInfo._id) {
      // 进入消息页面，已经登录，显示消息页面
      let {
        userMessage,
        logined
      } = this.data;
      this.setData({
        logined: true,
        userMessage: app.userMessage
      })
    } else {
      // 进入消息页面，没有登录，去我的页面执行登录
      wx.showToast({
        title: '未登录',
        icon: 'none',
        duration: 2000,
        success: () => {
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/user/user',
            })
          }, 2000)
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 6. 父组件拿到传过来更新之后的list来更新整个列表
  onMyEvent(ev) {
    // console.log('onMyEvent', ev.detail);
    this.setData({
      userMessage: []
    }, () => {
      this.setData({
        userMessage: ev.detail
      })
    })
  }
})