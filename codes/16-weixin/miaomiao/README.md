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

## 修改个性签名
1. 页面加载出来，将```app.userInfo.signature```，赋值到页面中
1. 给input添加输入事件```bindinput='handleText'```，输入的时候更新页面的文字
2. 给button添加按钮事件，点击按钮的时候，更新云函数、data、app.signature

## 修改手机号、修改微信号，同上(个性签名)

## 共享位置
1. 使用switch

## 修改昵称
1. 使用微信昵称功能，在setData回调方法中，更新数据库
2. 修改昵称，同上(个性签名)

## 修改头像
1. 选择图片或者打开相机```wx.chooseImage```，修改页面显示的图片
> - ```wx.chooseImage```里面的```success(res){}```回调方法必须写成```success:res=>{}``，在wx.chooseImage外面this指PageOptions在wx.chooseImage里面this指_chooseImageObject
  - 不支持```then(=>{})```写法
2. 上传图片
```js
  // 注意图片缓存：
  // web端是通过图片的地址作为唯一标识来渲染图片，解决：可以在图片路径添加随机数或者时间戳;
  // 小程序读取图片有缓存，小程序是通过fileId作为唯一标识来渲染图片，不是通过地址;
  //  解决：
  //    1. 通过wx.cloud.getTempFileURL获取临时的url，在临时的url上添加随机数或者时间戳;
  //    2. 把上一次图片的url记录下来，把新图片的url也记录下来，上传新的图片时，把上次的url删除;
  // 不允许给fileId加时间戳、随机数，fileId只是一个云存储的文件路径；
  // 我们这里都是上传的新地址，不做覆盖
  let cloudPath = "userPhoto/" + app.userInfo._openid + Date.now() + ".jpg";
  wx.cloud.uploadFile({
    cloudPath,
    filePath: this.data.userPhoto[0], // 文件路径
  }).then(res => {
    console.log(res.fileID)
    wx.hideLoading()
    wx.showToast({
      title: '上传成功',
    })
    console.log(res);
  })
```
3. 更新图片到数据库
4. 使用微信头像，更新界面数据，在更新数据的回调中，上传图片，并更新图片

# 首页动态渲染图片
1. onReady方法中，读取数据库，渲染数据
> field({})可以过滤读取数据库，只读取自己想要的数据
  - ```js
      onReady: function () {
        db.collection('users').field({
          userPhoto: true,
          nickName: true,
          likes: true
        }).get().then(res => {
          // console.log(res);
          this.setData({
            listData: res.data
          })
        })
      },
    ```
2. 添加多个数据[视频地址](https://www.bilibili.com/video/BV16E4118761?p=1)

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
- 仅创建者可读写：创建者只能修改自己的数据，不能修改别人的数据

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
        // doc("_id")：可以通过_id读取到指定id字段的一条数据，读完之后，再调用get()方法，能获取到这个"id"所对应的字段
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

## 修改个性签名
1. 页面加载出来，将```app.userInfo.signature```，赋值到页面中
1. 给input添加输入事件```bindinput='handleText'```，输入的时候更新页面的文字
2. 给button添加按钮事件，点击按钮的时候，更新云函数、data、app.signature

## 修改手机号、修改微信号，同上(个性签名)

## 共享位置
1. 使用switch

## 修改昵称
1. 使用微信昵称功能，在setData回调方法中，更新数据库
2. 修改昵称，同上(个性签名)

## 修改头像
1. 选择图片或者打开相机```wx.chooseImage```，修改页面显示的图片
> - ```wx.chooseImage```里面的```success(res){}```回调方法必须写成```success:res=>{}``，在wx.chooseImage外面this指PageOptions在wx.chooseImage里面this指_chooseImageObject
  - 不支持```then(=>{})```写法
2. 上传图片
```js
  // 注意图片缓存：
  // web端是通过图片的地址作为唯一标识来渲染图片，解决：可以在图片路径添加随机数或者时间戳;
  // 小程序读取图片有缓存，小程序是通过fileId作为唯一标识来渲染图片，不是通过地址;
  //  解决：
  //    1. 通过wx.cloud.getTempFileURL获取临时的url，在临时的url上添加随机数或者时间戳;
  //    2. 把上一次图片的url记录下来，把新图片的url也记录下来，上传新的图片时，把上次的url删除;
  // 不允许给fileId加时间戳、随机数，fileId只是一个云存储的文件路径；
  // 我们这里都是上传的新地址，不做覆盖
  let cloudPath = "userPhoto/" + app.userInfo._openid + Date.now() + ".jpg";
  wx.cloud.uploadFile({
    cloudPath,
    filePath: this.data.userPhoto[0], // 文件路径
  }).then(res => {
    console.log(res.fileID)
    wx.hideLoading()
    wx.showToast({
      title: '上传成功',
    })
    console.log(res);
  })
```
3. 更新图片到数据库
4. 使用微信头像，更新界面数据，在更新数据的回调中，上传图片，并更新图片

# 首页动态渲染图片
1. onReady方法中，读取数据库，渲染数据
> field({})可以过滤读取数据库，只读取自己想要的数据
  
  ```js
  onReady: function () {
    db.collection('users').field({
      userPhoto: true,
      nickName: true,
      likes: true
    }).get().then(res => {
      // console.log(res);
      this.setData({
        listData: res.data
      })
    })
  },
  ```
2. 添加多个数据：微信开发者工具--工具--多账号测试
    > 小程序读取云函数的数据，默认一次读取20条数据，如果要做下拉加载更多，需要使用数据库的```limit()```和```skip()```配合使用
3. 点赞，通过用户的id值，增加点赞
> 小程序限制：客户端的开发者不能修改别人的数据，需要在云平台做修改所有用户数据的功能
4. 新建```updata```云函数
```js
  // 云函数入口函数
  // event：前端调用时，传递的对象
  exports.main = async (event, context) => {
    try {
      // 通过return返回异步的数据
      // event.collection：表的名称
      // event.doc：单条数据的id
      return await db.collection(event.collection).doc(event.doc)
        .update({
          data: {
            // 把传过来的数据展开到这里，利用es6的扩展运算符，展开到这里
            ...event.data
          },
        })
    } catch (e) {
      console.error(e)
    }
  }

 注意：
    cloud.init({
      env: cloud.DYNAMIC_CURRENT_ENV
      // env: 'dev-8it07'
    })
    有时候多个云函数环境中，这个写法可能会失效，如果失效，用env: 'dev-8it07'，失效的现象：能调用云函数，无法更新数据库
```

5. 想要更新其他用户的数据，必须要在服务器的环境下，所以我们创建了一个update云函数，然后把update云函数写成通用的，可以复用云函数，还要注意command的运算能力，可以直接再数据库里自增自减，所以要把规则(js运算代码)从前端传递到后端的update云函数里，update云函数用```eval()```把客户端传递上来的运算字符串解析成js代码，然后再走通用的功能，接着更新数据库的操作，更新数据库之后，再让页面同步发生变化。
> 点赞累加```Command.inc()```

```js
  // 云函数入口
  // event：前端调用时，传递的对象
  exports.main = async (event, context) => {
    try {
      // 3.这样写的好处：比如做自增、自减、操作数组，这些运算操作，客户端用字符串传递到云端，任何运算都可以执行
      if (typeof event.data == 'string') {
        // eval：把字符串转成js语句的
        event.data = eval('(' + event.data + ')')
      }

      // 1.通过return返回异步的数据
      // event.collection：表的名称
      // event.doc：单条数据的id
      return await db.collection(event.collection).doc(event.doc)
        .update({
          data: {
            // 2.把传过来的数据展开到这里，利用es6的扩展运算符，展开到这里
            ...event.data
          },
        })
    } catch (e) {
      console.error(e)
    }
  }

  // 小程序端
  handleLinks(ev) {
    // 点击的时候拿到自定义属性id
    let id = ev.target.dataset.id;
    wx.cloud.callFunction({
      // 配置：
      name: "update", // 云函数名称
      data: { // 上传的数据
        collection: 'users', // 表名
        doc: id, // id
        // 需要更新的数据，把这些运算操作传递到云端
        data: '{likes: _.inc(1)}'
      }
    }).then(res => {
      // console.log(res);
      let updated = res.result.stats.updated;
      if (updated) { // 已经更新了数据
        let cloneListData = [...this.data.listData]// 克隆一份数组，不要直接对数组操作
        for (let i = 0; i < cloneListData.length; i++) {
          if (cloneListData[i]._id == id) {
            cloneListData[i].likes++;
          }
        }
        this.setData({
          listData: cloneListData
        })
      }
    })
  }
```

# 首页拆分名字
1. 使用wxs做拆分函数，在wxml中引入wxs文件，调用wxs的函数
2. 引入wxs的函数，只能用绝对路径

# 推荐和最新的功能
1. 切换功能，根据一个变量来切换tab的显示状态
2. 排序：
  > 最新：最新注册的用户显示在最上面;
    推荐：点赞的次数最多的用户显示在最前面；
  ``` js
  getListData() {
    console.log(this.data.current);
    db.collection('users')
      .field({
        userPhoto: true,
        nickName: true,
        likes: true
      })
      .orderBy(this.data.current, 'desc')
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          listData: res.data
        })
      })
  }
  ```

# 详情页开发
1. index页面打开详情页，index页面传递参数到详情页，详情页可以在```onLoad: function (options)```的options参数中接收；
  ```js
  <!-- index.js -->
  handleDetail(ev){
    wx.navigateTo({
      url: '/pages/detail/detail?userId='+ev.currentTarget.dataset.id,
    })
  }
  <!-- detail.wxml -->
  onLoad: function (options) {
  let userId = options.userId;
  db.collection("users").doc(userId).get().then(res => {
    this.setData({
      detail: res.data
    })
  })
},
```
2. 页面布局；
3. 拨打电话，把这个功能做成一个组件：
  1. 在components文件加下右键新建文件，再选中"新建的文件"右键"新建Page".
  2. 在detail.json中引入
  ```js
  "usingComponents": {
    "call-phone":"/components/callPhone/callPhone"
  }
  ```
  3. 在detail.wxml中使用
  ```xml
  <view class="detail-item">
    ...
    <call-phone />
  </view>
  ```
  4. 编写布局文件：
    ```js
    <!-- callPhone.wxml -->
    <text class="iconfont icondadianhua"></text>
    <!-- callPhone.js -->
    Component({
      options: {
        styleIsolation: 'apply-shared'
      }
    })

    styleIsolation 支持以下取值：
      isolated 表示启用样式隔离，在自定义组件内外，使用 ```class``` 指定的样式将不会相互影响（默认值）；
      apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
    ```
4. 父组件和子组件通信和拨打电话功能：
  1. 把电话号码传递到子组件：
  ```js
  <!-- detial.wxml -->
  <call-phone phoneNumber="{{detail.phoneNumber}}"/>
  ```
  2. 子组件接收电话号码：
    ```js
    <!-- callPhone.js -->
    properties: {
      phoneNumber: String
    },
    ```
  3. 点击触发打电话的功能：
    ```js
    <!-- callPhone.wxml -->
    <text ... bindtap="handleCallPhone"></text>
    <!-- callPhone.js -->
    methods: {
      handleCallPhone() {
        // 拨打电话,通过this.data接受到properties的数据
        wx.makePhoneCall({
          phoneNumber: this.data.phoneNumber
        })
      }
    }
    ```
5. 复制文本同上，最后的方法不一样：
  ```js
  methods: {
    handleCopyText(){
      wx.setClipboardData({
        data: this.data.wxNumber,
        success (res) {
          wx.showToast({
            title: '复制成功',
          })
        }
      })
    }
  }
  ```

# 添加好友功能
1. 给添加好友按钮添加点击事件；
2. 添加好友之前需要验证是否登录，如果没有登录需要跳转到首页-我的，跳转到tabBar
  > navigateTo, redirectTo 只能打开非 tabBar 页面。
    switchTab 只能打开 tabBar 页面。
    reLaunch 可以打开任意页面。
3. 在云函数中创建message表，保存好友请求、系统消息；
  - 表的设计：
    1. 每条数据包含userId，userId表示好友请求发送给哪一个人；
    2. 谁发起请求，它的id要写入一个数组中。

# 监听好友的消息
1. 在登录后才触发
2. 实时推送消息是用数据库的```watch```方法，使用发送添加好友的账号测试
3. 有消息，在消息页面添加一个小红点
4. 小红点：小程序自带这个功能

# 消息页面开发
> 注意：
    在tabbar页面中，tabbar1第一次被打开会执行onShow--onReady；
    如果切换，比如:tabbar1-->tabbar2-->tabbar1,tabbar1只会触发onShow；
    如果是普通的页面，退出然后再次被打开会触发onShow--onReady；
1. 在onshow中，进入消息页面，监听消息的不断变化，如果没有登录，进入我的页面去登录，如果已经登录，显示消息页面；
  ```js
  onShow: function () {
    // 在onshow中，进入页面，监听消息的不断变化；
    if (app.userInfo._id) {
      // 进入消息页面，已经登录，显示消息页面
      let {
        userMessage,
        logined
      } = this.data;
      this.setData({
        logined: true,
        userMessage: app.userMessage
      })
    } else {
      // 进入消息页面，没有登录，去我的页面执行登录
      wx.showToast({
        title: '未登录',
        icon: 'none',
        duration: 2000,
        success: () => {
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/user/user',
            })
          }, 2000)
        }
      })
    }
  },
  ```
2. 用一个列表展示发消息的用户，把单个消息item写成一个组件；
3. 获取发送的请求添加好友数据，使用组件生命周期函数，在组件进入页面树时更新数据
  ```js
  lifetimes: {
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
  ```
4. 点击头像跳转到详情页
5. 滑动item，删除单条消息
  - 删除页面中的好友请求消息，思考：消息是怎么添加到页面中，在message.wxml中，通过userMessage这个数组来决定需要渲染多少条数据，所以删除的时候，是对message.wxml的userMessage进行修改；
  - ```页面：message```和```组件：removeList```的关系：虽然一个是页面，一个是组件，其实都是组件，message看成父组件，removeList看成子组件，就是父组件向子组件通信；
  - ```父组件向子组件通信：通过指定属性设置数据；子组件向父组件通信：事件；```

  - ```组件：removeList```向```页面：message```传递数据的过程：
    1. 父组件：message
    ```js
    <!-- message.wxml -->
    <remove-list bindmyevent="onMyEvent"/>
    <!-- message.js -->
    onMyEvent(ev) {
      console.log(ev.detail);
    }
    ```
    2. 子组件：removeList，触发刚刚的事件bindmyevent
    ```js
    <!-- removeList.js -->
    <!-- 我们的代码中是，把这个添加好友请求从数据库中删除成功后，触发父组件的bindmyevent事件 -->
    this.triggerEvent('myevent', list)
    ```

  - 删除消息小结：
    1. 点击删除，弹出提示信息
    2. 如果点了删除，先查询到被点击的用户；
    3. 再通过list.filter把点击的消息，从列表中过滤掉；
    4. 然后用我们过滤的list重新更新数据库message表，通过云函数更新数据库；
    5. 最后触发子父通信，把更新之后的list传给父组件，触发父组件```message.wxml```绑定的事件:```bindmyevent="onMyEvent"```,再执行到```message.js```的```onMyEvent(ev)```方法；
    6. 父组件拿到传过来更新之后的list来更新整个列表

  - 注意：lifetimes的attached方法，删除后不会再触发了
    ```js
    lifetimes: {
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
    ```
    解决：先让userMessage全部置为空，再重新重置userMessage，这样removeList会重新再走一步
    ```js
    onMyEvent(ev) {
      console.log(ev.detail);
      this.setData({
        userMessage: []
      }, () => {
        this.setData({
          userMessage: ev.detail
        })
      })
    }
    ```

6. 点击item的非头像区域，添加好友，把当前应用的用户与发消息的用户产生一个好友关系，必须在user表中添加一个字段```friendList```；
  1. 更新自己，把发送好友请求的id放入当前登录应用用户的friendList中；
  2. 更新其他人，把当前登录应用用户的id放入发送好友请求的friendList中
  3. 删除发送的好友请求

# 详情页，非好友不能查看手机号和微信号，隐藏手机图标和复制图标
1. 判断根据传进来的userId查询到的用户，这个用户的friendList是否包含当前登录用户的id，如果包含，就是好友，是好友，把isFriend变为true
2. 把传进来的userId和当前登录用的id做比较，如果相等，就是自己，是自己，把isFriend改为true，并且把添加好友按钮隐藏

# 好友列表开发