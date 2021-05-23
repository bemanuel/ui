import Vue from "vue";
import Buefy from "buefy";
import http from "./http";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import VueHighlightJS from 'vue-highlightjs';
import VueClipboard from 'vue-clipboard2';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Buefy, {
  defaultIconPack: 'fas'
});

Vue.use(VueHighlightJS);
Vue.use(VueClipboard);

VueClipboard.config.autoSetContainer = true;
Vue.config.productionTip = false;
Vue.prototype.$http = http;

const router = new VueRouter({
  routes: [
    { path: '/', component: App, alias: '/tuning' }
  ]
});

new Vue({
  render: h => h(App),
  router,
}).$mount("#app");

