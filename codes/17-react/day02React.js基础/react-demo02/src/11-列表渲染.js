/**
 * 11-列表渲染
 *
 * 1.拿到数据,通过map遍历,return jsx
 *   {this.state.list1.map(item => {
 *      return <p>{item.name}</p>
 *    })}
 * 2.遍历要加key,提高渲染性能
 *    {this.state.list1.map(item => {
 *      return <p key={item.id}>{item.name}</p>
 *    })}
 *
 */

// 1.引入核心包
import React from "react";
import ReactDOM from 'react-dom';

// 2.类组件
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: [{id: 0, name: 'zs'}, {id: 1, name: 'ls'}, {id: 2, name: 'ww'}]
        }
    }

    render() {
        return <div>
            {this.state.list1.map(item => {
                return <p key={item.id}>{'id=' + item.id + " name=" + item.name}</p>
            })}
        </div>
    }
}

// 3.渲染
ReactDOM.render(<Child/>, document.getElementById('root'))