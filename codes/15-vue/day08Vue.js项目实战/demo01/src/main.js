// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// main.js主要实例化vue
import Vue from 'vue'

// App.vue
import App from './App'

// 引入路由
// 引入的文件夹，文件夹里面一定有一个index
import router from './router'

// 显示发布的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 这里的el，占位置。template级别比el高
  el: '#app',
  // 路由规则
  router,
  // 组件
  components: { App },
  template: '<App/>'
})

/* eslint-disable*/
let obj = {}
