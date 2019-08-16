import Vue from 'vue';
import App from './App.vue';

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

/** import router */
import router from "./router";

Vue.config.productionTip = false

new Vue({
  router ,
  render: h => h(App),
}).$mount('#app')
