<template>
  <div v-if="loaded">
    <router-link to="/users">
      <button>back</button>
    </router-link>
    <div id="user-info">
      <div class="info-field">{{ user.name }}</div>
      <div class="info-field">{{ user.email }}</div>
      <div class="info-address">
        <div class="info-field">{{ user.address.city }}</div>
        <div class="info-field">{{ user.address.street }}</div>

        <div class="info-field">{{ user.address.zipcode }}</div>
      </div>
      <div class="info-field">{{ user.phone }}</div>
      <div class="info-field">{{ user.website }}</div>
      <div class="info-field">{{ user.company.name }}</div>
    </div>
  </div>
</template>

<script>
import store from '../store/index.js';

export default {
  name: 'User',
  store,
  data() {
    return {
      user: {},
      loaded: false,
    };
  },
  methods: {
    isIdValid: function() {
      if (this.$route.params.userId + 1 > this.$store.state.users.length) {
        this.$router.push('/404');
      }
    },
  },
  mounted() {
    this.isIdValid();
    this.user = this.$store.state.users[this.$route.params.userId - 1];
    this.loaded = true;
  },
  watch: {
    $route: function() {
      this.isIdValid();
    },
  },
};
</script>

<style scoped>
.info-field {
  background-color: #f5f5f5;
  width: auto;
  margin: 12px;
  padding: 30px;
}
</style>
