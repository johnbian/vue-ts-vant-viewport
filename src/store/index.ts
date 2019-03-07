import Vue from 'vue';
import Vuex from 'vuex';
import num from './modules/num';
import loading from './modules/loading';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    num,
    loading,
  },
});
