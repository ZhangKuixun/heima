// const 定义常量，在程序运行过程中，值不能改变
// 其他规则和let一样：不会提升，不能重复定义，有块级作用域

// const pi = 3.14;
// pi = 90; // 不能赋值

for (let i = 0; i < 100; i++) {
    const pi = 3.14;
}
console.log(pi); // pi 未定义