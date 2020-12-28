<template>
  <div >
    <table id="users-table" >
      <tr>
        <th scope="col">
          Name
        </th>
        <th scope="col">
          Email
        </th>
        <th scope="col">
          Phone
        </th>
        <th scope="col">
          Company name
        </th>
      </tr>
      <UserRow v-for="user in users" :key="user.id" :user="user" class="user-row" ></UserRow>
    </table>
  </div>
</template>

<script>
import UserRow from './UserRow.vue';
import store from '../store/index.js';

export default {
  name: 'UsersTable',
  components: {
    UserRow,
  },
  store,
  data: function() {
    return {
      users: store.state.users,
      usersFetched: store.state.usersFetched
    };
  },
  methods: {
    bonk: function(id) {
      console.log(id)
    }
  }
};
</script>

<style scoped>
#users-table {
  width: 80%;
  margin: 0 auto;
}

.user-row:nth-child(even) {
  background-color: #f5f5f5;
}

.user-row:hover {
  background-color: #dcdce2;
}

#users-table th {
  background-color: #0054a6;
  color: #fff;
  font-size: 1.2em;
  padding: 12px;
  text-align: left;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
