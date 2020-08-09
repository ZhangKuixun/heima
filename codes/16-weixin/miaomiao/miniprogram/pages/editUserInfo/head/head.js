// miniprogram/pages/editUserInfo/head/head.js
const app = getApp();
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPhoto: ""
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
    this.setData({
      userPhoto: app.userInfo.userPhoto
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
  handleUploadImage() {
    // 选择图片或者打开相机
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // console.log(res);
        // tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths
        this.setData({
          userPhoto: tempFilePaths
        })
      }
    })
  },
  handleBtn() {
    wx.showLoading({
      title: '上传中',
    })

    // 注意图片缓存：
    // web端是通过图片的地址作为唯一标识来渲染图片，解决：可以在图片路径添加随机数或者时间戳;
    // 小程序读取图片有缓存，小程序是通过fileId作为唯一标识来渲染图片，不是通过地址;
    //  解决：
    //    1. 通过wx.cloud.getTempFileURL获取临时的url，在临时的url上添加随机数或者时间戳;
    //    2. 把上一次图片的url记录下来，把新图片的url也记录下来，上传新的图片时，把上次的url删除;
    // 不允许给fileId加时间戳、随机数，fileId只是一个云存储的文件路径；

    // 上传图片
    // 我们这里都是上传的新地址，不做覆盖
    let cloudPath = "userPhoto/" + app.userInfo._openid + Date.now() + ".jpg";
    wx.cloud.uploadFile({
      cloudPath,
      filePath: this.data.userPhoto[0], // 文件路径
    }).then(res => {
      // 更新图片到数据库
      let fileID = res.fileID;
      if (fileID) {
        db.collection('users').doc(app.userInfo._id).update({
          data: {
            userPhoto: fileID
          }
        }).then(res => {
          // console.log(res);
          wx.hideLoading()
          wx.showToast({
            title: '上传并更新成功',
          })
          app.userInfo.userPhoto = fileID
        })
      }
    })
  },
  bindGetUserInfo(ev) {
    // 使用微信头像，更新界面数据
    let userInfo = ev.detail.userInfo
    if (userInfo) {
      this.setData({
        userPhoto: userInfo.avatarUrl
      }, () => {
        // 更新数据的回调
        wx.showLoading({
          title: '上传中',
        })
        db.collection('users').doc(app.userInfo._id).update({
          data: {
            userPhoto: userInfo.avatarUrl
          }
        }).then(res => {
          // console.log(res);
          wx.hideLoading()
          wx.showToast({
            title: '上传并更新成功',
          })
          app.userInfo.userPhoto = userInfo.avatarUrl
        })
      })
    }
  }
})