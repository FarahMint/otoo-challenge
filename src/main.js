

import Vue from 'vue';
import './plugins/fontawesome'
import App from './App.vue';


/** style plugin in  app entry point */
import BootstrapVue from 'bootstrap-vue';
/**  css files */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import './assets/style.css';

/** import router */
import router from "./router";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router ,
  render: h => h(App),
}).$mount('#app')
