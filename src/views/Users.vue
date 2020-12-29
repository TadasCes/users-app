<template>
  <UsersTable v-if="usersFetched"></UsersTable>
</template>

<script>
import UsersTable from '../components/UsersTable.vue';
import store from '../store/index.js';
import axios from 'axios';

export default {
  name: 'Users',
  store,
  components: {
    UsersTable,
  },

  data() {
    return {
      users: [],
      usersFetched: false
    };
  },
  beforeMount() {
    // Receive data before rendering the page
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      store.state.users = response.data;
      this.usersFetched = true;
    });
  },
};
</script>

<style></style>
