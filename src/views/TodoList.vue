<template>
  <div class="todo-list">
    <TodoItem
      v-for="item in todoItems"
      :key="item.id"
      :id="item.id"
      :description="item.description"
      :title="item.title"
      :comments="item.comments"
    />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  computed: {
    todoItems: function() {
      return this.$store.state.todoList
    }
  },
  methods: {
    addItem() {
      this.$store.dispatch('addTodo', { title: 'Testin', description: 'Test' })
    }
  }
}
</script>

<style scoped></style>
