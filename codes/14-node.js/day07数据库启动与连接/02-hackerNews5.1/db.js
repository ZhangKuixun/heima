// 操作数据库模块，增删改查
const mongodb = require('mongodb');

// 获取客户端对象，可以连接目标数据库
const mongodbClient = mongodb.MongoClient;
// 连接数据地址+端口
const url = "mongodb://127.0.0.1:27017";


module.exports = {
    // 获取全部数据
    getAllNews(callback) {
        conDB((news, client) => {
            news.find().toArray((err, data) => {
                if (err) {
                    return console.log(err);
                }
                callback && callback(data);

                // 关闭数据库
                client.close();
            })
        })
    },
    // 获取单条数据
    getNewsById(id, callback) {
        // mongodb里面的id是ObjectID()，接收的的id转成ObjectID()
        id = new mongodb.ObjectID(id);
        conDB((news, client) => {
            news.find({ _id: id }).toArray((err, data) => {
                callback && callback(data[0]);
                // client.close();
            })
        })
    },
    // 添加
    addNews(info, callback) {
        conDB(news => {
            news.insert(info);
            callback && callback();
        })
    },
    // 删除
    deleteById(id, callback) {
        id = new mongodb.ObjectID(id);
        conDB(news => {
            news.deleteOne({ _id: id });
            callback && callback();
        })
    }
}


// 封装连接数据库的方法
function conDB(callback) {
    mongodbClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            return console.log('连接数据库失败：', err);
        }
        // 选择数据库/集合
        let news = client.db('hk').collection('news');

        callback && callback(news, client);
    })
}