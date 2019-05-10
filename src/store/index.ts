import Vue from 'vue';
import Vuex from 'vuex';
import num from './modules/num';
import user from './modules/user';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    num,
    user,
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    reducer(val) {
      return {
        user: val.user,
      };
    },
  })],
});
