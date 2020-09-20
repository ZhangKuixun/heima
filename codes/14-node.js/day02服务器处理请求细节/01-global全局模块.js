// 在浏览器中，全局变量是window，在nodejs中，全局变量是global，全局变量的属性可以直接在node中使。
// console
// setInterval();
// setTimeout();
// clearInterval();
// clearTimeout();
// __dirname 获取当前文件相对目录
// __filename 获取当前文件绝对目录

console.log('test');
let num = 0;
let interval = setInterval(() => {
    console.log(num++);
    if (num == 1) {
        clearInterval(interval);
    }
}, 1000);
console.log("-->", __dirname); // 输出：--> F:...\day02...
console.log("-->", __filename); // 输出：--> F:...\01-global全局模块.js