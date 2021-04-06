/*
* 02-react的基本使用
* */

// React创建react对象 核心包
import React from 'react'

// 1. 引入包
// ReactMOM把react对象渲染成DOM
import ReactDOM from 'react-dom'

// 2. 创建react对象
// 参数1：元素名称
// 参数2：属性、对象
// 参数3,4,5....：内容
let el = React.createElement('div', {id: 'app'}, 'hello react 123')

// 3. 渲染
// 参数1：react对象 / 组件
// 参数2：渲染的位置
ReactDOM.render(el, document.getElementById('root'))

/**
 * 三步：
 * 1.引入包
 * import React from 'react'  React创建react对象 核心包
 * import ReactDOM from 'react-dom'  ReactMOM把react对象渲染成DOM
 *
 * 2.创建react对象
 * let el = React.createElement('div', {id: 'app'}, 'hello react 123')
 *
 * 3. 渲染
 * ReactDOM.render(el, document.getElementById('root'))
 */
