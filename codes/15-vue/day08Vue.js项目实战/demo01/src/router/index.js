import Vue from 'vue'
import Router from 'vue-router'

// @符号相当于src目录
import HelloWorld from '@/components/HelloWorld'

// Vue把router当组件安装一下
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
