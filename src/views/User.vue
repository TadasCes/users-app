<template>
  <div>
    <router-link to="/users">back</router-link>
    <h1>{{ user.name }}</h1>
  </div>
</template>

<script>
import store from '../store/index.js';

export default {
  name: 'User',
  store,
  data() {
    return {
      user: {}
    }
  },
  beforeMount() {
    this.user = this.$store.state.users[this.$route.params.userId-1]
    console.log(this.user)
  }
};
</script>

<style></style>
