/**
 * 09-获取事件对象
 */

// 1.引入核心包
import React from "react";
import ReactDOM from "react-dom";

// 2.类组件
class Child extends React.Component {
    render() {
        // 方式一:不传参  被调用的函数,'形参'就是事件对象
        return <button onClick={this.fn}>按钮</button>

        // 方式二:bind  被调用的函数,最后一个'形参'就是事件对象
        return <button onClick={this.fn1.bind(this, 123)}>按钮</button>

        // 方式三:属性初始化语法   和方式一相同,不传参
        return <button onClick={this.fn2}>按钮</button>

        // 方式四: 箭头函数
        return <button onClick={e => this.fn(e)}>按钮</button>
    }

    fn(e) {
        console.log('e=', e)
    }

    fn1(num, e) {
        console.log('num=', num, '  e=', e)
    }

    fn2 = e => {
        console.log('e=', e)
    }
}

// 3.渲染
ReactDOM.render(<Child/>, document.getElementById('root'))