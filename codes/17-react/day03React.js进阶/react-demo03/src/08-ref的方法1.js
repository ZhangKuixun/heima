/**
 * 08-ref的方法1
 *
 * 非受控组件:
 *  第一步:在构造函数中,创建一个引用
 *  第二步:在render中,把ref和表单绑定到一起
 *  第三步:通过引用,找到current拿到对应的绑定元素,再获取value值
 *  class Child extends React.Component {
 *
 *       constructor(props, context) {
 *           super(props, context);
 *           // 第一步:创建一个引用
 *           this.usernameRef = React.createRef()
 *       }
 *
 *       render() {
 *           return <div>
 *                // 第二步:把ref和表单绑定到一起
 *                <input type="text" ref={this.usernameRef}/>
 *                   <button onClick={this.fn.bind(this)}>按钮</button>
 *                </div>
 *       }
 *
 *       fn(){
 *           // 第三步:通过引用,找到current拿到对应的绑定元素,再获取value值
 *           console.log(this.usernameRef.current.value)
 *       }
 *   }
 */
import React from "react";
import ReactDOM from 'react-dom';

class Child extends React.Component {

    constructor(props, context) {
        super(props, context);
        // 第一步:创建一个引用
        this.usernameRef = React.createRef()
    }

    render() {
        return <div>
            {/*第二步:把ref和表单绑定到一起*/}
            <input type="text" ref={this.usernameRef}/>
            <button onClick={this.fn.bind(this)}>按钮</button>
        </div>
    }

    fn() {
        // 第三步:通过引用,找到current拿到对应的绑定元素,再获取value值
        console.log(this.usernameRef.current.value)
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))