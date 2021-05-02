/**
 * 07-使用setState修改评论案例
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
        let newData = {
            id: +new Date(),
            name: this.state.username,
            content: this.state.content
        }
        this.setState(state => {
            return {
                list: [newData, ...state.list],
                username: '',
                content: ''
            }
        })
    }

    handle(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

ReactDOM.render(<CommentList/>, document.getElementById('root'))