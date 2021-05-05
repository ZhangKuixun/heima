/**
 * 02-react-router
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
    render() {
        return <div>
            <button onClick={this.handleClick.bind(this)}>查询书籍</button>
            <button onClick={this.handleAdd.bind(this)}>添加书籍</button>
        </div>
    }

    // 用 async+await 优化
    async handleClick() {
        let res = await fetch('https://yapi.baidu.com/mock/54225/getBookList')
        let data = await res.json()
        console.log(data)
    }

    // 发送post请求
    // 注意:body的数据格式必须和headers设置的content-type的类型匹配
    // 例如:
    // 'content-type': 'application/json',body的值必须使用一个json对象
    // 'content-type': 'application/x-www-form-urlencoded',body的值必须使用字符串:name=李四&desc=嘻嘻
    //
    // 原生ajax用的是x-www-form-urlencoded,最后都是把json转成了字符串
    async handleAdd() {
        let response = await fetch('https://yapi.baidu.com/mock/54225/addBook', {
            method: 'POST',
            headers: {
                // 'content-type': 'application/x-www-form-urlencoded'
                'content-type': 'application/json'
            },
            // body:'name=李四&desc=嘻嘻'
            body: JSON.stringify({
                name: '李四',
                desc: '嘻嘻'
            })
        });
        let data = await response.json();

        // // 调用封装后的方法
        // let data = await this.post('https://yapi.baidu.com/mock/54225/addBook', {
        //     name: 'C++',
        //     desc: '描述'
        // })

        console.log(data)
    }

    // 封装fetch的post请求
    post(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
    }
}

ReactDOM.render(<Child/>, document.getElementById('root'))
