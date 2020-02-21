<template>
  <div class="nav-item">
    <b-card :title="title" tag="article" style="max-width: 20rem;" class="mb-2">
      <b-card-text>
        {{ description }}
      </b-card-text>
      <b-button-toolbar id="card-buttons">
        <b-button :to="`/item/` + id" variant="primary">More</b-button>
      </b-button-toolbar>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    comments: {
      type: Array,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
#card-buttons {
  justify-content: center;
}
#card-buttons > *:not(:last-child) {
  margin-right: 3px;
}
</style>
