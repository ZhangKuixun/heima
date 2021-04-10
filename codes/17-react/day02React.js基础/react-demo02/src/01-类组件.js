/**
 * 01-类组件
 *  1.首字母大写
 *  2.类一定要继承React.Component
 *  3.类里面一定要render函数,并且返回jsx
 *  4.类组件当成标签一样使用
 */

// 1.引入核心包
import React from 'react';
import ReactDOM from 'react-dom';

// 2.函数组件
class Child extends React.Component {
    render() {
        return <div><p>这是类组件</p></div>
    }
}

let person = <Child/>;

// 3.渲染组件
ReactDOM.render(person, document.getElementById('root'))

