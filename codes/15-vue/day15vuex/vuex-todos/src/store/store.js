// 引入vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 抽离state
const state = {
  list: [
    { id: 1, name: '吃饭', done: true },
    { id: 2, name: '睡觉', done: false },
    { id: 3, name: '打死春春', done: false }
  ]
};

// 抽离mutations，不可以异步操作数据
const mutations = {
  // 添加任务
  addTodo (state, payload) {

    const id = state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1;

    // 添加
    state.list.push({
      id: id,
      name: payload.name,
      done: false
    })
  },
  // 删除任务
  delTodo (state, payload) {
    state.list = state.list.filter(item => item.id != payload.id)
  },
  // 修改状态
  changeState (state, payload) {
    // 1.根据id查找当前任务
    let todo = state.list.find(item => item.id == payload.id)
    // 2.状态取反
    todo.done = !todo.done
  },
  // 修改任务名称
  updateTodo (state, payload) {
    // 1.根据id找到对应的任务
    let todo = state.list.find(item => item.id == payload.id);
    // 2.修改任务
    todo.name = payload.name;
  },
  // 删除已完成
  clearCompleted (state) {
    state.list = state.list.filter(item => !item.done)
  },
}

// 抽离actions，可以异步操作数据
const actions = {
  // 参数1: context 类似 store
  // 参数2: 传递的数据
  asyncDelTodo (context, payload) {
    setTimeout(() => {
      context.commit('delTodo', payload);
    }, 0);
  }
}

// 抽离getters，计算属性
const getters = {
  // 底部的显示与影藏
  isFooterShow (state) {
    return state.list.length > 0
  },
  // 剩余未完成个数
  itemLeftCount (state) {
    return state.list.filter(item => !item.done).length
  },
  // clearCompleted 的显示与影藏
  isClearCompletedShow () {
    return state.list.some(item => item.done)
  },
}

// 实例化仓库
const store = new Vuex.Store({
  // 严格模式
  strict: true,
  // 状态
  state,
  mutations,
  getters,
  actions,
});

// 导出仓库
export default store;