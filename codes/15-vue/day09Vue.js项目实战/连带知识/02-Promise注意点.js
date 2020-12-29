/*
注意点：
第一个then，参数接收的是promise类型的p，resolve传给我们的值
第二个then，参数接收的是undefined，p.then()=>新的promise类型实例=>resolve()，后面的都是undefined
*/
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 假如异步操作成功=>调用resolve
    resolve("这是成功消息");
  }, 10);
})

p.then(res1 => {
  console.log("调用 then1:", res1);// 这是成功消息
}).then(res2 => {
  console.log("调用 then2:", res2);// undefined
}).then(res3 => {
  console.log("调用 then3:", res3);// undefined
})
