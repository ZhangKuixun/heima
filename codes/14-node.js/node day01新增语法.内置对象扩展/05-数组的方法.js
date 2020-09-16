// 数组新方法：以下方法参数都是一样的，接收一个回调函数；
// forEach() 遍历数组，依次将每个元素交给回调函数处理；
// map()     遍历数组，依次将每个元素交给回调函数处理，并且会把处理的结果存储到一个新数组中，作为一个新数组返回；
// filter()  遍历数组，查找返回所有符合条件的元素，返回值：数组；
// some()    遍历数组，判断数组中是否有一个以上元素符合条件，返回值：boolean；
// every()   遍历数组，判断数组中每个元素是否都符合条件，返回值：；
// find()    遍历数组，查找数组中第一个满足条件的元素；
// findIndex()遍历数组，查找数字中第一个满足条件的元素的索引值；

// let arr = [22, 33, 44, 55, 66];
// arr.forEach(function(当前元素, 索引值, 当前被遍历的数组) {});

// arr.forEach(function(v, i, arr1) {
//     // console.log(v, i, arr1);
//     console.log(v * 2); //把每个元素*2
// });

// 把每个元素*2，再存回数组中去；
// arr.forEach(function(v, i) {
//     arr[i] = v * 2; 
//     console.log(arr);
// })
// arr.map(function(v, i) {
//     return v * 2; // 并且会把处理的结果存储到一个新数组中，作为一个新数组返回，只需要写return；
// });
// map类似于下面：
// var arr2 = [];
// arr.forEach(function(v, i) {
//   arr2.push(v * 2);
// });
// 最后把arr2，return回去


// 过滤
// let age = [3, 13, 23, 33, 83, 133];

// filter
// var r = [];
// age.forEach(function(v, i) {
//     if (v >= 18) {
//         r.push(v);
//     }
// })
// console.log(r);
// let r = age.filter(function(v, i, arr1) {
//     return v >= 18; // 如果是true，会保存到一个临时数组中，如果是false就不保存，最后返回到r中；
// });
// console.log(r);

// some
// let r = age.some(function(v, i, arr1) {
//     return v < 18; // 判断是否有未成年人
// });
// console.log(r);

// every
// let r = age.every(function(v, i, arr) {
//     return v >= 18; // 判断是否有成年人
// })
// console.log(r);


let age = [3, 13, 23, 33, 83, 133];
// find
let r = age.find(function(v) {
    return v > 100; // 返回第一个大于100的元素
})
console.log(r);

// findIndex
let index = age.findIndex(function(v) {
    return v > 100; // 返回第一个大于100的元素的索引值
})
console.log(index);