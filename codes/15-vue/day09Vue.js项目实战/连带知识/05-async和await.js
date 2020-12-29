/*
async和await是es8提出来的一个语法
写法像同步编写代码，处理是异步，处理的更加彻底

async 修饰一个内部有异步操作的函数，格式: async function fn () {}
await 等待一个异步操作的结果，格式: let res = await ml_readF();
*/
const fs = require('fs');
// 封装函数
function ml_readF (filepath) {
  const p = new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) {
        reject("读取失败");
        return;
      }
      resolve(data);
    })
  });
  return p;
}

// promise链式调用
// ml_readF('./a.txt')
//   .then(res1 => {
//     console.log(res1);
//     return ml_readF('./b.txt');
//   })
//   .then(res2 => {
//     console.log(res2);
//     return ml_readF('./c.txt');
//   })
//   .then(res3 => {
//     console.log(res3);
//   });

// async修改一个内部有await异步操作的函数
async function fn () {
  // 格式 await + promise 类型
  // 结果：let a = ? a 就是以前then(res=>res的结果)
  let a = await ml_readF('./a.txt');
  console.log(a);

  let b = await ml_readF('./b.txt');
  console.log(b);

  let c = await ml_readF('./c.txt');
  console.log(c);
}

fn()