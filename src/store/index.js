import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

// state.user is set in router/index.js with the beforeEach hook
const store = new Vuex.Store({
  state: {
    user: {}
  }
})

export default store
