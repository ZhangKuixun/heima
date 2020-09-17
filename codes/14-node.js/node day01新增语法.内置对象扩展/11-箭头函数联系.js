let arr = [11, 22, 33, 44, 55];
// 把数组所有元素放大一倍
arr = arr.map(v => v * 2)
console.log(arr);

// 保留60分以上的成绩，返回一个新的数组
let score = [57, 88, 99, 100, 33, 77];
let over = [];
score.filter(v => v > 60);
console.log(over);

// 对数组进行排序
let arr1 = [1, 7, 3, 9, 5, 2, 6, 8, 4];
arr1.sort((a, b) => a - b) // a-b大于0，互换位置；
console.log(arr1);

// 数组长度排序
let arr2 = ['a', 'ccc', 'bb', 'dddd'];
arr2.sort((a, b) => a.length - b.length)
console.log(arr2);


// 注意点：箭头函数内部没有this，在箭头函数内部使用this，使用的是外部函数this

// 检测this
let test = () => {
    this.Array();
    console.log(this);
};
test();

function cheackThis() {
    console.log(this);
}
cheackThis();