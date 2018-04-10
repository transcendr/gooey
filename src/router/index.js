import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Gooey from '@/components/Gooey'
import Playground from '@/components/Playground'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Gooey',
      component: Gooey,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Login, // todo: create proper logout component
      meta: {
        isLoggingOut: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let isLoggingOut = to.matched.some(record => record.meta.isLoggingOut)
  if (isLoggingOut && currentUser) {
    this.$store.state.user = currentUser

    firebase.auth().signOut().then(() => {
      next('login')
    })
  } else {
    if (requiresAuth && !currentUser) {
      next('login')
    } else if (!requiresAuth && currentUser) {
      next('/')
    } else {
      next()
    }
  }
})

export default router
