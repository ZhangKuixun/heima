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
              id: 101,
              authName: "商品管理",
              path: null,
              children: [
                {
                  id: 104,
                  authName: "商品列表",
                  path: null,
                  children: [
                    {
                      id: 105,
                      authName: "添加商品",
                      path: null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
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
    }
  }
};
