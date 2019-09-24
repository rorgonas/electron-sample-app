import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/theme',
      name: 'theme',
      component: () => import(/* webpackChunkName: "about" */ './views/Theme.vue')
    },
    {
      path: '/image',
      name: 'image',
      component: () => import(/* webpackChunkName: "about" */ './views/Image.vue')
    },
    {
      path: '/sign-in',
      name: 'login',
      component: () => import('./views/LogIn.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('./views/Join.vue')
    }
  ]
})
