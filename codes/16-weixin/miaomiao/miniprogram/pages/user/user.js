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
    disabled: true,
    id: ""
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
    this.getLoaction(); // 获取经纬度

    wx.cloud.callFunction({
      name: 'login', // 云函数的名字
      data: {} // 要上传的数据 
    }).then(res => { // res是登录相关的信息
      // console.log(res);
      // 查询数据库
      db.collection('users').where({
        _openid: res.result.openid
      }).get().then(res => {
        // console.log(res);
        if (res.data.length > 0) { // 登录成功
          // 拿到data，重新写入userInfo
          app.userInfo = Object.assign(app.userInfo, res.data[0])
          let {
            userPhoto,
            nickName,
            id
          } = this.data;
          // 更新数据
          this.setData({
            userPhoto: app.userInfo.userPhoto,
            nickName: app.userInfo.nickName,
            logined: true,
            id: app.userInfo._id
          })
          this.getMessage();
        } else { // 未登录
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
    // console.log(app.userInfo.userPhoto);
    let {
      userPhoto,
      nickName,
      id
    } = this.data;
    this.setData({
      userPhoto: app.userInfo.userPhoto,
      nickName: app.userInfo.nickName,
      id: app.userInfo._id
    })
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
  // 授权微信登录
  bindGetUserInfo(ev) {
    // console.log(ev);
    let {
      logined
    } = this.data;
    let userInfo = ev.detail.userInfo;
    // 判断是否登录
    if (!logined && userInfo) { // 未登录
      // 插入数据库，collection("数据库名称")
      db.collection("users").add({
        data: {
          userPhoto: userInfo.avatarUrl,
          nickName: userInfo.nickName,
          signatrue: "",
          phoneNumber: "",
          wxNumber: "",
          likes: 0,
          time: new Date(),
          isLocation: true,
          longitude: this.longitude,
          latitude: this.latitude,
          friendList: [],
        }
      }).then((res) => {
        // es6的promise方式，作为添加是否成功的回调
        // console.log(res);
        // 将刚刚插入云平台的数据读出来，放入app.js的userInfo中
        // doc("_id")：可以通过id读取到指定字段的数据，然后在读取，读完之后，再调用get()方法，能获取到这个"id"所对应的字段
        db.collection("users").doc(res._id).get().then((res) => {
          // console.log(res);
          let {
            userInfo,
            userPhoto,
            nickName,
            id
          } = app.userInfo;
          // Object.assign() 拷贝对象，将参数2的参数拷贝到参数1
          userInfo = Object.assign(app.userInfo, res.data);

          // 将userInfo的数据更新到界面
          this.setData({
            userPhoto: userInfo.userPhoto,
            nickName: userInfo.nickName,
            logined: true,
            id: app.userInfo._id
          })
        })
      });
    }
  },
  // 接收消息，在登录后才触发
  getMessage() {
    const watcher = db.collection('message')
      .where({
        userId: app.userInfo._id
      })
      .watch({ // watch 监听集合中符合查询条件的数据的更新事件
        onChange: function (snapshot) {
          // console.log(snapshot)
          if (snapshot.docChanges.length) { // 能拿更新事件数组的数据
            let list = snapshot.docChanges[0].doc.list;
            if (list.length) { // 有消息，在消息页面添加一个小红点
              wx.showTabBarRedDot({
                index: 2
              })
              // 消息是在我的页面中调用的，要在消息页面使用，需要在app.js中写一个全局的userMessage=[]，可能有多条消息，写成数组
              // 然后把消息数据，共享到全局的userMessage
              app.userMessage = list
            } else { // 没有消息
              wx.hideTabBarRedDot({
                index: 2
              })
              app.userMessage = []
            }
          }
        },
        onError: function (err) {
          console.error('the watch closed because of error', err)
        }
      })
  },
  getLoaction() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.latitude = res.latitude
        this.longitude = res.longitude
      }
    })
  }
})