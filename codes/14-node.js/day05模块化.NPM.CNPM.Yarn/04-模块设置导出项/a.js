console.log('我是a模块');

var num = 100;
var obj = {
    name: '答主',
    sex: '男',
    age: 18,
}

/* 
模块设置导出项：
  在nodejs中每个js文件就是一个模块，模块中有一个module属性，表示当前模块自身
  module对象有一个属性exports，是一个空对象，可以通过module.exports把数据暴露给外界使用
*/
// module.exports = num;
// module.exports = obj;

// 1.对象，变量都可以赋值
// module.exports = {
//     num: num,
//     obj: obj
// }
// console.log(module.exports);

// 2.能赋值变量，不能赋值对象
exports.num = num
console.log(exports);

/* 
注意：
  module.exports和exports设置相同的值，最终导出的是module.exports
  推荐module.exports
*/