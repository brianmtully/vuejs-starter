import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Auth from '../services/AuthService'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {requiresAuth: false}
    }
  ]

})

router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requiresAuth
  })) {
    if (!Auth.isLoggedIn()) {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
