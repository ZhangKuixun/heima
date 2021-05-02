import React from "react";

class CommentList extends React.Component {

    render() {
        return <div>
            <ul>
                {this.props.list.map(item =>(
                    <li key={item.id}>
                        <p>评论人:{item.name}</p>
                        <p>评论内容:{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    }

}

export default CommentList