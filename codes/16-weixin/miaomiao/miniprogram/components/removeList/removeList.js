// components/removeList/removeList.js
const app = getApp();
const db = wx.cloud.database();
const _ = db.command;

Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 可以用 this.data.messageId 获取到这个值
    messageId: String // 发送消息的用户id，从message.wxml的 remove-list 传递过来
  },

  /**
   * 组件的初始数据
   */
  data: {
    userMessage: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 删除单条消息
    handleDelMessage() {
      let that = this;

      // 1. 点击删除，弹出提示信息
      wx.showModal({
        title: '提示信息',
        content: '删除消息',
        confirmText: '删除',
        success(res) {
          if (res.confirm) {
            // console.log('用户点击删除')
            that.removeMessage(that);
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    // 添加好友
    handleAddFriend() {
      let that = this;
      // 1. 点击添加好友，弹出提示信息
      wx.showModal({
        title: '提示信息',
        content: '申请好友',
        confirmText: '同意',
        success(res) {
          if (res.confirm) {
            // console.log('用户点击同意')
            // 更新自己，把发送好友请求的id放入当前登录应用用户的friendList中
            db.collection('users').doc(app.userInfo._id).update({
              data: {
                friendList: _.unshift(that.data.messageId)
              }
            }).then(res => {})

            // 更新其他人，把当前登录应用用户的id放入发送好友请求的friendList中
            wx.cloud.callFunction({
              name: 'update',
              data: {
                collection: 'users',
                doc: that.data.messageId,
                data: `{friendList: _.unshift('${app.userInfo._id}')}`
              }
            }).then(res => {})

            // 删除发送的好友请求
            that.removeMessage(that);
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    removeMessage(that) {
      // 2. 如果点了删除，先查询到被点击的用户；
      db.collection('message').where({
        userId: app.userInfo._id
      }).get().then(res => {
        if (res.data.length) {
          let list = res.data[0].list

          // console.log('过滤前', list);

          // 3. 再通过list.filter把点击的消息，从列表中过滤掉；
          list = list.filter((val, i) => {
            // console.log(val);
            return val != that.data.messageId; // 拿到点击的消息的id
          })
          // console.log('过滤后', list);

          // 4. 然后用我们过滤的list重新更新数据库message表，通过云函数更新数据库；
          wx.cloud.callFunction({
            name: 'update',
            data: {
              collection: 'message',
              where: {
                userId: app.userInfo._id
              },
              data: {
                list // 更新单条数据
              }
            }
          }).then(res => {
            // 到这里，说明已经把这个添加好友请求删掉了
            // 删除页面中的好友请求消息，思考：消息是怎么添加到页面中，在message.wxml中，通过userMessage这个数组来决定需要渲染多少条数据，所以删除的时候，是对message.wxml的userMessage进行修改。
            // message和removeList的关系：虽然一个是页面，一个是组件，其实都是组件，message看成父组件，removeList看成子组件，就是组件与组件的通信
            // 父组件向子组件通信：通过指定属性设置数据；子组件向父组件通信：事件；

            // 5. 最后触发子父通信，把更新之后的list传给父组件，触发父组件```message.wxml```绑定的事件:```bindmyevent="onMyEvent"```,再执行到```message.js```的```onMyEvent(ev)```方法；
            // myevent：在message.wxml中绑定的事件bindmyevent；
            // list：需要传递到message.js中的onMyEvent方法中的数据；
            that.triggerEvent('myevent', list)
          })
        }
      })
    }
  },
  // 组件生命周期
  lifetimes: {
    // attached方法，删除后不会再触发了
    attached: function () {
      // 在组件实例进入页面节点树时执行
      db.collection('users').doc(this.data.messageId).field({
        userPhoto: true,
        nickName: true
      }).get().then(res => {
        this.setData({
          userMessage: res.data
        })
      })
    }
  }
})