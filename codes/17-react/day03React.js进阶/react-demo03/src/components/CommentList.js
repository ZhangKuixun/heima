import React from "react";

class CommentList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            list: [
                {id: 3, name: '阿狗', content: '你两848傻'},
                {id: 2, name: '阿毛', content: '今天是雨天'},
                {id: 1, name: '倒塌', content: '今天是晴天'},
            ],
        }
    }

    render() {
        return <div>
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
}

export default CommentList