(function(window) {
    'use strict';

    const vue = new Vue({
        el: '#app',
        data: {
            list: [
                { id: 1, name: '吃饭', done: true },
                { id: 2, name: '睡觉', done: false },
                { id: 3, name: '打豆豆', done: false }
            ]
        },
        methods: {
            pAddTodo(todoName) {
                // 子传父 第一步：父组件准备一个方法
                const id = this.list.length == 0 ? 1 : this.list[this.list.length - 1].id + 1;
                this.list.push({
                    id,
                    name: todoName,
                    done: false
                })
            },
            pDelTodo(id) {
                this.list = this.list.filter(v => v.id != id);
            },
            pUpdateName(id, name) {
                let todo = this.list.find(item => item.id == id);
                todo.name = name
            },
            pUpdateState(id) {
                let todo = this.list.find(v => v.id == id);
                todo.done = !todo.done;
            },
            pClearCompleted() {
                this.list = this.list.filter(v => !v.done);
            }
        },
        computed: {
            // 底部的显示与影藏
            isFooterShow() {
                return this.list.length > 0
            },
            // 剩余未完成个数
            itemLeftCount() {
                return this.list.filter(v => !v.done).length
            },
            // clearCompletedShow显示问题
            isClearCompletedShow() {
                return this.list.some(v => v.done)
            }
        }
    })

})(window);
