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

ml_readF('./a.txt')
  .then(res1 => {
    console.log(res1);
    return ml_readF('./b.txt');
  })
  .then(res2 => {
    console.log(res2);
    return ml_readF('./c.txt');
  })
  .then(res3 => {
    console.log(res3);
  });