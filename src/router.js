import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./components/Dashboard')
    },
    {
      path: '/view/:employee_id',
      name: 'ViewEmployee',
      component: () => import('./components/ViewEmployee')
    },
    {
      path: '/edit/:employee_id',
      name: 'EditEmployee',
      component: () => import('./components/EditEmployee')
    },
    {
      path: '/new',
      name: 'NewEmployee',
      component: () => import('./components/NewEmployee')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './components/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "about" */ './components/Register.vue')
    }
  ]
})
