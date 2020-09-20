// 函数在定义的同时可以设置默认参数
// 以前的写法：
// function add(n1, n2) {
//     n1 = n1 || 0;
//     n2 = n2 || 0;
//     console.log(n1 + n2);
// }

// 用户不传参时，参数是取默认值进行运算
function add(n1 = 0, n2 = 0) {
    console.log(n1 + n2);
}

add();
add(1);
add(1, 2);