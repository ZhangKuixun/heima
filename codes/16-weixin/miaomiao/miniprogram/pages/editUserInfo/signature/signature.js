// pages/editUserInfo/signature/signature.js
// 获取app
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    signature: ''
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
    // 页面加载出来，将app.userInfo.signature，赋值到页面中
    this.setData({
      signature: app.userInfo.signature
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  handleText(ev) {
    // 1 保存input输入的内容
    let value = ev.detail.value;
    // 2 边输入边更新
    this.setData({
      signature:value
    })
  },
  handleBtn(ev){
    this.handleBtn();
  }
})