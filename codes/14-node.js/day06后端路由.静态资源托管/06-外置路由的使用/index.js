const express = require('express');
const router = require('./router');

const app = express();

// 处理路由，内置路由
router(app);

app.listen(9999, () => { console.log("http://localhost:9999/index 服务器已启动") });