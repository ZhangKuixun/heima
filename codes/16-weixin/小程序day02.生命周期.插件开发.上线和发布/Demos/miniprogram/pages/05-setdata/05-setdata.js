Page({
  data: {
    msg: "测试数据"
  },
  fn() {
    // 1.获取数据
    // console.log(this.data.msg);
    const {
      msg
    } = this.data
    console.log(msg);

    // 2.修改数据
    // this.data.msg = "666" 无法更新试图，能修改获取的值，使用 setData
    this.data.msg = "666"

    // 修改数据：setData
    this.setData({
      msg: 666
    })
  }
})