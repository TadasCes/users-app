<template>
  <table class="table table-striped table-bordered">
    <thead class="thead-dark">
      <tr>
        <!-- TODO normalias ikonas sudet ir dydzius padaryt -->
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
    </thead>
    <tbody>
      <UserRow
        v-for="user in displayedList"
        :key="user.name"
        :user="user"
        @delete-user="deleteUser"
      ></UserRow>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UsersTable',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
