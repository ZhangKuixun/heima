# 初始化项目

1. git clone https://github.com/tastejs/todomvc-app-template.git
2. 安装依赖包 npm i

# 删除不用的代码

# 配置vue
1. 安装vue: npm i vue
2. 引入vue <script src="./node_modules/vue/dist/vue.js"></script>
3. 实例化vue

# 列表展示
1. 数据 数组 =>list
2. 遍历 v-for='item in list' :key=item.id
3. 任务名称： {{item.name}}
4. 选中状态： <input v-model='item.done'>
5. 横线  :class='{{completed:item.done}}'

# 添加任务
- 拿到数据
1. 点击回车，keyCode=13，注册键盘事件，@keyup='addTodo'
2. 互相传递数据 v-model input<==>todoName
3. if(e.keyCode===13){按回车键了}
- 添加任务
1. 判断文本框不能为空
2. 处理id，数组最后一个元素的id+1
3. 添加任务，清空内容

# 按键修饰符
> 判断点击Enter键
> 1.@keyup='addTodo'=>if(e.keyCode==13){}
> 2.@keyup.13="addTodo" =>不需要判断
> 3.@keyup.enter="addTodo" =>不需要判断
```js
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
```

# 删除任务
1. 注册点击事件
2. 拿到id
3. 根据id删除任务
> 过滤出来列表的id不等于当前id
> this.list = this.list.filter(v => v.id != id)

# 编辑任务
1. 双击任务，显示编辑状态
- data里加一个editId:-1
- :class='{editing:item.id==editId}'
- 双击item=>给editId赋值, this.editId=id;
> vue中，data里的数据一旦发生变化，当前页面的指令和表达式都会重新计算
2. 编辑 v-model='item.name'
3. 回车隐藏编辑 this.editId=-1

# 底部的隐藏与显示
> 方式1：表达式 v-show='list.length>0'
> 代码多，写在xml里不方便
> 方式2：函数 v-show='isFooterShow1()'
> 与数组毫无关联的数据(data里的todoName)发生改变，会重新计算，性能不好
> 方式3：技算属性 computed（重要）

