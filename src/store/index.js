import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import userStore from './userStore'

Vue.use(Vuex)

// state.user is set in router/index.js with the beforeEach hook
const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {},
  actions: {},
  getters: {
    ...userStore.getters
  }
})

export default store
