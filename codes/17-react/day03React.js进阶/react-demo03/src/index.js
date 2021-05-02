/**
 * 11-
 *
 */
import React from "react";
import ReactDOM from 'react-dom';
import CommentFrom from './components/CommentFrom'
import CommentList from './components/CommentList'

class Component extends React.Component {

    render() {
        return <div>
            {/*表单*/}
            <CommentFrom/>
            {/*评论列表*/}
            <CommentList/>
        </div>;
    }
}

ReactDOM.render(<Component/>, document.getElementById('root'))