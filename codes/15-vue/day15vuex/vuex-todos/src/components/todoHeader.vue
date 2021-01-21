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
export default {};
</script>

<style></style>
