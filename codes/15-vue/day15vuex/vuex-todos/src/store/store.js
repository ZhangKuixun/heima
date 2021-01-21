// 引入vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 实例化仓库
const store = new Vuex.Store({
  // 严格模式
  strict: true,
  // 状态
  state: {
    list: [
      { id: 1, name: '吃饭', done: true },
      { id: 2, name: '睡觉', done: true },
      { id: 3, name: '打死春春', done: true }
    ]
  }
});


// 导出仓库
export default store;