Vue.component('todo-footer', {
    template: `
	        <footer class="footer" v-show="isFooterShow">
				<span class="todo-count"><strong>{{itemLeftCount}}</strong> item left</span>
				<button class="clear-completed" v-show="isClearCompletedShow" @click="clearCompleted">Clear completed</button>
			</footer>
			`,
    props: ["isFooterShow", "itemLeftCount", "isClearCompletedShow"],
    methods: {
        clearCompleted() {
            this.$emit("clear-completed")
        }
    }
})
