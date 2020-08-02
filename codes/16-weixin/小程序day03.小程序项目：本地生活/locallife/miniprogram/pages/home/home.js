// 引入fetch
import fetch from '../../utils/fetch.js';

Page({
  data: {
    imgUrls:[
      '../../assets/images/banner1.png',
      '../../assets/images/banner2.png',
      '../../assets/images/banner3.png'],
  },
  gridsData:{
    icon:[
      '../../assets/icons/1.png',
      '../../assets/icons/2.png',
      '../../assets/icons/3.png',
      '../../assets/icons/4.png',
      '../../assets/icons/5.png',
      '../../assets/icons/6.png',
      '../../assets/icons/7.png',
      '../../assets/icons/8.png',
      '../../assets/icons/9.png'],
  },
  // 页面加载，只执行一次
  // 轮播图的数据
  onLoad(){
    fetch({
      url:'https://locally.uieee.com/slides',
    }).then(res=>{
      this.setData({
        imgUrls : res.data
      })
    } )
  },

  // 九宫格的数据
  loadGridsData(){
    fetch({
      url:'https://locally.uieee.com/categories'
    }).then(res => {
      console.log(res);
      this.setData({
        gridsData : res.data
      })
    })
  }
})