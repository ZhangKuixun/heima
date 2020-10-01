// 在nodejs中模块分为三种，不同的模块加载方式不一样
// 1.核心模块
//    node自身的模块，直接导入就可以使用，如：fs,http,path
// 2.第三方模块
//    需要使用npm命令，先安装，再引用，如：mime,art-template
// 3.自定义模块，像刚刚的a.js
//    先定义js模块，再引入使用
//    注意：自定义模块必须加路径，如果不加路径node会先去核心模块查找，再去第三方模块查找，找不到就报错

require('mime');
require('./node_modules/a');