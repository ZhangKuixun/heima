// components/callPhone/callPhone.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 接收父组件数据
   */
  properties: {
    phoneNumber: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCallPhone() {
      // 拨打电话,通过this.data接受到properties的数据
      wx.makePhoneCall({
        phoneNumber: this.data.phoneNumber
      })
    }
  }
})