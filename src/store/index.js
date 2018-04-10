import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

// state.user is set in Login.vue / doAuth method
const store = new Vuex.Store({
  state: {
    user: {}
  }
})

export default store
