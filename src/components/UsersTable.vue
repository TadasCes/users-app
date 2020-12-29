<template>
  <div>
    <table class="shadow">
      <thead>
        <tr>
          <th scope="col" class="align-left">
            Name
          </th>
          <th scope="col" class="align-left">
            Company name
          </th>
          <th scope="col" class="align-left">
            Email
          </th>
          <th scope="col" class="align-right">
            Phone
          </th>
        </tr>
      </thead>
      <tbody>
        <UserRow v-for="user in users" :key="user.id" :user="user" class="user-row"></UserRow>
      </tbody>
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
    };
  },
};
</script>

<style scoped>
table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
}

tbody {
  font-family: 'Roboto', sans-serif;
}

table th {
  background-color: #0054a6;
  color: #fff;
  font-size: 1.2em;
  padding: 30px 12px;
}

.user-row:hover {
  background-color: #efeffb;
  color: #131313;
}

@media only screen and (min-width: 920px) {
  table {
    -webkit-box-shadow: 3px 3px 10px -1px #ccc;
    -moz-box-shadow: 3px 3px 10px -1px #ccc;
    box-shadow: 3px 3px 10px -1px #ccc;
  }
}

@media only screen and (max-width: 920px) {
  table {
    margin-top: 60px;
  }

  .user-info {
    margin-bottom: 16px;
    border-top: 5px solid #0054a6;
    background-color: #fff;
    -webkit-box-shadow: 3px 3px 10px -1px #ccc;
    -moz-box-shadow: 3px 3px 10px -1px #ccc;
    box-shadow: 3px 3px 10px -1px #ccc;
  }

  thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
}
</style>
