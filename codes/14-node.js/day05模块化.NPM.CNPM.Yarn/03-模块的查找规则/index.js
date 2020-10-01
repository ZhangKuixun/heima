// 模块的查找规则
// 1.首先会判断当前模块名称是否是一个路径，如果是，就是自定义模块，相对于当前js文件去查找；
// 2.如果模块名称不是一个路径，会先当作核心模块查找，如果找到，直接引入，如果未找到，就当第三方模块查找；

require('jquery');
// 第三方模块的查找规则：
// 1.首先去当前js文件的同级目录node_modules中查找
// 2.在node_modules目录中查找和jquery同名的目录
// 3.在jquery目录中找package.js文件
// 4.会在package.json文件中找main属性，main属性对象对应的路径就是要引入的模块
// 注意：
//    1.如果有jquery目录，没有package.json，package.json没有main属性，main执行地址不存在...，
//      找不到引入文件，会在当前目录取默认值，找当前目录中index.js、index.json....
//    2.如果jquery目录没有index开头的文件，会继续向上一级目录查找node_modules，一直向上级找，直到找到根目录为止
//    3.如果在上一级目录找到node_modules，就按照查找规则找