// path模块
const path = require('path');

// 不同的系统，路径的斜杠不一样，path模块解决路径问题
// path.join(若干个路径片段) 凭借路径方法
let url = path.join(__dirname, './data.txt');
let url1 = path.join('F:\\web\\heima\\codes\\14-node.js\\day02服务器处理请求细节', './data.txt');
let url2 = path.join('./aaa', '.\\bbb', 'ccc', './eee', 'fff.txt');
// F:\web\heima\codes\14-node.js\day02服务器处理请求细节\data.txt
// F:\web\heima\codes\14-node.js\day02服务器处理请求细节\data.txt 
// aaa\bbb\ccc\eee\fff.txt
console.log(url, url1, url2);