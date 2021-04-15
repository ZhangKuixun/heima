/**
 * 10-条件渲染
 */

// 1.引入核心包
import React from "react";
import ReactDOM from "react-dom";

// 2.类组件
class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    Login() {
        this.setState({
            isLogin: !this.state.isLogin
        })
        console.log(this.state)
    }

    render() {
        if (this.state.isLogin) {
            return <button onClick={this.Login.bind(this)}>退出</button>
        } else {
            return <button onClick={this.Login.bind(this)}>登录</button>
        }
    }
}

// 3.渲染
ReactDOM.render(<Child/>, document.getElementById('root'))