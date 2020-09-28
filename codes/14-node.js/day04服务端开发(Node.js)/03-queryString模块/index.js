const querystring = require('querystring');

let str = 'id=1&name=zx&age=18';

let obj = querystring.parse(str);

console.log(obj);
// 输出：{ id: '1', name: 'zx', age: '18' }