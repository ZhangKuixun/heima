// pages/detail/detail.js
import fetch from "../../utils/fetch.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}
  },

  // query接收其他页面传递过来的参数
  onLoad: function (options) {
    console.log(options.id);


    this.setData({
      id: options.id
    })

    // 请求详情页数据
    fetch({
      url: `https://locally.uieee.com/shops/{{options.id}}`,
    }).then(res => {
      // 保存
      this.setData({
        detail: res.data
      });
    
      // 设置标签
      wx.setNavigationBarTitle({
        title: res.data.name
      })

    })
  },
  previewImg: function (e) {

    //  1.获取current和urls
    let {
      current,
      urls
    } = e.currentTarget.dataset;

    // 2.替换'w.h'换成'1000,1000'
    current = current.replace('w.h', '1000,1000')
    urls.map(item=>{// 遍历urls，修改图片的地址
      return item.replace('w.h','1000,1000')
    })

    // 3.预览
    wx.previewImage({
      urls, // 需要预览图片http链接列表
      current // 当前显示图片的http链接
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

  }
})