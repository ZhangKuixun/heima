/**
 * 02-属性的类型检查
 *
 * 第一步:引入校验
 * import PropTypes from 'prop-types';
 *
 * class Father extends React.Component {
 *     render() {
 *         return <div>
 *             组件:<Son fn={this.pfn} msg={'ma'}/>
 *         </div>
 *     }
 *     pfn() {
 *         console.log('父的方法')
 *     }
 *  }
 *
 *  class Son extends React.Component {
 *     render() {
 *         return <div>
 *             子组件: {this.props.msg}
 *             <br/>
 *             <button onClick={this.f.bind(this)}>按钮</button>
 *         </div>
 *     }
 *     f() {
 *         this.props.fn()
 *     }
 *  }
 *
 * 第二步:Son需要接收参数，PropTypes校验Son接收的参数，msg是不是string,fn是不是func
 *  Son.propTypes = {
 *     msg: PropTypes.string,
 *     fn: PropTypes.func
 *  };
 *
 */
import React from "react";
import ReactDOM from 'react-dom';

// 第一步:引入校验
import PropTypes from 'prop-types';

class Father extends React.Component {
    render() {
        return <div>
            组件:<Son fn={this.pfn} msg={'ma'}/>
        </div>
    }

    pfn() {
        console.log('父的方法')
    }
}

class Son extends React.Component {
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

// 默认属性
Son.defaultProps = {
    name: '这是默认的名称'
}

// 第二步:Son需要接收参数，PropTypes校验Son接收的参数，msg是不是string,fn是不是func
Son.propTypes = {
    msg: PropTypes.string,
    fn: PropTypes.func.isRequired
};

ReactDOM.render(<Father/>, document.getElementById('root'))