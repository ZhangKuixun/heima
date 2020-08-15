// miniprogram/pages/detail/detail.js
const app = getApp();
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    isFriend: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = options.userId;
    db.collection("users").doc(userId).get().then(res => {
      this.setData({
        detail: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  handleAddFriend() {
    if (app.userInfo._id) { // 已登录
      db.collection('message')
        .where({
          userId: this.data.detail._id
        })
        .get()
        .then(res => {
          if (res.data != null && res.data.length) {
            // 有数据，更新
            // console.log(res.data[0].list);
            if (res.data[0].list.includes(app.userInfo._id)) {
              // 如果在message表中包含，申请人的id，表示已经申请过，提示用户，已经申请过。
              wx.showToast({
                title: '已经申请过！',
              })
            } else {
              // 如果没有申请过，就更新云函数
              wx.cloud.callFunction({
                name: 'update', // 云函数名称
                data: { //上传的数据
                  collection: 'message', // 表名
                  where: { // where查找id
                    userId: this.data.detail._id
                  },
                  data: `{list:_.unshift('${app.userInfo._id}')}`
                }
              }).then(res => {
                wx.showToast({
                  title: '申请成功~',
                })
              })
            }

          } else {
            // 添加
            db.collection('message').add({
              data: {
                userId: this.data.detail._id,
                list: [app.userInfo._id]
              }
            }).then(res => {
              wx.showToast({
                title: '申请成功',
              })
            })
          }
        })
    } else { // 未登录，跳转到我的页面，
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
  }
})