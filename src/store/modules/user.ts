/**
 * user信息
 */
const state = {
  userInfo: {
    token: '',
    userId: '',
  },
};

const actions = {
  setUserInfo({ commit }: any, userInfo: any) {
    commit('setUserInfo', userInfo);
  },
};

const mutations = {
  setUserInfo(states: any, userInfo: any) {
    states.userInfo = userInfo;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
