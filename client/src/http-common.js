import axios from 'axios'
import Auth from './services/AuthService'

const HTTP = axios.create({
  baseURL: process.env.API_BASE_URL
})

HTTP.interceptors.request.use(function (config) {
  const token = Auth.getAccessToken()
  if (token != null) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

// HTTP.defaults.headers.common['Authorization'] = 'Bearer ' + Auth.getAccessToken()
HTTP.defaults.headers.common['Content-Type'] = 'application/json'

export {HTTP}
