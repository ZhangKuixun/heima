// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入子组件
import login from '../components/login/login.vue'
import home from '../components/home/home.vue'

// 在模块化工厂中实例化
Vue.use(VueRouter)

// 实例化
const router = new VueRouter({
  // 2.规则
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: login },
    { path: '/home', name: 'home', component: home }
  ]
})

// 导出
export default router
