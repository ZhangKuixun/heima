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
    isHead: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = options.userId;
    // console.log(userId);
    db.collection("users").doc(userId).get().then(res => {
      this.setData({
        detail: res.data
      })
      let friendList = res.data.friendList;
      // console.log(res);
      // console.log(friendList, app.userInfo._id);
      if (friendList.includes(app.userInfo._id)) {// 判断根据传进来的userId查询到的用户，这个用户的friendList是否包含当前登录用户的id，如果包含，就是好友
        // 是好友，把isFriend变为true
        this.setData({
          isFriend: true
        })
      } else {
        // 不是好友，包括自己
        this.setData({
          isFriend: false
        }, () => {// setData回调中重新配置数据
          if (userId == app.userInfo._id) { // 把传进来的userId和当前登录用的id做比较，如果相等，就是自己
            // 是自己，把isFriend改为true，并且把添加好友按钮隐藏
            this.setData({
              isFriend: true,
              isHead: true
            })
          }
        })

      }
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