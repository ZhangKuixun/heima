/**
 * 03-其他受控组件:
 *
 * input
 * 文本域
 * select标签
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            username: 'zs',
            content: '评论内容',
            frot: 'coconut'
        }
    }

    render() {
        return <div>
            {/*input*/}
            <div>用户名:<input type='text' value={this.state.username} onChange={this.handleInput.bind(this)}/></div>
            {/*文本域*/}
            <div>主内容:<textarea cols="30" rows="10" value={this.state.content}
                               onChange={this.handleTextarea.bind(this)}/></div>
            {/*select标签*/}
            <div>
                水果:
                <select value={this.state.frot} onChange={this.handleSelect.bind(this)}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">酸橙</option>
                    <option value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
            </div>
        </div>
    }

    // 处理input的值
    handleInput(e) {
        this.setState({username: e.target.value})
    }

    // 处理文本域
    handleTextarea(e) {
        this.setState({content: e.target.value})
    }

    // 处理select
    handleSelect(e) {
        this.setState({frot: e.target.value})
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))