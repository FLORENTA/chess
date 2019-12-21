import Vue from "vue";
import './plugins/axios';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Should be used when launching server from vue-cli container to communicate with nginx container
axios.defaults.baseURL = 'http://172.20.0.1:8888';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
