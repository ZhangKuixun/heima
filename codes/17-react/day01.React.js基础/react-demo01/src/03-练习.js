/**
 * 03-练习，创建这样的文件：
 * <ul id='app'>
 *     <li>春春1号</li>
 *     <li>春春2号</li>
 *     <li>春春3号</li>
 * </ul>
 */

// 1.引用包
import React from 'react'
import ReactDom from 'react-dom'

// 2.创建react对象
let li1 = React.createElement('li', null, '春春1号');
let li2 = React.createElement('li', null, '春春2号');
let li3 = React.createElement('li', null, '春春3号');
let ul = React.createElement('ul', {id: 'app'}, li1, li2, li3);

// 3.渲染
ReactDom.render(ul, document.getElementById('root'))