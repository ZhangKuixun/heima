// => 箭头函数

// 原来的写法：
// let 变量名 = function(参数){函数体}

// 箭头函数：
// let 变量名 = (参数) => { 函数体 }
let add = (n1, n2) => {
    console.log(n1 + n2);
}
add(20, 50);

// 接收一个参数，返回这个参数的2倍：
let big = (n) => {
    return n * 2;
}
console.log(big(2));


// 箭头函数的简写形式：
// 1.如果箭头函数只有一个参数，可以不写()；
// 2.如果函数体只有一行代码，{}和return都可以不写；
//   let big = (n) => n * 2;
//