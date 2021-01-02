obj = {
  name: 'zs',
  age: 30,
  love: '春春',
  user: { username: '傻春' }
}

test(obj)

function test (obj) {
  // es5读取数据
  // let name = obj.name;

  // es6结构
  const { name, age: a, user: { username } } = obj;
  console.log(name, a, username);
}