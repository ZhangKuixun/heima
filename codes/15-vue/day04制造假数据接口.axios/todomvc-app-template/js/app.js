(function(window) {
    'use strict';

    // 实例化vue
    const vm = new Vue({
        el: '#app',
        data: {
            list: [],
            todoName: '', // 任务名称
            editId: -1, // 双击的item的位置
        },
        created() {
            // this.list = JSON.parse(localStorage.getItem("list")) || []
            axios.get("http://localhost:3000/list").then(res => {
                this.list = res.data
            })
        },
        methods: {
            // 添加任务
            addTodo(e) {
                if (this.todoName != null && this.todoName.trim().length > 0) {
                    // const id = this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1;
                    // 添加到数据里面
                    // this.list.push({
                    //     id,
                    //     name: this.todoName,
                    //     done: false,
                    // })
                    axios.post("http://localhost:3000/list", {
                        name: this.todoName,
                        done: false
                    }).then(res => {
                        if (res != null && res.data != null) {
                            this.list.push(res.data)
                        }
                    })

                    this.todoName = ''
                }
            },
            // 删除任务
            delTodo(id) {
                // 过滤list.item.id != 当前id，并返回一个过滤后的数组
                axios.delete(`http://localhost:3000/list/${id}`).then(res => {
                    this.list = this.list.filter(v => v.id != id)
                })
            },
            // 显示编辑
            showEdit(id) {
                this.editId = id
            },
            // 隐藏编辑状态
            hideEdit(e) {
                axios.patch(`http://localhost:3000/list/${this.editId}`, {
                    name: e.target.value
                }).then(res => {
                    console.log(res);
                })
                this.editId = -1
            },
            // 底部隐藏
            isFooterShow1() {
                console.log("底部隐藏1");
                // data里的数据(todoName)一旦发生变化，当前页面的表达式(v-show="isFooterShow")会重新计算
                return this.list.length > 0
            },
            // 清除已完成，过滤出未完成的
            clearCompleted() {
                this.list = this.list.filter(item => !item.done)
            },
            // 状态改变
            stateChange(id) {
                let todo = this.list.find(item => item.id == id) // 获取list的done
                axios.patch(`http://localhost:3000/list/${id}`, {
                    done: !todo.done
                }).then(res => {})
            }
        },
        // 计算属性
        computed: {
            // 底部的显示与隐藏
            isFooterShow() {
                console.log("底部隐藏");
                return this.list.length > 0
            },
            // 剩余未完成的个数
            itemLeftCount() {
                // filter 查找返回所有符合条件的元素（以数组形式返回）；
                return this.list.filter(item => !item.done).length
            },
            // clearCompleted的显示与隐藏
            isClearCompletedShow() {
                // some 判断数组中是否有一个以上元素符合条件；
                return this.list.some(item => item.done)
            }
        },
        // 监听器
        // watch: {
        //     list: {
        //         deep: true,
        //         handler(newVal) {
        //             console.log("改变了");
        //             localStorage.setItem("list", JSON.stringify(newVal));
        //         }
        //     }
        // }
    })
})(window);
