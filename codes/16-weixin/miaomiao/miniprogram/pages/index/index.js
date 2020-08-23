// miniprogram/pages/index/index.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [], // 顶部切换的图片
    listData: [], // 好友列表
    current: 'likes', // 切换列表的标识
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
    // this.getListData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getListData();
    this.getBannerData();
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
  handleLinks(ev) {
    // 点击的时候拿到自定义属性id
    let id = ev.target.dataset.id;
    wx.cloud.callFunction({
      // 配置：
      name: "update", // 云函数名称
      data: { // 上传的数据
        collection: 'users', // 表名
        doc: id, // id
        // 需要更新的数据，把这些运算操作传递到云端
        data: '{likes: _.inc(1)}'
      }
    }).then(res => {
      // console.log(res);
      let updated = res.result.stats.updated;
      if (updated) { // 已经更新了数据
        let cloneListData = [...this.data.listData] // 克隆一份数组，不要直接对数组操作
        for (let i = 0; i < cloneListData.length; i++) {
          if (cloneListData[i]._id == id) {
            cloneListData[i].likes++;
          }
        }
        this.setData({
          listData: cloneListData
        })
      }
    })

    // 小程序限制：客户端的开发者不能修改别人的数据，需要在云平台做修改所有用户数据的功能
    // db.collection('users').doc(id).update({
    //   data: {
    //     likes: 1
    //   }
    // }).then(res => {
    //   console.log(res);
    // })
  },
  // 切换列表
  handleCurrent(ev) {
    let current = ev.target.dataset.current;
    if (current == this.data.current) {
      return false
    }
    this.setData({
      current
    }, () => {
      this.getListData();
    })
  },
  // 查询语句
  getListData() {
    // console.log(this.data.current);
    db.collection('users')
      .field({// field({})可以过滤读取数据库，只读取自己想要的数据
        userPhoto: true,
        nickName: true,
        likes: true
      })
      .orderBy(this.data.current, 'desc')
      .get()
      .then(res => {
        this.setData({
          listData: res.data
        })
      })
  },
  // 点击图片，进入详情
  handleDetail(ev) {
    wx.navigateTo({
      url: '/pages/detail/detail?userId=' + ev.currentTarget.dataset.id,
    })
  },
  getBannerData() {
    db.collection('banner').get().then(res => {
      // 读不到数据库的数据，可能是权限的问题
      // console.log(res);
      this.setData({
       imgUrls: res.data
      })
    })
  } 
})