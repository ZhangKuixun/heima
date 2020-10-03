const express = require('express');
const router = require('./router2');

const app = express();

// 处理路由，外置路由
// router(app);
app.use(router)

app.listen(9999, () => { console.log("http://localhost:9999/index 服务器已启动") });