// miniprogram/pages/index/index.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "https://pic1.zhimg.com/80/v2-f61cdc49eddd69e9bd2b06587d3e094e_720w.jpg?source=1940ef5c",
      "https://pic3.zhimg.com/80/v2-e1459355307e881617127f2d185cc3b2_720w.jpg?source=1940ef5c",
      "https://pic1.zhimg.com/80/v2-4417a6b4921f30316f73af60b57596cb_720w.jpg?source=1940ef5c"
    ],
    listData: [],
    current: 'likes',
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
    this.getListData();
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
      .field({
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
  handleDetail(ev){
    wx.navigateTo({
      url: '/pages/detail/detail?userId='+ev.currentTarget.dataset.id,
    })
  }
})