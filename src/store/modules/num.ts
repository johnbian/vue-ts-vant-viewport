/**
 * 请求数量的加减 用来控制loading
 */
const state = {
  num: 0,
};

const actions = {
  add(context: any) {
    context.commit('add');
  },

  del(context: any) {
    context.commit('del');
  },
};

const mutations = {
  add(states: any) {
    states.num ++;
  },

  del(states: any) {
    states.num --;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
