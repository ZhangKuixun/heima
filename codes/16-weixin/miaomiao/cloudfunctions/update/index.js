// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  // 有时候多个云函数环境中，这个写法可能会失效，如果失效，用env: 'dev-8it07'，失效的现象：能调用云函数，无法更新数据库
  env: cloud.DYNAMIC_CURRENT_ENV
  // env: 'dev-8it07'
})

const db = cloud.database()
const _ = db.command

// 云函数入口函数
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
    if (event.doc) {
      return await db.collection(event.collection)
        .doc(event.doc)
        .update({
          data: {
            // 2.把传过来的数据展开到这里，利用es6的扩展运算符，展开到这里
            ...event.data
          }
        })
    } else {
      return await db.collection(event.collection)
        .where({
          ...event.where
        })
        .update({
          data: {
            ...event.data
          }
        })
    }
  } catch (e) {
    console.error(e)
  }
}