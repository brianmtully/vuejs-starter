<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div v-if="user"> {{ user.firstname }} {{ user.lastname}}</div>
    <button v-if="!isLoggedIn" @click="login">Login</button>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
    <router-view/>
  </div>
</template>

<script>
import Auth from './services/AuthService'
export default {
  name: 'App',
  created: function () {
    if (Auth.isLoggedIn()) {
      Auth.me()
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.accessToken
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    login: async function () {
      try {
        await Auth.login('tullyb@co.rockland.ny.us', 'Rockland1')
      } catch (error) {
        console.log(error)
      }
    },
    logout: function () {
      Auth.logout()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
