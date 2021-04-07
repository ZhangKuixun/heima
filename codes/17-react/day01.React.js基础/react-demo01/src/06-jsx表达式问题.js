/**
 * 05-jsx表达式问题
 *
 * 表达式
 *  - 读取数据 使用{}
 *  - 运算
 *  - 三元运算符
 *  - 调用方法
 *
 * jsx 里不允许使用class，因为class在react里面已经被用了（类组件）
 * - 写类名，使用className  <ul className='ls'>
 */

// 1.引用包
import React from 'react'
import ReactDom from 'react-dom'

let name = '春春1号'

// 2.创建react对象
var div = <ul className='ls'>
    {/*读取变量*/}
    <li>{name}</li>
    {/*运算*/}
    <li>{name + '123'}</li>
    {/*三元运算符*/}
    <li>{false ? "真" : '假'}</li>
    {/*调方法*/}
    <li>{['11','22','33'].join('-')}</li>
</ul>

// 3.渲染
ReactDom.render(div, document.getElementById('root'))