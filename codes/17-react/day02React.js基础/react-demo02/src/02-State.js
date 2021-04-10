/**
 * 02-State
 *
 * 函数组件和类组件的区别?
 * 函数组件:没有状态的(没有自己的数据)
 * 类组件:有状态,有自己的数据
 *
 * 状态(state)的写法:
 * constructor() {
 *     super();
 *     this.state = {
 *         name: 'zs',
 *         age: 30
 *     }
 * }
 */

// 1.引入核心包
import React from 'react';
import ReactDOM from 'react-dom';

// 2.函数组件
class Child extends React.Component {
    constructor() {
        super();
        // child组件的状态(数据)
        this.state = {
            date: new Date(),
            name: 'zs',
            age: 30
        }
    }

    render() {
        return <div>哈哈-{this.state.name},年龄-{this.state.age},时间-{this.state.date.toLocaleTimeString()}</div>
    }
}

// 3.渲染组件
ReactDOM.render(<Child/>, document.getElementById('root'))

