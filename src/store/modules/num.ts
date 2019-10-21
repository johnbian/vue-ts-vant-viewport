/**
 * 请求数量的加减 用来控制loading
 */
const state = {
  num: 0,
  excludePage: [],
};

const actions = {
  add(context: any) {
    context.commit('add');
  },

  del(context: any) {
    context.commit('del');
  },

  setExcludePageAct({ commit }: any, excludePage: any) {
    commit('setExcludePage', excludePage);
  },
};

const mutations = {
  add(states: any) {
    states.num ++;
  },

  del(states: any) {
    states.num --;
  },

  setExcludePage(states: any, excludePage: any) {
    states.excludePage = excludePage;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
