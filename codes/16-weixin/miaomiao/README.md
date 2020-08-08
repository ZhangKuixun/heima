[视频地址](https://www.bilibili.com/video/BV16E4118761?p=1)

# 创建云开发
1. 设置--环境设置--环境名称--创建新环境--输入名称（dev-8it07）
2. 数据库--集合名称--“+”--输入集合名称（users）

# 在app.js中初始化云
1. 初始化
```js
wx.cloud.init({
  // env 参数说明：
  //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
  //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
  //   如不填则使用默认环境（第一个创建的环境）
  env: 'dev-8it07',
  // 检测哪些用户在调用云开发，如果值为false，就看不到用户
  traceUser: true,
})
```
1. 修改app.js中的env: 'dev-8it07',冒号里面的名称，就是刚刚写的新环境名称
2. 初始化db数据库：```const db = wx.cloud.database()```
3. 插入数据
> 数据库中会自动创建两条数据：
     ```_id```：这一条数据的唯一标识；
     ```_openid```：当前微信账号的唯一标识，能检测到是哪个微信用户； 

# 修改权限:
1. 所有用户可读，仅创建者可读写，如果想要“所有用户可读写”，需要用云函数来写

# 将userInfo变成全局数据
1. 写入app.js：```this.userInfo = {}```
2. 页面使用：```const app = getApp()```
3. 将刚刚插入云平台的数据读出来，放入app.js的userInfo中
4. 将userInfo的数据更新到界面
```js
bindGetUserInfo(ev) {
    // console.log(ev);
    let {
      logined
    } = this.data;
    let userInfo = ev.detail.userInfo;
    // 判断是否登录
    if (!logined && userInfo) {
      // 插入数据库，collection("数据库名称")
      db.collection("users").add({
        data: {
          userPhoto: userInfo.avatarUrl,
          nickName: userInfo.nickName,
          signatrue: "",
          phoneNumber: "",
          wxNumber: "",
          likes: 0,
          time: new Date()
        }
      }).then((res) => {
        // es6的promise方式，作为添加是否成功的回调
        // console.log(res);
        // 将刚刚插入云平台的数据读出来，放入app.js的userInfo中
        // doc("_id")：可以通过id读取到指定字段的数据，然后在读取，读完之后，再调用get()方法，能获取到这个"id"所对应的字段
        db.collection("users").doc(res._id).get().then((res) => {
          // console.log(res);
          let {
            userInfo
          } = app.userInfo;
          // Object.assign() 拷贝对象，将参数2的参数拷贝到参数1
          userInfo = Object.assign(app.userInfo, res.data);
          
          // 将userInfo的数据更新到界面
          this.setData({
            userPhoto: userInfo.userPhoto,
            nickName: userInfo.nickName,
            logined: true
          })
        })
      });
    }
  }
```

# 部署云函数
1. 创建node.js云函数```login```
2. 更换环境：右键cloudfunctions--更多设置--选择自己的云环境名称
3. 右键```login```云函数---上传并部署

# 登录后，自动登录
1. 在user.js的onReady，当页面初始渲染完毕时，可以调用云函数
```js
onReady: function () {
  wx.cloud.callFunction({
    name: 'login', // 云函数的名字
    data: {} //要上传的数据 
  }).then(res => { // res是登录相关的信息
    // console.log(res);
    // 查询数据库
    db.collection('users').where({
      _openid: res.result.openid
    }).get().then(res => {
      // console.log(res);
      // 拿到data，重新写入userInfo
      app.userInfo = Object.assign(app.userInfo, res.data[0])
      // 更新数据
      this.setData({
        userPhoto: app.userInfo.userPhoto,
        nickName: app.userInfo.nickName,
        logined: true
      })
    })
  })
},
```

# 编辑用户信息
1. 

## 修改昵称
1. 页面加载出来，将```app.userInfo.signature```，赋值到页面中
1. 给```input```添加输入事件```bindinput='handleText'```，更新页面的文字
2. 