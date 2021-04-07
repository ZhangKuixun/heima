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
 *
 *
 * 最早的更新模式
 *   1.数据
 *   2.模板
 *   3.数据+模板=真实的DOM
 *   4.数据变了 -> 最新数据+模板 = 新的真实DOM
 *   5.新的真实DOM，把旧的DOM完全直接替换掉
 *   6.显示新的DOM
 *   缺点：性能不好
 *
 * 之后的更新模式
 *   1.数据
 *   2.模板
 *   3.数据+模板=真实的DOMｓｄｆｓｄｆｓｄｆ
 *   4.数据变了 -> 最新数据+模板 = 新的真实DOM
 *   5.新的真实DOM，把旧的DOM进行一一比较，找到需要更新的地方
 *   6.只需要更新需要改变的地方
 *   缺点：不再是全部替换掉
 *   优点：DOM比较有性能问题，会把多余的DOM和属性进行比较，有损性能
 *
 * React模板
 *   1.数据
 *   2.模板
 *   3.数据+模板=虚拟的DOM
 *   4.数据变了 -> 最新数据+模板 = 新的虚拟DOM
 *   5.新的虚拟DOM和旧的虚拟DOM通过diff算法，进行比较
 *   6.找到超逸的地方，更新需要更新的地方
 *   7.更新一下就可以看到最新的DOM了
 *
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
