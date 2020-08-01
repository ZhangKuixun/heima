    Page({
      data: {
        msg: "测试数据"
      },
      fn() {
        // 1.获取数据
        // 方式1：通过data获取
        // console.log(this.data.msg);

        // 方式2：const，这种方式用的多
        const {
          msg
        } = this.data
        // console.log(msg);

        // 2.修改数据
        // 方式1：“this.data.msg="666"”，这样写，无法更新视图，只能修改data的值
        // this.data.msg = "666"
        // console.log(msg);

        // 方式2：setData，注意：setData({})里的对象，这个对象和data对象一一对应
        this.setData({
          msg: 666
        })
      }
    })