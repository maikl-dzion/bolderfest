import Vue from 'vue'

import App    from './App.vue';
import router from './router';
import store  from './store';
import Plugins from './plugins';
Vue.use(Plugins);

import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import './assets/css/style.css'

const EventGlobalBus = new Vue();
Vue.config.productionTip = false;

// var apiUrl  = 'http://bolderfest.ru/USER_REST_APPLICATIONS/api.php';

new Vue({
  data  : {
    // apiUrl  : 'http://bolderfest.ru/USER_REST_APPLICATIONS/api.php',
    EventGlobalBus,
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
