import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app');
