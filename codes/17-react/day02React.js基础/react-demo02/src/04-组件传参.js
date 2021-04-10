/**
 * 04-组件传参
 *
 * 函数组件:
 *  1. 传参:通过属性传递 name='春春' age={30}
 *  2. 接收:
 *  function Child(props) {
 *   return <div>函数组件-{props.name}-{props.age}</div>
 *  }
 *
 * 类组件:
 *  1.传参:通过属性传参 name={'春春'} age={30}
 *  2.接收:
 *  class Child extends React.Component {
 *      constructor(props) {
 *          super(props);
 *      }
 *      render() {
 *          return <div>类组件--{this.props.name}--{this.props.age}</div>
 *      }
 *  }
 *  注意:
 *  类组件构造函数: constructor(props){super(props);}
 *
 *  props的只读性
 *   都是用来保存信息，信息可以控制组件的渲染输出。
 *   一个重要的不同点就是：props是传递给组件的（类似于函数的形参），state是在组件内被组件自己管理的（类似于在一个函数内声明的变量）。
 *
 *
 * props state
 *  Yes   Yes   能否从父组件获取初始值?
 *  Yes   No    父组件可以改变?
 *  Yes   Yes   可以在内部组件改变默认值? ***
 *  No    Yes   可以改变内部组件?
 *  Yes   Yes   可以改变子组件的初始值?
 *  Yes   No    可以改变子组件?
 *
 */

// 1.引入核心包
import React from 'react';
import ReactDOM from 'react-dom';

// 2.函数组件
// function Child(props) {
//     return <div>函数组件--{props.name}--{props.age}</div>
// }

// 2.类组件
class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>类组件--{this.props.name}--{this.props.age}</div>
    }
}

// 3.渲染
ReactDOM.render(<Child name={'春春'} age={30}/>, document.getElementById('root'))