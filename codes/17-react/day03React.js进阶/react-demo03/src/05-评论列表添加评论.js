/**
 * 05-评论列表添加评论
 *
 */
import React from "react";
import ReactDOM from 'react-dom';

class CommentList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            list: [
                {id: 3, name: '阿狗', content: '你两848傻'},
                {id: 2, name: '阿毛', content: '今天是雨天'},
                {id: 1, name: '倒塌', content: '今天是晴天'},
            ],
            username: '',
            content: ''
        }
    }

    render() {
        return <div>
            <div>
                <input type="text" name={'username'} onChange={this.handle.bind(this)}/><br/>
                <textarea cols={'30'} rows={'10'} name={'content'} onChange={this.handle.bind(this)}/>
                <button onClick={this.add.bind(this)}>添加</button>
            </div>
            <ul>
                {this.state.list.map(item => {
                    return <li key={item.id}>
                        <p>评论人:{item.name}</p>
                        <p>评论内容:{item.content}</p>
                    </li>
                })}
            </ul>
        </div>
    }

    add() {
        console.log('哈哈')
        this.state.list.unshift({
            id: this.state.list[this.state.list.length - 1].id + 1,
            name: this.state.username,
            content: this.state.content
        })
        this.setState(this.state)
    }

    handle(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

ReactDOM.render(<CommentList/>, document.getElementById('root'))