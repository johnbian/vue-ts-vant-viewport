import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button } from 'vant';

Vue.component('Button', Button);

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
export default app;
