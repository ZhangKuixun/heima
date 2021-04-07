/**
 * 05-jsx格式问题
 *
 * 格式：
 * 1.只能有一个跟节点 <div></div>（常用）
 *  - 也可以使用<></>代替<div></div>，（类似小程序：block  vue：template）
 * 2.如果结构比较复杂，建议用()把代码包起来
 */

// 1.引用包
import React from 'react'
import ReactDom from 'react-dom'

// 2.创建react对象
var div = <div>
    <div>哈哈</div>
    <p>这是p标签</p>
</div>

// 3.渲染
ReactDom.render(div, document.getElementById('root'))