import React from "react";
import './CommentList.css'

class CommentList extends React.Component {

    render() {
        return <div>
            <ul>
                {this.props.list.map(item => (
                    <li key={item.id}>
                        <p>评论人:{item.name}</p>
                        <p>评论内容:{item.content}</p>
                        <button onClick={this.del.bind(this, item.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    }

    del(id) {
        this.props.del(id)
    }

}

export default CommentList