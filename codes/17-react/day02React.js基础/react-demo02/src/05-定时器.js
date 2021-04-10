/**
 * 05-定时器
 *
 * 总结:
 * 1.组件:函数组件、类组件
 * 2.函数组件:没有状态(没有自己的私有数据),组件写好,就不能改里面的数据
 *      - 传参: function Child(props){}
 * 3.类组件:有状态(有自己的私有数据 state),数据发生改变,就会更新视图
 *      - 传参: 1.this.props; 2.constructor(props){super(props)}
 *
 * 优缺点:
 *  类组件:有状态,有生命周期
 *  函数组件:渲染更快
 *
 * 使用选择:组件功能多,里面会经常发生变化,使用类组件. 只是显示,选择函数组件
 *
 * props和state区别
 *  state:自己的私有属性,类似vue的data
 *  props:外界传进来的
 */

// 1.引入核心包
import React from 'react';
import ReactDOM from 'react-dom';

// 2.类组件
class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    // Clock组件会通过调用setState()来计划进行一次UI更新
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return <div>时间--{this.state.date.toLocaleTimeString()}</div>
    }
}

// 3.渲染
ReactDOM.render(<Clock/>, document.getElementById('root'))

