import Vue from 'vue';
import Vuex from 'vuex';
import { setUserCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 左侧菜单栏开关按钮
    user: getUserCookie(), // 用户登录信息
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      this.state.user = userInfo;
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setUserCookie(userInfo);// 存储用户登录信息
    },
    logout({ commit }) {
      commit('logout');
      removeUserCookie();// 移除用户登录信息
    },
  },
});
