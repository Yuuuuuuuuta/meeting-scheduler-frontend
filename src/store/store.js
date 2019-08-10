import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navbarToggle: false
  },
  mutations: {
    navbarToggle (state) {
      state.navbarToggle = !state.navbarToggle
    },
    initializeToggle (state) {
      state.navbarToggle = null
    }
  },
  actions: {
    navbarToggle (context) {
      context.commit('navbarToggle')
    },
    initializeToggle (context) {
      context.commit('initializeToggle')
    }
  }
});
