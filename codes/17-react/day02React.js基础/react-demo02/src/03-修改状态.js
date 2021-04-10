/**
 * 03-修改状态
 *
 * 更新state: 使用this.setState({name:'...'})
 *  - 不能用this.state.name = '...',不能更新视图,只能修改state里面的数据
 *
 */

// 1.引入核心包
import React from 'react';
import ReactDOM from 'react-dom';

// 2.类组件
class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'zs'
        }
    }

    // 挂载（mount）: 当类组件第一次被渲染到DOM中的时候
    componentDidMount() {
        console.warn('挂载')
        this.setState({
            name:'更新春哥'
        })
    }

    // 更新(update): 更新后会被立即调用。首次渲染不会执行此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.warn('更新')
    }

    // 卸载（unmount）: 当前类组件从DOM中被删除的时候
    componentWillUnmount() {
        console.warn('卸载')
    }

    render() {
        return <div>哈哈-{this.state.name}</div>
    }
}

// 3.渲染组件
ReactDOM.render(<Child/>, document.getElementById('root'))

