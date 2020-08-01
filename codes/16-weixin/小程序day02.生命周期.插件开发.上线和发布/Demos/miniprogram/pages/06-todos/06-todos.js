// pages/06-todos/06-todos.js
Page({
  data: {
    list: [{
        id: 1,
        name: "吃饭"
      },
      {
        id: 2,
        name: "睡觉"
      },
      {
        id: 3,
        name: "做运动"
      }
    ],
    // 任务名称，把总任务绑定到input输入框
    todoName: '吃肉'
  },

  // input值发生了改变
  valueChange(e) {
    console.log('改变了:', e);
    this.setData({
      todoName: e.detail.value
    })
  },

  // 添加任务
  addTodo() {
    // console.log('添加任务', this.todoName);
    // 1 获取数据
    let{ todoName,list} = this.data;

    // 5 处理input不填值
    if (todoName.trim().length == 0) return;

    // 3 id
    const id = list.length == 0 ? 1 : list[list.length-1].id + 1;

    // 2 添加任务
    list.push({
      id,
      name: todoName
    })

    // 4 更新视图
    this.setData({
      list,
      // 清空todoName
      todoName:''
    })
  },

  // 删除任务
  delTodo(e) {
    // console.log(e.currentTarget.dataset.id)
    // 1 保存id
    let id = e.currentTarget.dataset.id;

    // 2 获取data里的数据
    let{list}=this.data;

    // 3 删除点击的id，把当前id的item从list过滤出去，得到一个list
    list = list.filter(item => item.id != id);
    
    // 4 更新视图
    this.setData({
      list
    })
  }
})