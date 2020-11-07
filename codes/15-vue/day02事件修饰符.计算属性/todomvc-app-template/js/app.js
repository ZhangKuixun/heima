(function(window) {
    'use strict';

    // 实例化vue
    const vm = new Vue({
        el: '#app',
        data: {
            list: [
                { id: 1, name: "吃饭", done: true },
                { id: 2, name: "睡觉", done: false },
                { id: 3, name: "打豆豆", done: true },
            ],
            todoName: '', // 任务名称
            editId: -1, // 双击的item的位置
        },
        methods: {
            // 添加任务
            addTodo(e) {
                if (this.todoName != null && this.todoName.trim().length > 0) {
                    const id = this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1;
                    // 添加到数据里面
                    this.list.push({
                        id,
                        name: this.todoName,
                        done: false,
                    })

                    this.todoName = ''
                }
            },
            // 删除任务
            delTodo(id) {
                // 过滤list.item.id != 当前id，并返回一个过滤后的数组
                this.list = this.list.filter(v => v.id != id)
            },
            // 显示编辑
            showEdit(id) {
                this.editId = id
            },
            // 隐藏编辑状态
            hideEdit() {
                this.editId = -1
            },
            // 底部隐藏
            isFooterShow1() {
                console.log("底部隐藏1");
                // data里的数据(todoName)一旦发生变化，当前页面的表达式(v-show="isFooterShow")会重新计算
                return this.list.length > 0
            }
        },
        // 计算属性
        computed: {
            // 底部隐藏
            isFooterShow() {
                console.log("底部隐藏");
                return this.list.length > 0
            }
        }
    })
})(window);
