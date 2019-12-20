import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/Main.vue'

Vue.use(Router)

var routes = [
  
  {
    path: '/', 
    name: 'main',
    component: Main
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
