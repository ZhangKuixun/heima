/**
 * 06-定时器
 *
 * 虚拟DOM
 * react 数据发生变化的时候，是通过虚拟DOM更新
 * angular - 脏检查（数据变了，就叫脏）
 * react - 虚拟DOM
 * vue - 细粒度更新 - 每个数据 = 对应一个watcher
 *     - 中等粒度更新 - 每个组件 - 对应一个watcher - 每个组件内部使用虚拟DOM
 *       (name改变了 => setter => Dep => watcher => 组件 => 虚拟DOM进行比较 => 把改变的地方更新掉)
 */

// 1.引用包
import React from 'react'
import ReactDom from 'react-dom'

function tick() {
    // 2.创建react对象
    var div = <div>
        <h3>时间更新</h3>
        <p>{new Date().toLocaleString()}</p>
    </div>

    // 3.渲染
    ReactDom.render(div, document.getElementById('root'))
}

let interval = setInterval(tick, 1000);
