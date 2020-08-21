// miniprogram/pages/near/near.js
const app = getApp();
const db = wx.cloud.database();
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: "",
    latitude: "",
    markers: [],
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
    this.getLocation();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getLocation();
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
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        let latitude = res.latitude
        let longitude = res.longitude
        this.setData({
          latitude,
          longitude
        });
        this.getNearUsers();
      }
    })
  },
  // 读位置
  getNearUsers() {
    db.collection('users').where({
        location: _.geoNear({
          geometry: db.Geo.Point(this.data.longitude, this.data.latitude),
          // 搜索0-5公里内的用户
          minDistance: 0,
          maxDistance: 5000,
        }),
        // 在users表中，有一个isLocation（是否开启共享位置），需要查看这个人是否开启共享位置并且满足附近的人，才把用户读出来；
        isLocation: true
      })
      .field({
        latitude: true,
        longitude: true,
        userPhoto: true
      })
      .get()
      .then(res => {
        // console.log(res);
        let data = res.data;
        let result = [];
        if (data.length) {
          for (let i = 0; i < data.length; i++) {
            result.push({
              iconPath: data[i].userPhoto,
              id: data[i]._id,
              latitude: data[i].latitude,
              longitude: data[i].longitude,
              width: 30,
              height: 30
            })
          }
          this.setData({
            markers: result
          })
        }
      })
  }
})