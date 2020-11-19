(function(window) {
    'use strict';

    const vue = new Vue({
        el: '#app',
        data: {
            list: [
                { id: 1, name: '吃饭', completed: true },
                { id: 2, name: '睡觉', completed: false },
                { id: 3, name: '打豆豆', completed: false }
            ]
        },
        methods: {
            pAddTodo(todoName) {
                // 子传父 第一步：父组件准备一个方法
                const id = this.list.length == 0 ? 1 : this.list[this.list.length - 1].id + 1;
                this.list.push({
                    id,
                    name: todoName,
                    completed: false
                })
            },
            pDelTodo(id) {
                this.list = this.list.filter(v => v.id != id);
            }
        }
    })

})(window);
