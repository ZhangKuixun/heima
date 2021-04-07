/**
 * 09-函数组件传参
 *
 * 1.传参:在组件标签李,添加自定义属性 name='zs' age={30}
 * 2.接收参数:child(props){}  props就是形参
 *      props和vue一样,是单向数据流,函数组件接收到props后,函数组件不能修改props
 */

// 1.引用包
import React from 'react'
import ReactDom from 'react-dom'

// 2.创建react对象
function Child(props) {
    return <div>
        <h1>Hello,{props.name}</h1>
        <h1>年龄,{props.age}</h1>
    </div>
}

let child = <Child name="组件函数传参" age={30}/>;
// 3.渲染
ReactDom.render(child, document.getElementById('root'))
