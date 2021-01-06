/* eslint-disable */
export default {
  data () {
    return {
      // 用户列表
      userData: [
        {
          id: "001",
          name: "王小虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除",
          mg_state: true
        },
        {
          id: "002",
          name: "王小虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除",
          mg_state: true
        },
        {
          id: "003",
          name: "王小虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除",
          mg_state: false
        },
        {
          id: "004",
          name: "王虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除",
          mg_state: false
        },
        {
          id: "005",
          name: "王虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除",
          mg_state: false
        },
        {
          id: "006",
          name: "王虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除",
          mg_state: false
        },
        {
          id: "007",
          name: "王虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除",
          mg_state: false
        },
        {
          id: "008",
          name: "王虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除",
          mg_state: false
        }
      ],
      // 总个数
      total: 0,
      currentPage: 1,
      pageSize: 10,
      // 搜索值
      queryText: "",
      // 搜索选择
      select: "",
      // 用户状态
      // state: true,
      // 第一个对话框 - 是否显示添加用户对话框
      dialogAddUserFormVisible: false,
      // 添加表单对象
      addUserForm: {
        name: '',
        password: '',
        email: '',
        phoneNumber: ''
      },
      // 第二个对话框 - 是否显示编辑用户对话框
      dialogEditUserFormVisible: false,
      // 添加表单对象
      editUserForm: {
        id: '',
        name: '',
        email: '',
        phoneNumber: ''
      },
      // 第三个对话框 - 分配角色
      dialogAssignRolesFormVisible: false,
      assignRoleForm: {
        username: '',
        id: '',
        rid: '',
      },
      // 角色列表
      rolesData: [{ id: 1, roleName: "主管" }, { id: 2, roleName: "讲师" }, { id: 3, roleName: "助教" }, { id: 4, roleName: "学生" }, { id: 5, roleName: "班主任" }],
      rules: {
        // 用户名
        name: [
          // 判断是否输入
          // required: true 必填项，前面加星号
          // trigger: 'blur' 触发方式，bulur失去焦点
          { required: true, message: "请输入用户名", trigger: "blur" },
          // 判断输入格式是否正确
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码错误", trigger: "blur" },
          // 判断输入格式是否正确
          { min: 5, max: 14, message: "长度在 5 到 14 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "邮箱错误", trigger: "blur" },
          { pattern: /^\w+@\w+\.[a-z]+$/, message: '格式不正确', trigger: 'blur' }
        ],
        phoneNumber: [
          { required: true, message: "手机号错误", trigger: "blur" },
          { pattern: /^13[0-9]|147|15[0-9]|17[0178]|18[0-9]\d{8}$/, message: '格式不正确', trigger: 'blur' }
        ]
      },
    };
  },
  created () {
    this.loadUsersData();
    this.loadRolesData();
  },
  methods: {
    // 点击一页显示多少条
    clickPageSize (val) {
      console.log("一页显示", val, "条数据");
      this.pageSize = val;
      this.loadUsersData();
    },
    // 点击页码
    clickCurrentPage (val) {
      console.log("切换到第", val, "页");
      this.currentPage = val;
      this.loadUsersData();
    },
    preClick (val) {
      console.log(val);
      --this.currentPage;
      this.loadUsersData();
    },
    nextClick (val) {
      console.log(val);
      ++this.currentPage;
      this.loadUsersData();
    },
    async loadUsersData () {

      const url = "user";
      const config = {
        // `headers` 是即将被发送的自定义请求头
        headers: { Authorization: localStorage.getItem("token") },
        params: {
          query: this.queryText,
          pagenum: this.currentPage,
          pagesize: this.pageSize
        }
      }
      let res = await this.$axios.get(url, config);
      console.log(res);
      if (res && res.data && res.data.data && res.data.data.users) {
        // 保存列表数据
        this.userData = res.data.data.users;
        // 保存总页数
        this.total = res.data.total;
        // 保存当前页码
        this.currentPage = res.data.data.currentPage;
      }

      // this.$axios
      //   .get("user", {
      //     // `headers` 是即将被发送的自定义请求头
      //     headers: { Authorization: localStorage.getItem("token") },
      //     params: {
      //       query: this.queryText,
      //       pagenum: this.currentPage,
      //       pagesize: this.pageSize
      //     }
      //   })
      //   .then(res => {
      //     if (res && res.data && res.data.data && res.data.data.users) {
      //       // 保存列表数据
      //       this.userData = res.data.data.users;
      //       // 保存总页数
      //       this.total = res.data.total;
      //       // 保存当前页码
      //       this.currentPage = res.data.data.currentPage;
      //     }
      //   });

      // 没有网络，测试数据
      setTimeout(() => {
        // console.log("获取数据");
        this.total = 8;
        this.currentPage = this.pageSize + 1;
      }, 100);
    },
    // 开始查询
    startQuery () {
      this.dialogAddUserFormVisible = true;
      this.currentPage = 1;
      this.loadUsersData();
    },
    // 添加用户
    async addUser () {
      // let res = await this.$axios.post('user', this.addUserForm, {
      //   headers: { Authorization: localStorage.getItem("token") },
      // })
      // if (res.data.meta.status === 201) {
      //   // 1.关闭对话框
      //   this.dialogAddUserFormVisible = false;
      //   // 2.重新刷新页面
      //   this.loadUsersData()
      //   // 3.添加用户成功提示
      //   this.$message({
      //     message: "添加成功",
      //     type: "success",
      //     duration: 800
      //   })
      //   // 4.重置表单
      //   this.$refs.addUserForm.resetFields();
      // }

      this.dialogAddUserFormVisible = false;
    },
    // 对话框关闭
    dialogCosed () {
      this.$refs.addUserForm.resetFields();
    },
    // 显示删除对话框
    async showDeleteUserDialog (id) {
      try {
        this.dialogDeleteUserVisible = true;
        await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        });
        let res = await this.$axios.delete(`users/${id}`, {
          headers: { Authorization: localStorage.getItem("token") }
        });
        if (res.data.meta.staus === 200) {
          // 刷新页面
          this.loadUsersData();
          this.$message({
            message: '删除成功',
            type: 'success',
            duration: 800
          })
        }
      } catch (error) {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      }
    },
    // 用户状态改变
    async stateChange (row) {
      let res = await this.$axios.put(`user/${row.id}/state/${row.mg_state}`, null, {
        headers: { Authorization: localStorage.getItem("token") }
      });
      if (res.data.meta.staus === 200) {
        // 刷新页面
        this.loadUsersData();
      }
    },
    // 显示编辑对话框
    showEditUserDialog (row) {
      console.log(row);
      const { id, name, email, phoneNumber } = row;
      this.id = id;
      this.editUserForm.name = name;
      this.editUserForm.email = email;
      this.editUserForm.phoneNumber = phoneNumber;

      this.dialogEditUserFormVisible = true;
    },
    // 编辑用户
    async editUser () {
      // 1.从编辑用户对象里读取需要的数据
      // const { id, email, phoneNumber, name } = this.editUserForm;
      // let res = await this.$axios.put(`user/${id}`, {
      //   name, email, phoneNumber
      // });
      // if (res.data.meta.staus === 200) {
      //   this.dialogEditUserFormVisible = false;
      //   this.loadUsersData();
      //   this.$message({
      //     message: '更新成功',
      //     type: 'success',
      //     duration: 800
      //   })
      // }

      this.dialogEditUserFormVisible = false;
    },
    // 显示分配角色
    async showAssignRoleDialog (row) {
      this.dialogAssignRolesFormVisible = true;
      let { id, username } = row;
      // let res = await this.$axios.get(`users/${id}`);
      // if (res.data.meta.staus === 200) {
      //   this.assignRoleForm.id = id;
      //   this.assignRoleForm.username = username;
      this.assignRoleForm.rid = res.data.data.rid == -1 ? "" : res.data.data.rid;
      // }

      this.assignRoleForm.id = 1;
      this.assignRoleForm.username = 'linken';
      this.assignRoleForm.rid = "主管";
    },
    // 获取所有的角色列表
    async loadRolesData () {
      let res = await this.$axios.get("");
      if (res.data.meta.staus === 200) {
        this.rolesData = res.data.data;
      }
    },
    // 分配角色
    async assignRole () {
      let { id, rid } = this.assignRoleForm
      let res = await this.$axios.put(`users/${id}/role`, {
        rid
      })
      if (res.data.meta.staus === 200) {
        // 关闭对话框
        this.dialogAssignRolesFormVisible = false
        // 提示
        this.$message({
          message: '分配角色',
          type: 'success',
          duration: 800
        })
        // 刷新
        this.loadUsersData()
      }
    }
  }
};
