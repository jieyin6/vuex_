import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import createStore from './store/store'
Vue.config.productionTip = false
Vue.use(Vuex)
const store = createStore()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
