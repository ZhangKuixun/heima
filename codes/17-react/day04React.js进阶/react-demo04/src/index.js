/**
 * 03-生命周期
 *
 */
import React from "react";
import ReactDOM from 'react-dom';

class Father extends React.Component {
    state = {
        car: '雅迪',
        isShow: true
    }

    render() {
        return <div style={{background: 'yellowgreen', padding: '20px'}}>
            父组件:
            <button onClick={this.fn.bind(this)}>改变car</button>
            {this.state.isShow ? <Child car={this.state.car}/> : ''}
        </div>
    }

    fn() {
        this.setState({
            car: '奧迪',
            isShow: false
        })
    }
}

class Child extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor:构造函数')
        this.state = {
            count: 1,
            timer: null
        }
    }

    render() {
        console.log('render:渲染')
        return <div style={{background: 'skyblue', padding: '20px'}}>
            <p>哈哈 - {this.state.count}</p>
            <button onClick={this.updateName.bind(this)}>更新数据</button>
            <br/>
            <p>父组件给的数据:{this.props.car}</p>
        </div>
    }

    // 组件挂载后
    // 发送ajax,操作dom
    componentDidMount() {
        let timer = setInterval(() => {
            console.log('好嗨哟')
        }, 1000)
        this.setState({
            timer
        })
        console.log('componentDidMount:组件挂载后')
    }

    // 是否让组件更新
    // 不要企图依靠此方法来“阻止”渲染，因为这可能会产生bug
    // 考虑使用内置的PureComponent组件，而不是手动编写shouldComponentUpdate()
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate:是否让组件更新')
        // 如果count<=3可以更新渲染,如果>3不渲染
        // return nextState.count <= 3;
        return nextState.count % 2 === 1;
    }

    // 更新之后
    // 首次渲染不会执行; shouldComponentUpdate 返回false,不会执行此方法
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate:更新之后')
    }

    // 更新数字
    updateName() {
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    // 销毁组件
    componentWillUnmount() {
        console.log('componentWillUnmount:销毁组件')
        clearInterval(this.state.timer)
    }
}

ReactDOM.render(<Father/>, document.getElementById('root'))
