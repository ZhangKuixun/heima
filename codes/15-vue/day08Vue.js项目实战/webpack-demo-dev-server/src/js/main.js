/*
3. import axios from 'axios'
*/

/*
1. import + export default
    import 引入
    export default 导出
*/

// aaa 名字可以随便写
import aaa from './a.js'
console.log(aaa);

/*
2. import + export
*/
// export 导出的是一个对象（登录+注册）
// 方式1：
import * as res from './a.js';
res.login();
res.register();
// 方式2：
import { login, register as reg } from './a.js';
login();
reg();


// 取别名
let obj = {
  name: 'zs',
  age: 30
}
function test (obj) {
  let { name: n, age } = obj;
  console.log(n, age);
}
test(obj);
