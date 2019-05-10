import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        keepAlive: true,
        isBack: false,
        index: 1,
      },
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        keepAlive: true,
        isBack: false,
        index: 2,
      },
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
