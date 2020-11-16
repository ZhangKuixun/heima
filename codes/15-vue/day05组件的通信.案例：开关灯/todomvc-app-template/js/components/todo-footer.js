Vue.component('todo-footer', {
    template: `
	        <footer class="footer">
            <span class="todo-count"><strong>0</strong> item left</span>
            <button class="clear-completed">Clear completed</button>
					</footer>
				`,
    data() {
        return {
            msg: "ssss"
        }
    }
})