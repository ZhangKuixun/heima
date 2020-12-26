// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入子组件
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
import Users from '../components/users/Users.vue'
import Roles from '../components/roles/Roles.vue'
import Rights from '../components/rights/Rights.vue'

// 在模块化工厂中实例化
Vue.use(VueRouter)

// 实例化
const router = new VueRouter({
  // 2.规则
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: '/users', name: 'users', component: Users },
        { path: '/roles', name: 'roles', component: Roles },
        { path: '/rights', name: 'rights', component: Rights }
      ]
    }
  ]
})

// // 前置导航守卫
// router.beforeEach((to, from, next) => {
//   // 1.判断是否是登录页
//   if (to.path === '/login') { // 登录页面
//     next()
//   } else { // 非登录页面
//     // 2.判断是否登录过
//     const token = localStorage.getItem('token')
//     token ? next() : next('/login')
//   }
// })

// 导出
export default router
