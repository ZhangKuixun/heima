// pages/list/list.js
import fetch from '../../utils/fetch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, // id
    list: [], // 列表数据
    _page: 0, // 当前页的页数
  },

  // query接收其他页面传递过来的参数
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      id: options.id
    })
    // 请求数据
    this.loadData()
  },

  // 获取列表数据
  loadData() {
    // 1.从data里读取数据
    let {
      id,
      _page, //0  1  2
      list,
    } = this.data

    _page++ //1  2  3

    fetch({
      url: `https://locally.uieee.com/categories/${id}/shops`,
      data: {
        _page,
        _limit: 10
      }
    }).then(res => {
      this.setData({
        _page, //把上面"_page++"的值赋值给data，1  2  3
        data: [...list, ...res.data]// 第二页的数据拼接到第一页的数据后面
      })
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.loadData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData()
  }
})