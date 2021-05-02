/**
 * 09-ref的方法2
 *
 * 非受控组件:
 *  没有受到react的控制,没有添加value过的
 *  想拿到非受控组件的值,通过ref拿
 * 方式1:
 *  第一步:在构造函数中,创建一个引用
 *  第二步:在render中,把ref和表单绑定到一起
 *  第三步:通过引用,找到current拿到对应的绑定元素,再获取value值
 * 方式2:
 *  第一步:通过ref={el => (this.btn = el)}
 *  第二步:this.btn
 *
 */
import React from "react";
import ReactDOM from 'react-dom';

class Child extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            <input type="text"/>
            {/*第一步:通过ref={el => (this.btn = el)}*/}
            <button ref={el => (this.btn = el)} onClick={this.fn.bind(this)}>按钮</button>
        </div>
    }

    fn() {
        // 第二步:this.btn
        console.log(this.btn)
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))