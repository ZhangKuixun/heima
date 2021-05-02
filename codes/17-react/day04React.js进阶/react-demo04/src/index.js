/**
 * 状态提升，确实能解决兄弟之间传递的数据问题，如果嵌套太深，最近的父组件离的太远
 *
 * 方式1：Context
 * 方式2：状态管理工具 redux(类似于vue里面的vuex)后面讲
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div></div>
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'));
