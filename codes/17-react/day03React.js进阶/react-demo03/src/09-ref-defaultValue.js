/**
 * 09-ref-defaultValue
 *
 * 如果input添加默认值,但是如果直接给value值的话,就成了受控组件
 *
 * 添加默认值:
 *  defaultValue=""替代value=""
 *  defaultValue={'123'}
 *
 */
import React from "react";
import ReactDOM from 'react-dom';

class Child extends React.Component {

    render() {
        return <div>
            <input type="text" defaultValue={'123'}/>
        </div>
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))