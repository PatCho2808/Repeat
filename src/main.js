import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from "bootstrap-vue";

import VueGAPI from "vue-gapi";

const apiConfig={
  apiKey: 'AIzaSyBtfqXyBe7HNJsSEXiqftyOAKjJzVKw_xU',
  clientId: '101415508643-guaf9htphcpid2rmbaq07e6abbd3583v.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  scope: 'https://www.googleapis.com/auth/calendar.events'
}

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueGAPI, apiConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
