// for循环，用定时器每秒钟输出一个i的值；
// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i); // 一直输出10
//     }, i * 1000);
// }

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i); // 输出1-10
    }, i * 1000);
}

// 用var，只要没有函数就是全局；
// 用let，let修饰的变量，相当于在括号里面；