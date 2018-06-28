import {HTTP} from '../http-common'
import router from '../router'
import store from '../store'
const ACCESS_TOKEN = 'access_token'
const USER = 'user'

function setAccessToken (token) {
  localStorage.setItem(ACCESS_TOKEN, token)
}

function getAccessToken () {
  return localStorage.getItem(ACCESS_TOKEN)
}

function clearAccessToken () {
  localStorage.removeItem(ACCESS_TOKEN)
}

function setUser (user) {
  localStorage.setItem(USER, JSON.stringify(user))
}

function getUser () {
  return JSON.parse(localStorage.getItem(USER))
}

function clearUser () {
  localStorage.removeItem(USER)
}

class AuthService {
  static login (email, password) {
    HTTP.post('/auth/login', {
      email: email, password: password
    }).then(response => {
      setAccessToken(response.data.token)
      setUser(response.data.user)
      store.commit('login', response.data)
      router.push('/')
    }).catch(err => {
      console.log(err)
      clearAccessToken()
      clearUser()
    })
  }

  static me () {
    HTTP.get('/auth/me').then(response => {
      console.log(response)
      setUser(response.data.user)
      store.commit('user', response.data.user)
    }).catch(err => {
      console.log(err)
      clearAccessToken()
      clearUser()
    })
  }

  static logout () {
    clearAccessToken()
    clearUser()
    store.commit('logout')
    router.push('/')
  }

  static isLoggedIn () {
    let accessToken = getAccessToken()
    return !!accessToken
  }

  static getAccessToken () {
    return getAccessToken()
  }

  static getUser () {
    return getUser()
  }
}

export default AuthService
