// url.parse(url, 参数二); 解析url地址种各个数据
// 参数二：是否解析queryString(url地址后面跟的参数)，默认false

// url对象是用于解析url地址，能获取url地址的各个部分，但是内部不会解析查询字符串，
// 当第二个参数设置true，是去调用queryString.parse()方法，将查询字符串转成对象

const url = require('url');

let str = "http://localhost:9999/details?id=0&name=zs&age=18";
const obj = url.parse(str, true); // 输出：{ id: '1', name: 'zx', age: '18' }
console.log(obj.query.name, obj.query.age);