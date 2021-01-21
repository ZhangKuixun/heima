<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        :class="{ completed: item.done, editing: item.id === editId }"
        v-for="item in list"
        :key="item.id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.done" />
          <label @dblclick="showEdit(item.id)">{{ item.name }}</label>
          <button @click="delTodo(item.id)" class="destroy"></button>
        </div>
        <input @keyup.enter="hideEdit" class="edit" v-model="item.name" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
