<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        :class="{ completed: item.done, editing: item.id === editId }"
        v-for="item in $store.state.list"
        :key="item.id"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.done"
            @input="changeState(item.id)"
          />
          <label @dblclick="showEdit(item.id)">{{ item.name }}</label>
          <button @click="delTodo(item.id)" class="destroy"></button>
        </div>
        <input
          @keyup.enter="hideEdit"
          class="edit"
          :value="item.name"
          v-focus="item.id == editId"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      editId: -1,
    };
  },
  methods: {
    // 将 store 的 mutations 里的 delTodo 映射到当前的方法
    // mapMutations 里的 delTodo 和 methods 里的 delTodo 有冲突
    ...mapMutations(["delTodo", "updateTodo", "changeState"]),
    // 给映射的方法起一个别名
    ...mapMutations({
      del_todo: "delTodo",
      change_state: "changeState",
    }),

    // 映射 mapActions
    ...mapActions(["asyncDelTodo"]),

    // 删除
    delTodo(id) {
      // list减一
      // commit 去 mutaitons 里面找，是同步方法
      // this.$store.commit("delTodo", {
      //   id,
      // });
      this.del_todo({ id });

      // dispatch 去 actions 里面找，是异步方法
      // this.$store.dispatch("asyncDelTodo", {
      //   id,
      // });
      this.asyncDelTodo({ id });
    },
    // 显示编辑状态
    showEdit(id) {
      this.editId = id;
    },
    // 影藏编辑状态
    hideEdit(e) {
      this.updateTodo({
        id: this.editId,
        name: e.target.value,
      });
      // this.$store.commit("updateTodo", {
      //   id: this.editId,
      //   name: e.target.value,
      // });

      this.editId = -1;
    },
    // 修改状态
    changeState(id) {
      this.change_state({ id });
      // this.$store.commit("changeState", {
      //   id,
      // });
    },
  },
};
</script>

<style></style>
