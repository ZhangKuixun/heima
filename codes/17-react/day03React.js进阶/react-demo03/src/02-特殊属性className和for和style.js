/**
 * 02-特殊属性className和for和style
 *
 * jsx有两个属性需要注意
 *  1.classname,替代了class
 *  2.htmlFor,替代了for
 *  3.行内样式{{color:'red'}},这里并不是双花括号,语法还是{},外层花括号里面放的是一个对象
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './02-特殊属性.css'

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'zs'
        }
    }

    render() {
        return <div>
            <label>用户名</label>
            <input className='cls'/>
            <p className={'cls'}>p标签-类</p>
            <p>{this.state.username}</p>
            <p style={{color: 'red', fontSize: '20px'}}>p标签-行内样式</p>
        </div>
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))