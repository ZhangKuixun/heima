/**
 * 08-点击事件传参
 */

// 1.引入核心包
import React from "react";
import ReactDOM from "react-dom";

// 2.类组件
class Child extends React.Component {
    render() {
        // 方式一:bind  this.fn.bind(this指向, 参数1, 参数2)
        return <button onClick={this.fn.bind(this, 123)}>按钮</button>

        // 方式二:属性初始化语法,不能传参

        // 方式三:箭头函数  ()=>this.fn(参数1,...)
        return <button onClick={() => this.fn(123)}>按钮</button>
    }

    fn(num) {
        console.log('点击=', num, '  this=', this)
    }
}

// 3.渲染
ReactDOM.render(<Child/>, document.getElementById('root'));