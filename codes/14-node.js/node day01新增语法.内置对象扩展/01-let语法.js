// 关键字
// let const 定义变量，不会预解析
// var 定义变量，会预解析

// console.log(num);
// var num = 100;
// function num() {
//     console.log('你好');
// }


// let定义变量
// 特点：
// 1.变量不会提升（先定义后使用）
// 2.变量不能重复定义
// 3.let const 定义变量都是块级作用域
// console.log(num);
// let num = 100;
// console.log(num);
// let num = '呵呵';

// 全局作用域：函数外面定义的就是全局；
// 函数作用域：函数里面定义的就是函数级；
// 块级作用域：一个大括号就是一个块，大括号里面的代码执行完就会销毁；
let num = 10;
if (num > 5) {
    // var test = "测试";
    let test = "测试";
    console.log(test);
}
// console.log(test);