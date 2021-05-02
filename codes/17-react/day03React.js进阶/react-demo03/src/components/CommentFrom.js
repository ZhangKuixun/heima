import React from "react";
import CommentList from "./CommentList";

class CommentForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            content: ''
        }
    }

    render() {
        return <div>
            <div>评论人:<input type={'text'} name={'username'} value={this.state.name}
                            onChange={this.handle.bind(this)}/></div>
            <div>评论内容: <textarea cols={30} rows={10} name={'content'} value={this.state.content}
                                 onChange={this.handle.bind(this)}/></div>
            <button onClick={this.add.bind(this)}>评论</button>
        </div>
    }

    handle(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
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
                    content: '',
                }
            }
        )
    }
}

export  default CommentForm