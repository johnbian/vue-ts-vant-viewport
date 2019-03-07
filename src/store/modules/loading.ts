/**
 * 加载状态
 */
const state = {
  isLoading: false,
};

const actions = {
  setIsLoadingAct({ commit }: any, bol: boolean) {
    commit('setIsLoading', bol);
  },
};

const mutations = {
  setIsLoading(states: any, bol: boolean) {
    states.isLoading = bol;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
