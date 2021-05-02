import React from "react";

class CommentForm extends React.Component {

    state = {
        username: '',
        content: '',
    }

    render() {
        return <div>
            评论人:<input type={'text'} name={'username'} value={this.state.username}
                       onChange={this.handle.bind(this)}/><br/>
            评论内容:<textarea cols={30} rows={10} name={'content'} value={this.state.content}
                           onChange={this.handle.bind(this)}/><br/>
            <button onClick={this.add.bind(this)}>评论</button>
        </div>
    }

    handle(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    // 添加
    add() {
        // 子传父,把username和content传递到App
        const {username, content} = this.state
        this.props.add(username, content)
    }
}

export default CommentForm