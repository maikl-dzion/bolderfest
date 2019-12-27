import Vue    from 'vue'
import Router from 'vue-router'
import Main   from './pages/Main.vue'
import Users  from './pages/Users.vue'
import Auth   from './pages/Auth.vue'

Vue.use(Router)

var routes = [
  
  {
    path: '/', 
    name: 'main',
    component: Main
  },

  {
    path: '/auth', 
    name: 'auth',
    component: Auth
  },

  {
    path: '/users', 
    name: 'users',
    component: Users
  },

  // { path: '/about', name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ './pages/About.vue')
  // }

];


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
