console.log("log1");// 宏任务1

setTimeout(() => {
  console.log('timeout');// 下一次循环任务
}, 0);

new Promise((resolve, reject) => {
  console.log('promise1');// 宏任务2
  resolve();
}).then(res => {
  console.log('then1');// 微任务4
})

console.log('log2');// 宏任务3

/*
输出：
  log1
  promise1
  log2
  then1
  timeout

循环运行任务
宏任务：script,timeout
微任务：promise

先执行宏任务，再执行微任务
第一圈：script  promise(then)
第二圈：setTimeout
*/
