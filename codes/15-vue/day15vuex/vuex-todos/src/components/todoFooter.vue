<template>
  <!-- <footer class="footer" v-show="$store.getters.isFooterShow"> -->
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
import { mapGetters } from "vuex";
export default {
  methods: {
    clearCompleted() {
      this.$store.commit("clearCompleted");
    },
  },
  computed: {
    // 将 vuex 的 store 里面的几个 getters 属性，映射到组件内的计算属性
    // 使用：把数组里面的item当成当前组件的计算属性用了
    ...mapGetters(["isFooterShow", "itemLeftCount", "isClearCompletedShow"]),
  },
};
</script>

<style></style>
