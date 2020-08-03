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
    hasMore: true, // 是否有更多数据
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
      // 页码判断，给hasMore赋值
      // 当前页数 < 总页数 => 有值，hasMore=true
      // else             => 没有值，haseMore=false
      // 计算：_page < 总页数(res.header['X-Total-Count']/10)

      this.setData({
        _page, // 把上面"_page++"的值赋值给data，1  2  3
        data: [...list, ...res.data], // 第二页的数据拼接到第一页的数据后面
        hasMore: _page < Math.ceil(res.header['X-Total-Count'] / 10), // 是否还有数据
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
    // 获取hasMore
    const {
      hasMore
    } = this.data

    // 截流，如果hasMore=false，没有数据，停止加载，否则，加载数据
    if (!hasMore) {
      return
    }

    // 加载
    this.setData()
  }
})