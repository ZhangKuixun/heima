// es6对象简写：
// 如果属性名和变量名相同，可以只写一个
// 对象内部方法，可以省略，function
let age = 18;
let name = '狗蛋';
let sex = 'm';

// 原来的写法：
// let obj = {
//     age: age,
//     name: name,
//     sex: sex,
//     tel: '110',
//     say: function() {
//         console.log('我叫' + this.name);
//     },
//     hi: function() {
//         console.log('hi');
//     }
// }

// 简写：
let obj = {
    age,
    name,
    sex,
    tel: '110',
    say() {
        console.log("我叫" + this.name);
    },
    hi() {
        console.log('hi');
    }
}
obj.say();
console.log(obj.sex);