import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('access_token'),
    user: JSON.parse(localStorage.getItem('user'))
  },
  mutations: {
    user (state, user) {
      state.user = user
    },
    login (state, data) {
      state.accessToken = data.token
      state.user = data.user
    },
    logout (state) {
      state.accessToken = null
      state.user = null
    }
  }
})
