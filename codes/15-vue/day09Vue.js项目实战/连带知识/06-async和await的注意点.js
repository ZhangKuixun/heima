/*
async 修饰一个内部有异步操作的函数，格式: async function fn () {}
await 等待一个异步操作的结果，格式: let res = await ml_readF();

注意点：
  1. async和await成对出现；
  2. await必须挨着async函数，中间不能有间隔函数；
  3. await函数如果要处理异常，配合try...catch使用；
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

async function fn () {
  try {
    let a = await ml_readF('./a.txt');
    console.log(a);
  } catch (error) {
    console.log(error);
  }
}
fn();