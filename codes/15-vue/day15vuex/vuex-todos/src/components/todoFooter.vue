<template>
  <footer class="footer" v-show="isFooterShow">
    <span class="todo-count"
      ><strong>{{ itemLeftCount }}</strong> item left</span
    >
    <button
      @click="clearCompleted"
      v-show="isClearCompletedShow"
      class="clear-completed"
    >
      Clear completed
    </button>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
