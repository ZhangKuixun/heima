/**
 * 04-其他受控组件,优化
 *
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
            <div>用户名:<input type='text' name={'username'} value={this.state.username}
                            onChange={this.handle.bind(this)}/></div>
            {/*文本域*/}
            <div>主内容:<textarea cols="30" rows="10" name={'content'} value={this.state.content}
                               onChange={this.handle.bind(this)}/></div>
            {/*select标签*/}
            <div>
                水果:
                <select name={'frot'} value={this.state.frot} onChange={this.handle.bind(this)}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">酸橙</option>
                    <option value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
            </div>
        </div>
    }

    // 优化
    handle(e) {
        console.log(e.target.name, ":", e.target.value)

        // 中括号:可以取属性值
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))