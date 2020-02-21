<template>
  <div>
    <b-form @submit="addTodo">
      <b-form-group id="title-group" label="Title:" label-for="title-input">
        <b-form-input
          id="title-input"
          v-model="title"
          required
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="description-group"
        label="Description:"
        label-for="description-input"
      >
        <b-form-input
          id="description-input"
          v-model="description"
          required
          placeholder="Enter description"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'TodoAdd',
  data: function() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    addTodo(evt) {
      evt.preventDefault()
      this.$store.dispatch('addTodo', {
        title: this.title,
        description: this.description
      })
      this.$router.push('/')
    }
  }
}
</script>
