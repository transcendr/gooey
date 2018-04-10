// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import firebase from 'firebase'
import SuiVue from 'semantic-ui-vue'
import Playground from '@/components/Playground'
import Sketch from '@/components/Sketch'
import TopSidebar from '@/components/sidebar/TopSidebar'

Vue.config.productionTip = false

// Initialize Firebase
let app
var config = {
  apiKey: 'AIzaSyDTeqFYooWJsIh5_RfLC2z6NkLDVzvxzEw',
  authDomain: 'p5-gooey.firebaseapp.com',
  databaseURL: 'https://p5-gooey.firebaseio.com',
  projectId: 'p5-gooey',
  storageBucket: '',
  messagingSenderId: '807447317524'
}
firebase.initializeApp(config)

Vue.use(SuiVue)
Vue.component('playground', Playground)
Vue.component('sketch', Sketch)
Vue.component('top-sidebar', TopSidebar)

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: {
        App
      }
    })
  }
})
