/**
 * 12-评论案例
 *
 */

// 1.引入核心包
import React from "react";
import ReactDOM from 'react-dom';

function Comment(props) {
    return <li>
        <p>评论人:{props.name}</p>
        <p>评论内容:{props.content}</p>
    </li>
}

// 2.类组件
class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, name: '春春', content: '今天好冷'},
                {id: 2, name: '飞飞', content: '今天好热'},
                {id: 3, name: '涛涛', content: '你们是484'}]
        }
    }

    render() {
        return <div>
            <h3>评论列表如下</h3>
            <ul>
                {this.state.list.map(item => {
                    return <Comment key={item.id} name={item.name} content={item.content}/>
                })}
            </ul>
        </div>
    }
}

// 3.渲染
ReactDOM.render(<CommentList/>, document.getElementById('root'))