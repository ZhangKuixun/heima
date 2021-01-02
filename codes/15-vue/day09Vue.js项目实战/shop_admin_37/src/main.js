// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'

// 引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入自定义的全局css
import './assets/css/common.css'

// 处理axios的三个问题
import axios from 'axios'
// 问题1
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 问题2
Vue.prototype.$axios = axios// 其他每个组件内用'this.$axios'替换'axios'
// 问题3
axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = localStorage.getItem('token')
  },
  function (error) {
    return Promise.reject(error)
  }
)
// token过期问题
axios.interceptors.response.use(
  function (response) {
    // 方式1
    if (response.data.meta.status === 100010) {
      this.$router.push('/login')
    }
    // 方式2
    if (response.data.data.token) {
      localStorage.setItem('token', response.data.data.token)
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
