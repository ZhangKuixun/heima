/**
 * 10-类组件
 *
 */

// 1.引用包
import React from 'react'
import ReactDom from 'react-dom'

// 2.创建react对象
function Person(props) {
    return <div>
        <h1>Hello,{props.name}</h1>
        <h1>年龄,{props.age}</h1>
    </div>
}

let child = <Person name="组件函数传参" age={30}/>;
// 3.渲染
ReactDom.render(child, document.getElementById('root'))
