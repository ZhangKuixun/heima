/* eslint-disable */
export default {
  data () {
    return {
      rolesData: [
        {
          id: 1,
          roleName: "主管",
          roleDesc: "技术负责人",
          children: [
            {
              id: 2,
              authName: "商品管理",
              path: null,
              children: [
                {
                  id: 3,
                  authName: "商品列表",
                  path: null,
                  children: [
                    {
                      id: 105,
                      authName: "添加商品",
                      path: null
                    },
                    {
                      id: 112,
                      authName: "商品修改",
                      path: null
                    },
                    {
                      id: 113,
                      authName: "商品删除",
                      path: null
                    },
                    {
                      id: 114,
                      authName: "更新商品图片",
                      path: null
                    },
                    {
                      id: 115,
                      authName: "更新商品状态",
                      path: null
                    },
                    {
                      id: 116,
                      authName: "获取商品详情",
                      path: null
                    }
                  ]
                },
                {
                  id: 4,
                  authName: "参数分类",
                  path: null,
                  children: [
                    {
                      id: 5,
                      authName: "获取参数列表",
                      path: null
                    },
                    {
                      id: 6,
                      authName: "创建商品参数",
                      path: null
                    },
                    {
                      id: 7,
                      authName: "删除商品参数",
                      path: null
                    }
                  ]
                },
                {
                  id: 8,
                  authName: "商品分类",
                  path: null,
                  children: [
                    {
                      id: 9,
                      authName: "添加分类",
                      path: null
                    },
                    {
                      id: 10,
                      authName: "删除分类",
                      path: null
                    },
                    {
                      id: 11,
                      authName: "获取分类详情",
                      path: null
                    }
                  ]
                },
              ]
            },
            {
              id: 12,
              authName: "订单管理",
              path: null,
              children: [
                {
                  id: 13,
                  authName: "订单列表",
                  path: null,
                  children: [
                    {
                      id: 14,
                      authName: "添加订单",
                      path: null
                    },
                    {
                      id: 15,
                      authName: "订单更新",
                      path: null
                    },
                    {
                      id: 16,
                      authName: "获取订单详情",
                      path: null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      // 分配权限对话框
      dialogAssignRightsVisible: false,
      // 分配权限
      treeData: [{
        id: 1,
        authName: '商品管理',
        children: [{
          id: 2,
          authName: '商品列表',
          children: [{
            id: 3,
            authName: '添加商品'
          }, {
            id: 4,
            authName: '商品修改'
          }, {
            id: 5,
            authName: '商品删除'
          }, {
            id: 6,
            authName: '更新商品图片'
          }, {
            id: 7,
            authName: '更新商品状态'
          }, {
            id: 8,
            authName: '获取商品详情'
          }]
        }, {
          id: 9,
          authName: '参数分类',
          children: [{
            id: 10,
            authName: '获取参数列表'
          }, {
            id: 11,
            authName: '创建商品参数'
          }, {
            id: 12,
            authName: '删除商品参数'
          }]
        }, {
          id: 13,
          authName: '商品分类',
          children: [{
            id: 14,
            authName: '添加分类'
          }, {
            id: 15,
            authName: '删除分类'
          }, {
            id: 16,
            authName: '获取分类详情'
          }]
        }]
      },
      {
        id: 17,
        authName: '订单管理',
        children: [{
          id: 18,
          authName: '订单列表',
          children: [{
            id: 19,
            authName: '添加订单'
          }, {
            id: 20,
            authName: '订单更新'
          }, {
            id: 21,
            authName: '获取订单详情'
          }]
        }]
      }, {
        id: 22,
        authName: '数据统计',
        children: [{
          id: 23,
          authName: '数据报表'
        }, {
          id: 24,
          authName: '查看数据'
        }]
      }],
      defaultProps: {
        // children  负责显示结构
        children: 'children',
        // label  负责显示名字
        label: 'authName'
      }
    };
  },
  created () { },
  methods: {
    // 加载角色列表
    async loadRolesData () {
      let res = await this.$axios.get("roles");
      if (res.data.meta.status === 200) {
        this.rolesData = res.data.data;
      }
    },
    // 处理索引
    indexMethod (index) {
      return index;
    },
    // 获取所有的权限信息
    async loadAllRightsData () {
      let res = await this.$axios.get('rights/tree');
      if (res.data.meta.status === 200) {
        this.treeData = res.data.data;
      }
    },
    // 显示权限对话框
    showAssignRightsDialog (row) {
      // 1.窗口显示
      this.dialogAssignRightsVisible = true;

      // 2.获取第三层的id
      let keys = [];
      row.children.forEach(item1 => {
        item1.children.forEach(item2 => {
          item2.children.forEach(item3 => {
            keys.push(item3.id)
          })
        })
      });
      console.log(keys);
      // 3.设置keys
      this.$nextTick(() => {
        // 打印的值是空的，异步原因，DOM更新，打印早了，等DOM更新完成，再获取
        // console.log(this.$refs);
        this.$refs.tree.setCheckedKeys(keys);
      })
    }
  }
};
