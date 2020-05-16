//index.js
const app = getApp()

Page({
  data: {
    mytxt:'大demo',
    color:'green'
  },
  onLoad:function(){
    var appInstance = getApp()
    console.log("appInstance="+appInstance);
    this.setData({
      mytxt: appInstance.courseName
    })
  }
})
