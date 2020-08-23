const router = require('koa-router')()
const config = require('../config.js')
const request = require('request-promise') // 请求模块
const fs = require('fs') // 操作文件的内置模块


router.get('/', async(ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/string', async(ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async(ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

// 后台的和前台头通信的'/uploadBannerImg'接口，并且访问云函数http接口
router.post('/uploadBannerImg', async(ctx, next) => {
    // 后台接收到图片，koa默认不能得到上传的图片
    // 解决：
    // 1. 需要下载第三方模块模块：cnpm i -S koa-body
    // 2. 在app.js中引入koa-body: const koaBody = require('koa-body')
    var files = ctx.request.files;
    var file = files.file;
    // console.log(file);

    // 1.访问云函数，获取access_token
    try {
        let options = {
            uri: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' +
                config.appId + '&secret=' + config.secret + '',
            json: true
        }
        let { access_token } = await request(options);
        // console.log("access_token=", access_token);

        // 2.拿到access_token后，发起post请求，验证身份
        let fileName = `${Date.now()}.jpg`; // 文件名
        let filePath = `banner/${fileName}`; // 文件夹
        options = {
            method: 'POST',
            uri: 'https://api.weixin.qq.com/tcb/uploadfile?access_token=' + access_token + '',
            body: {
                'env': 'dev-8it07',
                'path': filePath
            },
            json: true
        }
        let res = await request(options); // 请求成功后，返回响应对象res
        console.log(res);

        // 3.访问云函数，把文件的id写入数据库的banner表
        let file_id = res.file_id;
        options = {
            method: 'POST',
            uri: 'https://api.weixin.qq.com/tcb/databaseadd?access_token=' + access_token + '',
            body: {
                "env": 'dev-8it07',
                "query": "db.collection(\"banner\").add({data:{fileId:\"" + file_id + "\"}})"
            },
            json: true
        }
        let res1 = await request(options)
        console.log(res1);

        // 4.访问云函数，执行上传任务：用返回的对象里面的url调用下一个接口
        options = {
            method: 'POST',
            uri: res.url,
            formData: {
                "Signature": res.authorization,
                "key": filePath,
                "x-cos-security-token": res.token,
                "x-cos-meta-fileid": res.cos_file_id,
                "file": {
                    value: fs.createReadStream(file.path),
                    options: {
                        filename: fileName,
                        contentType: file.type
                    }
                }
            }
        }
        await request(options);
        ctx.body = res;
    } catch (error) {
        console.log(error.stack);
    }
})

module.exports = router