// 箭头函数的简写形式：
// 1.如果箭头函数只有一个参数，可以不写()；
// 2.如果函数体只有一行代码，{}和return都可以不写；

let add = (n1, n2) => n1 + n2;
let big = n => n * 2;

console.log(add(20, 50));
console.log(big(2));