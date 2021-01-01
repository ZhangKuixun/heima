/*
1. 是 es6 提出来的处理异步的解决方案
2. 使用：像同步写代码，是异步处理的解决方案

```js
Promise.then(res => {
  // 第一次发送请求
})
  .then(res => {
    // 第二次发送请求
  })
  .then(res => {
    // 第三次发送请求
  });
```

1. Promise 是一个构造函数
2. Promise 有两个参数(resolve, reject)，是回调函数
    resolve: fn=>成功，调用resolve
    reject: fn=>失败，调用reject
3. Promise 里面放一个异步操作
*/
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 假如异步操作成功=>调用resolve
    // resolve("这是成功消息");
    // 失败
    reject("这是一条错误信息");
  }, 10);
})

p.then(res => {
  console.log("调用 then:", res);
}).catch(err => {
  console.log("调用 catch:", err);
})

