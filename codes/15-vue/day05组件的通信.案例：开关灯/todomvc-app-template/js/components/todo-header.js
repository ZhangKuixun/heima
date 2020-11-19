Vue.component('todo-header', {
    template: `
		<header class="header">
			<h1>todos</h1>
			<input class="new-todo" placeholder="What needs to be done?" autofocus @keyup.enter="addTodo" v-model="todoName">
		</header>
		`,
    data() {
        return {
            todoName: ""
        }
    },
    methods: {
        addTodo() {
            // 子传父 第三步：子组件触发这个事件,调用index.html的add-todo方法
            this.$emit('add-todo', this.todoName);

            this.todoName = ''
        }
    }
})
