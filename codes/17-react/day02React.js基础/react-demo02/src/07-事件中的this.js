/**
 * 07-事件中的this
 *
 * react事件绑定的函数里面的this没有处理,需要自己处理
 * 方式一:bind  onClick={this.fn.bind(this)}
 * 方式二:属性初始化语法  onClick={this.fn2}  fn2=()=>{}
 * 方式三:箭头函数  onClick{()=>this.fn()}
 */

// 1.引入核心包
import React from 'react';
import ReactDOM from 'react-dom';

// 2.类组件
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'zs'
        }
    }

    render() {
        // 打印:this=undefined
        // return <button onClick={this.fn}>按钮-bind</button>

        /*
        * onClick={this.fn.bind(this)}的注解
        * onClick={this.fn.bind(this)}: onClick={函数}
        * this.fn.bind(this): this.fn函数里面的this指向了bind(this),bind括号里面的this,最后一个新的函数
        * let newF = this.fn.bind(this);
        * onClick={newF}
        * */
        // 方式一: 打印:this=this对象
        return <button onClick={this.fn.bind(this)}>按钮1-bind</button>

        // 方式二: 打印:this=this对象
        return <button onClick={this.fn2}>按钮2-属性初始化语法</button>

        /*
        * onClick={() => this.fn3()}
        * () => {函数}
        * this.fn(): 谁调用了fn函数,fn里面的this就指向谁
        * */
        //方式三: 打印:this=this对象
        return <button onClick={() => this.fn()}>按钮3-箭头函数</button>
    }

    fn() {
        console.log('我被点击了,this=', this)
    }

    fn2 = () => {
        // 箭头函数里面的this执行的是外面的this
        console.log('this=', this)
    }
}

// 3.渲染
ReactDOM.render(<Child/>, document.getElementById('root'));


// // 原生js说明:react事件绑定的函数里面的this没有处理
// function f() {
//     console.log(this)
// }
//
// let obj = {name: 'zs'};
// // bind的使用
// // f.bind(obj): f函数里面的this指向了obj,返回一个新的函数;不会调用f函数
// // 绑定之后没有打印,不是bind出了问题,而是bind、call、apply出了问题
// // call、apply:1.调用 2.指向 用他们两个调用方法,会立马执行被调用的方法
// // bind:1.指向 2.调用后,返回一个新函数
// let newF = f.bind(obj)
// newF()