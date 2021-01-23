# 初始化项目

1. 安装: `npm install -g @vue/cli`
2. 创建项目: `vue create vuex-todos`
3. 运行: `npm run serve`

# 把 todos 模板拿过来

1. 拷贝模板中 <section>
2. 拷贝 node_modules > base.css/index.css
3. 再 main.js 中引入 css

# 组件化改造

1. 创建 todoHeader.vue，把头部标签代码拷贝进去
2. 引入组件
3. 注册组件使用组件

# 配置 vuex

1. 安装：`npm i vuex`
2. 创建文件 store.js
   > router/router.js
   > store/store.js

- 引入
- 实例化 store
- 导出

3. 挂载到 vue 实例上
4. 准备数据

# 列表展示

1. v-for 遍历
2. 处理名称
3. 处理选中状态
4. 处理横线

# 添加任务

# 抽离 state 和 mutations

# 删除任务

# 修改任务

1. 显示编辑状态
2. 编辑任务
3. 隐藏编辑状态

# 底部显示影藏

> 1. 使用 getters 类似 vue 的计算属性
> 2. 使用: <footer class="footer" v-show="$store.getters.isFooterShow">

# 清除完成

# actions

> mutations 不能放异步操作
> 异步操作放在 acitons
>
> 1. actions 里面可以放任意异步操作

```js
   // 抽离actions，可以异步操作数据
   const actions = {
   asyncDelTodo() {
      setTimeout(() => {
         console.log("我是异步的");
      }, 0);
   },
   };

   // 删除
   delTodo(id) {
      // dispatch 去 actions 里面找，是异步方法
      this.$store.dispatch("asyncDelTodo", {
         id,
      });
   }
```

> 2. actions 不能直接修改状态，提交 mutations

```js
// 抽离actions，可以异步操作数据
const actions = {
  // 参数1: context 类似 store
  // 参数2: 传递的数据
  asyncDelTodo(context, payload) {
    setTimeout(() => {
      context.commit("delTodo", payload);
    }, 0);
  },
};
```

# 辅助函数

### 辅助函数 1. mapGetters

> 简化 getters 的写法，将 store 里面的 getters 计算属性，映射到当前组件内

```js
<template>
  <footer v-show="isFooterShow">
    <span><strong>{{ itemLeftCount }}</strong> item left</span>
    <button v-show="isClearCompletedShow">Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // 将 vuex 的 store 里面的几个 getters 属性，映射到组件内的计算属性
    // 使用：把数组里面的item当成当前组件的计算属性用了
    ...mapGetters(["isFooterShow", "itemLeftCount", "isClearCompletedShow"]),
  },
};
</script>
```

### 辅助函数 2. mapMutations

> 简化 mutaions 写法

1. 引入
2. 映射
3. 使用

```js
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    // 将 store 的 mutations 里的 delTodo 映射到当前的方法
    // mapMutations 里的 delTodo 和 methods 里的 delTodo 有冲突
    ...mapMutations(["delTodo"]),
    // 解决：给映射的方法起一个别名
    ...mapMutations({
      del_todo: "delTodo",
    }),
    // 删除
    delTodo(id) {
      // 使用
      // this.delTodo({ id });
      this.del_todo({ id });
    },
  },
};
</script>
```

### 辅助函数 3. mapActions

> 简化 actions 的写法
> 将 store 的 actions 里的方法，映射到当前组件内的方法

1. 引入
2. 映射
3. 使用

```js
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  methods: {
    delTodo(id) {
      // dispatch 去 actions 里面找，是异步方法
      // this.$store.dispatch("asyncDelTodo", {
      //   id,
      // });
      this.asyncDelTodo({ id });
    },
  },
};
</script>
```

# 反向代理
