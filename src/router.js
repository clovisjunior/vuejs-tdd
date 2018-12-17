import Vue from 'vue'
import Router from 'vue-router'
import UserView from '@/views/UserView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: UserView
    }
  ]
})
