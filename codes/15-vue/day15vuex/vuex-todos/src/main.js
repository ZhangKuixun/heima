import Vue from 'vue'
import App from './App.vue'
import './assets/index.css'
import './assets/base.css'
import store from './store/store.js'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
