/**
 * 03-static关键字改造默认属性、类型校验
 *
 */
import React from "react";
import ReactDOM from 'react-dom';

// 第一步:引入校验
import PropTypes from 'prop-types';

class Father extends React.Component {
    render() {
        return <div>
            组件:<Son fn={this.pfn} msg={'父组件'}/>
        </div>
    }

    pfn() {
        console.log('父的方法')
    }
}

class Son extends React.Component {

    // 默认属性
    static  defaultProps = {
        name: '这是默认的名称'
    }

    // 第二步:Son需要接收参数，PropTypes校验Son接收的参数，msg是不是string,fn是不是func
    static  propTypes = {
        msg: PropTypes.string,
        // 必须传递的参数
        fn: PropTypes.func.isRequired
    };

    render() {
        return <div>
            子组件: {this.props.msg}
            <br/>
            <button onClick={this.f.bind(this)}>按钮</button>
        </div>
    }

    f() {
        this.props.fn()
    }
}

// // 默认属性
// Son.defaultProps = {
//     name: '这是默认的名称'
// }
//
// // 第二步:Son需要接收参数，PropTypes校验Son接收的参数，msg是不是string,fn是不是func
// Son.propTypes = {
//     msg: PropTypes.string,
//     fn: PropTypes.func.isRequired
// };

ReactDOM.render(<Father/>, document.getElementById('root'))
