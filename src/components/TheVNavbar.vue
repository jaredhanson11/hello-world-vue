<template>
  <b-navbar variant="dark" type="dark">
    <b-navbar-brand to="/" class="nav-image" href="">
      <img src="@/assets/logo.png" /> TodoList
    </b-navbar-brand>
    <b-navbar-nav id="nav" class="ml-auto">
      <b-nav-item
        exact-active-class="active"
        :to="route.path"
        :key="idx"
        v-for="(route, idx) in navRoutes"
      >
        {{ route.name }}
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'TheVNavbar',
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  computed: {
    navRoutes() {
      return this.routes.filter(item => item.showNav)
    }
  }
}
</script>

<style scoped>
.nav-image img {
  height: 50px;
}
</style>
