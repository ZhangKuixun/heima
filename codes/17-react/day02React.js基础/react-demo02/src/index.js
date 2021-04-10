/**
 * 06-
 *
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

