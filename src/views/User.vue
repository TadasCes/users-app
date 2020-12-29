<template>
  <div v-if="loaded">
    <div id="user-profile" class="shadow">
      <div class="section-header">
        <div class="go-back">
          <router-link to="/users">
            <div>
              <span class="material-icons">
                keyboard_backspace
              </span>
              <span>Back to the list</span>
            </div>
          </router-link>
        </div>
        <div class="align-left">
          <h1>
            {{ user.name }}
          </h1>
          <div class="info-company">
            <h4>Company</h4>
            {{ user.company.name }}
          </div>
        </div>
      </div>
      <div class="section-address">
        <h3 class="align-left">
          Address
        </h3>
        <div>
          <div class="info-field">
            <label>City:</label>
            <span>
              {{ user.address.city }}
            </span>
          </div>
          <div class="info-field">
            <label>Suite:</label>
            <span>
              {{ user.address.suite }}
            </span>
          </div>
        </div>
        <div>
          <div class="info-field">
            <label>Street:</label>
            <span>
              {{ user.address.street }}
            </span>
          </div>
          <div class="info-field">
            <label>ZipCode:</label>
            <span>
              {{ user.address.zipcode }}
            </span>
          </div>
        </div>
      </div>
      <div class="section-contacts">
        <h3 class="align-left">
          Contacts
        </h3>
        <div>
          <span class="material-icons">
            email
          </span>
          <div class="info-field">{{ user.email }}</div>
        </div>
        <div>
          <span class="material-icons">
            phone
          </span>
          <div class="info-field">{{ user.phone }}</div>
        </div>
        <div>
          <span class="material-icons" @click="goToUrl">
            home
          </span>
          <div class="info-field" @click="goToUrl">
            {{ user.website }}
          </div>
        </div>
      </div>
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
    // Checks if user id is valid
    isIdValid: function() {
      let valid = false;
      this.$store.state.users.forEach((user) => {
        if (user.id === this.$route.params.userId) {
          valid = true;
        }
      });
      if (!valid) this.$router.push('/404');
    },
    goToUrl: function() {
      window.location.href = 'https://www.' + this.user.website;
    },
  },
  mounted() {
    this.isIdValid();
    this.user = this.$store.state.users[this.$route.params.userId - 1];
    this.loaded = true;
  },
  watch: {
    // Watches if any changes made to route, if so, check id again
    $route: function() {
      this.isIdValid();
    },
  },
};
</script>

<style scoped>
/* Back button */
a {
  text-decoration: none;
}

.go-back {
  padding: 8px 0 0 0 !important;
  font-size: 0.8em;
}

.go-back div {
  display: flex;
  justify-content: left;
  align-items: center;
}

.go-back span {
  color: white;
  padding-right: 4px;
  align-items: center;
}

/* Header section */
.section-header > div {
  padding-bottom: 24px;
  margin-left: 52px;
}

.section-header {
  font-size: 1.2em;
  background-color: #0054a6;
  padding: 10px 0;
  color: white;
}

.info-company h4 {
  margin-bottom: 4px;
}

/* Address section */
.section-address > div {
  display: inline-block;
  width: 45%;
}

.section-address .info-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 52px;
  padding: 16px 8px;
}

.section-address .info-field label {
  font-weight: bold;
}

/* Contacts section */
.section-contacts > div {
  display: inline-block;
  width: 30%;
}

.section-contacts span {
  background-color: #f5f5f5;
  color: #0054a6;
  border-radius: 52px;
  padding: 8px;
}

.section-contacts div {
  padding: 8px 0;
}

/* Shared */
.section-address,
.section-contacts {
  margin-top: 52px;
}

.section-address h3,
.section-contacts h3 {
  margin-left: 52px;
}

/* Other */
#user-profile {
  width: 80%;
  margin: 20px auto;
  padding-bottom: 72px;
}

.info-field {
  border-bottom: 2px solid #0054a6;
  margin: 12px;
  padding: 16px 0;
}

.shadow {
  -webkit-box-shadow: 3px 3px 10px -1px #ccc;
  -moz-box-shadow: 3px 3px 10px -1px #ccc;
  box-shadow: 3px 3px 10px -1px #ccc;
}

@media only screen and (max-width: 860px) {
  .section-contacts > div {
    display: inline-block;
    width: 80%;
    margin: 16px 0;
    padding: 0;
  }

  .section-contacts .info-field {
    word-wrap: break-word;
  }

  #user-profile {
    padding-bottom: 16px;
  }

  .section-header > div {
    margin: 0 52px;
  }
}

@media only screen and (max-width: 780px) {
  .section-address > div {
    display: inline-block;
    width: 80%;
  }
  .section-address .info-field {
    margin: 0 auto;
  }
}
</style>
