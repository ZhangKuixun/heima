/**
 * 08-函数组件
 * 1.定义组件:函数
 *   注意点
 *      1.函数首字母一定要大写
 *      2.必须要有返回,什么都不返回(return null)
 *      3.只能返回一个跟节点
 * 2.使用:ReactDom.render(<Child />, ...)
 */

// 1.引用包
import React from 'react'
import ReactDom from 'react-dom'

// 2.创建react对象
function Child() {
    return <h1>Hello</h1>
}

// 3.渲染
ReactDom.render(<Child />, document.getElementById('root'))
