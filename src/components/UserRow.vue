<template>
  <tr @click="openProfile" class="user-info">
    <td data-label="Name" class="align-left">{{ user.name }}</td>
    <td data-label="Company" class="align-left">{{ user.company.name }}</td>
    <td data-label="Email" class="align-left">{{ user.email }}</td>
    <td data-label="Phone" class="align-right">{{ user.phone }}</td>
  </tr>
</template>

<script scoped>
export default {
  name: 'UserRow',
  props: {
    user: Object,
  },
  methods: {
    openProfile: function() {
      this.$router.push({ name: 'UserProfile', params: { userId: this.user.id } });
    },
  },
};
</script>

<style scoped>
td {
  padding: 16px;
  padding-left: 12px;
  border-bottom: 1px solid #0054a6;
}

.no-stretch {
  width: 1%;
  white-space: nowrap;
}

@media only screen and (max-width: 920px) {
  
  tr {
    display: block;
    margin-bottom: 0.5em;
  }

  td {
    display: block;
    font-size: 1em;
    text-align: right !important;
  }

  td::before {
    content: attr(data-label);
    float: left;
    font-size: 1em;
    font-weight: 800;
  }
}
</style>
