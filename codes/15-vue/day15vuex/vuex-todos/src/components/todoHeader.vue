<template>
  <header class="header">
    <h1>todos</h1>
    <input
      @keyup.enter="addTodo"
      v-model="todoName"
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
    />
  </header>
</template>

<script>
// 第一步 引入
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      todoName: "",
    };
  },
  methods: {
    // 第二步 映射
    ...mapMutations(["addTodo"]),
    ...mapMutations({
      add_todo: "addTodo",
    }),
    // 添加任务
    addTodo() {
      this.add_todo({
        name: this.todoName,
      });
      // this.$store.commit("addTodo", {
      //   name: this.todoName,
      // });
      this.todoName = "";
    },
  },
};
</script>

<style></style>
