/**
 * 10-组件通信(夫->子,子->父)
 *
 * 父传子
 *  1.父组件通过自定义属性,将属性传递给子组件
 *  2.子组件用this.props接收,接收数据(单向,只读)
 *
 * 子传父(思想:)
 *  1.父组件准备一个方法fn(){}
 *  2.父组件通过属性将方法传递给子组件 fn={this.pfn}
 *  3.子组件用props接收fn,再调用父组件的fn this.props.fn()
 *  4.子组件把需要传递的参数放入this.props.fn(参数)
 */
import React from "react";
import ReactDOM from 'react-dom';

class Father extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            pmsg: '父组件的数据'
        }
    }

    render() {
        return <div>
            父组件
            <Sun msg={this.state.pmsg} fn={this.fn}></Sun>
        </div>
    }

    fn(res) {
        console.log('父组件fn:', res)// 父组件fn: 子组件的数据
    }
}

class Sun extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            cmsg: '子组件的数据'
        }
    }

    render() {
        // console.log(this.props)// {msg: "父组件的数据", fn: ƒ}
        return <div>
            子组件:{this.props.msg}
            <button onClick={this.fn.bind(this)}>子传父</button>
        </div>;
    }

    fn() {
        console.log("子组件fn:", this.props.fn)// fn() {...}
        this.props.fn(this.state.cmsg)
    }
}

ReactDOM.render(<Father/>, document.getElementById('root'))