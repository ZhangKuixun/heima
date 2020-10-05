// php操作mysql
// 1.连接数据库
// 2.对某数据库表进行操作
// 3.操作完成后，关闭连接

// node来操作mongodb
const mongodb = require('mongodb');
// 获取客户端对象，可以连接目标数据库
const mongodbClient = mongodb.MongoClient;
// const mongodbClient = require('mongodb').MongoClient;

// 连接数据地址+端口
const url = "mongodb://127.0.0.1:27017";

// 连接目标数据库
// {useNewUrlParser:true,useUnifiedTopology:true}做兼容，使用新的解析方式解析连接的url地址
mongodbClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('连接数据库失败：', err);
    }
    // 在连接成功的情况下，可以操作数据库

    // 在node对数据进行增删改查：
    // 选择数据库，选择一个集合并操作
    // let db = client.db('test');
    // let user = db.collection('user');
    let user = client.db('test').collection('user');

    // 查找全部
    // user.find().toArray((err, data) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(data.result);
    // });

    // 按条件查找
    // user.find({ name: 'jerry' }).toArray((err, data) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(data.result);
    //     client.close();
    // })

    // 插入：insertOne、insertMany
    // user.insertOne({ name: 'rose', age: 25, sex: 'm' }, (err, data) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(data.result);
    // })
    // user.insertMany([{ name: '小哥', age: 26, sex: 'f' }, { name: '天猫', age: 25, sex: 'f' }], (err, data) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(data.result);
    // })

    // 删除数据：deleteOne、deleteMany
    // user.deleteOne({ name: 'tom' }, (err, data) => {
    //     console.log(data.result); // { n: 0, ok: 1 }
    //     // n 受影响的行数
    //     // ok 是否成功
    // })
    // user.deleteMany({ name: 'jerry' }, (err, data) => {
    //     console.log(data.result);
    // })

    // 修改:updateOne、updateMany
    // user.updateOne({ name: "wangwu" }, { $set: { name: "xl", age: 24, sex: "f" } }, (err, data) => {
    //     console.log(data.result);
    // })
    // user.updateMany({ age: { $gt: 20 } }, { $set: { name: "老年人" } }, (err, data) => {
    //     console.log(data.result);
    // })

    // 辅助代码，查看操作后的数据
    user.find().toArray((err, data) => {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        client.close();
    })


    // 关闭数据库连接
    // client.close();
})