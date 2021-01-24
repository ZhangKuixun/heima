import Vue from 'vue'
import App from './App.vue'
import './assets/index.css'
import './assets/base.css'
import store from './store/store.js'

Vue.config.productionTip = false

Vue.directive('focus', {
  // inserted 指令绑定的元素插入到父元素（用户能看见）
  inserted (el) {
    el.focus();
  },
  // 数据改变之后 editId - 1 => 2
  componentUpdated (el, binding) {
    if (binding.value) {
      el.focus();
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

// 演示跨域
import axios from 'axios'

// 出现跨域的问题：'Access-Control-Allow-Origin'
// axios.get("https://douban.uieee.com/v2/movie/in_theaters").then(res => {

// 解决：在 vue.config.js 配置
axios.get("/myapi/v2/movie/in_theaters").then(res => {
  console.log(res);
})