import CommentForm from "./comments/CommentForm";
import CommentList from "./comments/CommentList";
import React from "react";


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            list: [
                {id: 1, name: '阿菲', content: '今天是晴天'},
                {id: 2, name: '阿毛', content: '今天是雨天'},
                {id: 3, name: '阿狗', content: '你两848傻'},
            ],
        }
    }

    render() {
        return (
            <div>
                <CommentForm add={this.pAdd.bind(this)}/>
                <CommentList list={this.state.list}/>
            </div>
        );
    }

    pAdd(username, content) {
        let newData = {
            id: +new Date(),
            name: username,
            content,
        }
        // this.setState(state => {
        //     return {
        //         list: [newData, ...state.list]
        //     }
        // })
        this.setState(state => ({
            list: [newData, ...state.list]
        }))
    }
}

export default App;
