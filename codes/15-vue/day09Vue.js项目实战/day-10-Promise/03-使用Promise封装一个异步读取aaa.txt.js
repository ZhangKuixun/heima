const fs = require('fs');
const p = new Promise((resolve, reject) => {
  fs.readFile('./a.txt', "utf8", (err, data) => {
    if (err) {
      reject("读取失败");
    } else {
      resolve(data);
    }
  })
})
  .then(res => {
    console.log(res);
  })
  .catch(res => {
    console.log(res);
  })