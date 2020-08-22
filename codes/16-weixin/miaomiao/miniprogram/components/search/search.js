// components/search/search.js
const app = getApp();
const db = wx.cloud.database();
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isFocus: false, // 搜索框状态
    inputVal: "", // 搜索框值
    historyList: [], // 历史搜索记录
    searchList: [], // 搜索的用户列表
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlefocus() { // 输入框上焦
      // 上焦后从本地缓存获搜索的历史记录
      wx.getStorage({
        key: 'searchHistory',
        success: res => {
          this.setData({
            historyList: res.data
          })
          // console.log(this.data.historyList)
        }
      });
      this.setData({
        isFocus: true
      });
    },
    
    handleCancel() { // 输入失去焦点
      this.setData({
        isFocus: false,
        searchList: []
      })
    },

    inputsearch() { // 联想

    },

    goSearch(ev) { // 键盘搜索
      // console.log(ev.detail.value);
      // 去重：第一次搜索1111，第二次搜索1111，搜索重复词的时候，只显示一个；
      // 解决：找到进入页面获取到的记录数组，克隆一份，把第二次搜索的词添加到克隆的数组的第一位，然后再去重
      let cloneHistoryList = [...this.data.historyList];
      cloneHistoryList.unshift(ev.detail.value);
      wx.setStorage({
        key: "searchHistory",
        data: [...new Set(cloneHistoryList)],
      })
      // console.log(this.data.historyList)

      // 点击搜索，调用搜索方法
      this.changeSearchList(ev.detail.value);
    },

    // 删除历史记录
    handleHistoryDelete() {
      wx.removeStorage({
        key: 'searchHistory',
        success: res => {
          wx.showToast({
            title: '清除成功',
          });
          this.setData({
            inputVal: "",
            historyList: []
          });
        }
      })
    },

    // 点击历史记录的item
    handleHistoryBtn(ev) {
      console.log(ev);
      let value = ev.currentTarget.dataset.value;
      this.setData({
        inputVal: value
      })
      // 点击历史记录的item，调用搜索方法
      this.changeSearchList(value);
    },

    // 搜索用户
    changeSearchList(value) {
      db.collection('users').where({
          // 用正则模糊查询
          nickName: db.RegExp({
            regexp: value,
            options: 'i',
          })
        })
        .field({
          userPhoto: true,
          nickName: true
        })
        .get().then(res => {
          this.setData({
            searchList: res.data
          })
          console.log(this.data.searchList);
        })
    }
  }
})