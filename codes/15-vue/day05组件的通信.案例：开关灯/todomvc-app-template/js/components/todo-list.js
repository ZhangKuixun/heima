Vue.component('todo-list', {
    template: `
					<section class="main">
					<input id="toggle-all" class="toggle-all" type="checkbox">
					<label for="toggle-all">Mark all as complete</label>
						<ul class="todo-list">
								<li :class="{completed:item.done, editing:item.id==editId}" v-for='item in list' :key>
										<div class="view">
												<input class="toggle" type="checkbox" v-model='item.done' >
												<label @dblclick="showEdit(item.id)">{{item.name}}</label>
												<button class="destroy" @click="delTodo(item.id)"></button>
										</div>
										<input class="edit" v-model='item.name' @keyup.enter="hideEdit()">
								</li>
						</ul>
					</section>
					`,
    // 父传子，第二步，子组件通过props指定一下要接收的数据
    props: ['list'],
    data() {
        return {
            editId: -1
        }
    },
    methods: {
        delTodo(id) {
            this.$emit('del-todo', id);
        },
        // 显示编辑状态
        showEdit(id) {
            this.editId = id
        },
        // 影藏编辑状态
        hideEdit() {
            this.editId = -1;
        }
    }
})
