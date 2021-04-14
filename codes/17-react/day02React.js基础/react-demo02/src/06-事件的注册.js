/**
 * 06-事件的注册
 *
 * 注册事件
 * 注意: 事件用驼峰命名; 写事件函数,不能写成一个字符串;
 */

// 1.引入核心包
import React from 'react';
import ReactDOM from 'react-dom';

// 2.类组件
class Child extends React.Component {
    constructor(props) {
        super(props);

    }

    fn() {
        console.log("我被点击了")
        console.log(this)
    }

    render() {
        return <button onClick={this.fn}>按钮</button>
    }
}

// 3.渲染
ReactDOM.render(<Child/>, document.getElementById('root'))

