/**
 * 06-setState是异步的
 *
 * setState() 通知React使用更新后的state重新渲染组件。
 * 1. state不是立即变更
 * 2. 解决延迟，使用componentDidUpdate或者setState(updater, callback)的回调函数
 * this.setState({
 *     content:'改了'
 * }, () => {
 *     console.log(this.state.content)
 * })
 */
import React from "react";
import ReactDOM from 'react-dom';

class Child extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            content: '没有改'
        }
    }

    render() {
        return <div>
            <button onClick={this.fn.bind(this)}>{this.state.content}</button>
        </div>
    }

    fn() {
        this.setState({
            content:'改了'
        }, () => {
            console.log(this.state.content)
        })
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))