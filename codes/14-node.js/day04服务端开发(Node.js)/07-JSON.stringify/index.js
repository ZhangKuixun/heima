let obj = {
    name: '涛涛',
    age: 33,
    sex: '男',
    car: {
        brand: '永久',
        price: 200,
        color: 'pink'
    }
}

// obj->json
// JSON.stringify(要转换的数据，处理数据函数，格式化空格数);
console.log(JSON.stringify(obj, null, 4));