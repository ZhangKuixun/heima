// pages/07-lifecircle/07-lifecircle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--页面加载完成，发送ajax
   * 只会执行一次
   */
  onLoad: function (options) {
    console.log('onLoad-页面加载完成')
  },

  /**
   * 生命周期函数--监听页面显示
   * 执行多次，只要能看见页面就执行，不一定页面都加载完
   */
  onShow: function () {
    console.log('onShow-页面显示')
  },

  /**
   * 生命周期函数--监听页面完全渲染完成
   * 页面全部显示出来
   */
  onReady: function () {
    console.log('onReady-页面完全渲染完成')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  }
})