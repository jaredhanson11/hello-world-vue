<template>
  <div class="todo-item-details">
    <h1>{{ item.title }}</h1>
    <p>{{ item.description }}</p>
    <ol v-if="item.comments.length > 0">
      <li v-for="(idx, comment) in item.comments" :key="idx">
        {{ comment }}
      </li>
    </ol>
    <p v-else>No comments on this item</p>
    <b-button variant="primary">Add Comment</b-button>
  </div>
</template>

<script>
export default {
  name: 'TodoItemDetails',
  data: () => {
    return {
      addingComment: false
    }
  },
  computed: {
    item: function() {
      return this.$store.state.todoList[this.$route.params.id]
    }
  }
}
</script>

<style scoped></style>
