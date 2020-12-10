let num = 30;
let obj = { name: "张三" };

// 只能导出一个，default默认只能引一个
// export default num;
// export default obj;

// 导出 登录函数
export let login = () => {
  console.log('login--');
}
// 导出注册函数
export let register = () => {
  console.log('register--');
}