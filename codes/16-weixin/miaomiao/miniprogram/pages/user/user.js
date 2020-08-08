// miniprogram/pages/user/user.js
// 初始化数据库
const db = wx.cloud.database()
// 获取app.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPhoto: "/images/user/head.png",
    nickName: "小喵喵",
    logined: false,
    disabled: true
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
    wx.cloud.callFunction({
      name: 'login', // 云函数的名字
      data: {} //要上传的数据 
    }).then(res => { // res是登录相关的信息
      // console.log(res);
      // 查询数据库
      db.collection('users').where({
        _openid: res.result.openid
      }).get().then(res => {
        // console.log(res);
        if (res.data.length > 0) {
          // 拿到data，重新写入userInfo
          app.userInfo = Object.assign(app.userInfo, res.data[0])
          // 更新数据
          this.setData({
            userPhoto: app.userInfo.userPhoto,
            nickName: app.userInfo.nickName,
            logined: true
          })
        } else {
          this.setData({
            disabled: false
          })
        }

      })
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
  bindGetUserInfo(ev) {
    // console.log(ev);
    let {
      logined
    } = this.data;
    let userInfo = ev.detail.userInfo;
    // 判断是否登录
    if (!logined && userInfo) {
      // 插入数据库，collection("数据库名称")
      db.collection("users").add({
        data: {
          userPhoto: userInfo.avatarUrl,
          nickName: userInfo.nickName,
          signatrue: "",
          phoneNumber: "",
          wxNumber: "",
          likes: 0,
          time: new Date()
        }
      }).then((res) => {
        // es6的promise方式，作为添加是否成功的回调
        // console.log(res);
        // 将刚刚插入云平台的数据读出来，放入app.js的userInfo中
        // doc("_id")：可以通过id读取到指定字段的数据，然后在读取，读完之后，再调用get()方法，能获取到这个"id"所对应的字段
        db.collection("users").doc(res._id).get().then((res) => {
          // console.log(res);
          let {
            userInfo
          } = app.userInfo;
          // Object.assign() 拷贝对象，将参数2的参数拷贝到参数1
          userInfo = Object.assign(app.userInfo, res.data);

          // 将userInfo的数据更新到界面
          this.setData({
            userPhoto: userInfo.userPhoto,
            nickName: userInfo.nickName,
            logined: true
          })
        })
      });
    }
  }
})