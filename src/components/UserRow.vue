<template>
  <tr @click="bonk(user.id)">
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.phone }}</td>
    <td>{{ user.company.name }}</td>
  </tr>
</template>

<style scoped>
td {
  margin: 6px;
  width: 25%;
  padding: 8px 8px 8px 12px;
}
</style>




<script scoped>
export default {
  name: 'UserRow',
  props: {
    user: Object,
  },
  methods: {
    bonk: function(id) {
      console.log(id);
    },
  },
};
</script>
