// js引入jquery
// const $ = require('jquery')

// es6引入jquery,浏览器不能识别es6语法
// 浏览器不能识别es6的语法import
import $ from 'jquery'

// 引入css
import './assets/demo.css'
// 引入less
import './assets/demo.less'

// 引入字体图标文件
import './assets/iconfont/iconfont.css'

$('li:odd').css('background', 'red');
$('li:even').css('background', 'green');