import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false // 初始未登录
  },
  mutations: {
    login(state) {
      state.isLogin = true
    },
    logout(state) {
      state.isLogin = false
    }
  },
  actions: {
    login({ commit }) {
      commit('login')
    },
    logout({ commit }) {
      commit('logout')
    }
  },
  getters: {
    isLoggedIn: state => state.isLogin
  }
})
