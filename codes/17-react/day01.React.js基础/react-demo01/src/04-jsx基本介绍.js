/**
 * 04-jsx基本介绍
 *
 * 需求：<div id='app'>hello react</div>
 *
 * jsx：是react的模板语法（react的灵魂）
 * jsx => javascript + xml （标签里面可以写js代码）
 *
 * 注意点
 * 1.jsx不是一个字符串，也不是html（不是标签），就是一个react对象
 * 2.必须要引入Rect
 *
 * 作用：创建对象
 * 底层：React.createElement
 *
 */

// 1.引用包
import React from 'react'
import ReactDom from 'react-dom'

// 2.创建react对象
var div = <div id='app'>hello react</div>

// 3.渲染
ReactDom.render(div, document.getElementById('root'))