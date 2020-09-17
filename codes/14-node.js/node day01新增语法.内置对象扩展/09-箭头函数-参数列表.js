// 箭头函数的简写形式：
// 1.如果箭头函数只有一个参数，可以不写()；
// 2.如果函数体只有一行代码，{}和return都可以不写；

let add = (n1, n2) => console.log(n1 + n2);
let big = n1 => console.log(n1 * 2);

add(1, 2);
big(3);