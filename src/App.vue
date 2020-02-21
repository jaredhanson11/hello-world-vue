<template>
  <div id="app">
    <TheVNavbar :routes="routes" />
    <div id="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheVNavbar from '@/components/TheVNavbar.vue'
import { routes } from '@/router'
export default {
  components: {
    TheVNavbar
  },
  data: function() {
    return { routes }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#body {
  width: 60%;
  margin-bottom: 10px;
  margin: auto;
}
</style>
