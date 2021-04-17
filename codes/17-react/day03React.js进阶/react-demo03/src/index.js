import React from 'react';
import ReactDOM from 'react-dom';


class Child extends React.Component {
    render() {
        return <div>测试</div>
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))