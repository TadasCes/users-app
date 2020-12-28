<template>
  <div id="app">
    <Users></Users>
  </div>
</template>

<script>
import Users from './pages/Users.vue'

export default {
  name: 'App',
  components: {
    Users
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
