/**
 * 01-提升状态
 *
 * 状态提升，确实能解决兄弟之间传递的数据问题，如果嵌套太深，最近的父组件离的太远
 *
 * 需求:有三层控件,把father的颜色传递给sun
 *
 * 方式1：Context:共享组件树需要用的全局数据
 *  第一步:创建context,把context里面两个值(Provider, Consumer)写成变量
 *    const {Provider, Consumer} = React.createContext(undefined, undefined)
 *  第二步:写Provider提供数据,用Provider标签,把子控件包裹住,不论多深的子控件都能用Provider提供的数据
 *  class Father extends React.Component {
 *       state = {
 *           color: 'red'
 *       }
 *
 *       render() {
 *           return <Provider value={this.state.color}>
 *               <div>父:<Son/></div>
 *           </Provider>
 *       }
 *   }
 *   class Son extends React.Component {
*       render() {
*           return <div>子:<Sun/></div>
*       }
*    }
 *   第三步:写Consumer消费数据,用Consumer标签,把子控件包裹住,使用传递来的value
 *   class Sun extends React.Component {
 *     render() {
 *         return <Consumer>
 *             {value => {
 *                 console.log(value)// red
 *                 return <div className={'sun'} style={{color: value}}>孙:</div>
 *             }}
 *         </Consumer>
 *     }
 *   }
 *
 * 方式2：状态管理工具 redux(类似于vue里面的vuex)后面讲
 *
 *
 */
import React from "react";
import ReactDOM from 'react-dom';
import './css/02.css'

// 第一步:创建context
// context里面有两个组件Provider和Consumer
// Provider:提供数据
// Consumer:消费数据
const {Provider, Consumer} = React.createContext(undefined, undefined)

class Father extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            color: 'red'
        }
    }

    render() {
        return <Provider value={this.state.color}>
            <div className={'father'}>
                父:<Son/>
            </div>
        </Provider>
    }
}

class Son extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cmsg: '子组件的数据'
        }
    }

    render() {
        return <div className={'son'}>
            子:<Sun/>
        </div>
    }
}

class Sun extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            smsg: '子组件的数据'
        }
    }

    render() {
        return <Consumer>
            {value => {
                console.log(value)// red
                return <div className={'sun'} style={{color: value}}>孙:</div>
            }}
        </Consumer>
    }
}

ReactDOM.render(<Father/>, document.getElementById('root'))