/**
 * 01-受控组件
 *
 * 受控组件:
 *  - 受React控制的组件
 *  - 给input添加value值,这个input就成为了受控组件
 *  - 受控组件是数据能自动传递的控件,但是控件不能修改传递的数据(M-->V),受控组件传递数据(V-->M)
 *
 * 自己处理受控组件修改数据:
 *  render() {
 *     return <input value={this.state.name} onChange={this.handleInput.bind(this)}/>
 *  }
 *  handleInput() {
 *     this.setState(e.target.value)
 *  }
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'zs'
        }
    }

    render() {
        return <input value={this.state.name} onChange={this.handleInput.bind(this)}/>
    }

    handleInput(e) {
        this.setState(e.target.value)
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))