<template>
  <div id="app">
    <section class="todoapp" id="app">
      <!-- 标题+输入框 -->
      <todoHeader></todoHeader>

      <!-- 列表部分 -->
      <todoList></todoList>

      <!-- 底部 -->
      <todoFooter></todoFooter>
    </section>
  </div>
</template>

<script>
// 引入三个子组件
import todoHeader from "./components/todoHeader.vue";
import todoList from "./components/todoList.vue";
import todoFooter from "./components/todoFooter.vue";

export default {
  name: "App",
  components: {
    todoHeader,
    todoList,
    todoFooter,
  },
};
</script>

<style></style>
