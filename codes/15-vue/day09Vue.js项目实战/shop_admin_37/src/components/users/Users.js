/* eslint-disable */
import axios from "axios";

export default {
  data () {
    return {
      // 用户列表
      userData: [
        {
          name: "王小虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除"
        },
        {
          name: "王小虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除"
        },
        {
          name: "王小虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除"
        },
        {
          name: "王虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除"
        },
        {
          name: "王虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除"
        },
        {
          name: "王虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除"
        },
        {
          name: "王虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除"
        },
        {
          name: "王虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除"
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
      state: true,
      // 是否显示添加用户对话框
      dialogAddUserFormVisible: false,
      // 添加表单对象
      addUserForm: {
        userName: '',
        password: '',
        email: '',
        phoneNumber: ''
      },
      rules: {
        // 用户名
        userName: [
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
      }
    };
  },
  created () {
    this.loadUsersData();
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

      const url = "http://localhost:8888/api/private/v1/user";
      const config = {
        // `headers` 是即将被发送的自定义请求头
        headers: { Authorization: localStorage.getItem("token") },
        params: {
          query: this.queryText,
          pagenum: this.currentPage,
          pagesize: this.pageSize
        }
      }
      let res = await axios.get(url, config);
      console.log(res);
      if (res && res.data && res.data.data && res.data.data.users) {
        // 保存列表数据
        this.userData = res.data.data.users;
        // 保存总页数
        this.total = res.data.total;
        // 保存当前页码
        this.currentPage = res.data.data.currentPage;
      }

      // axios
      //   .get("http://localhost:8888/api/private/v1/user", {
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
      let res = await axios.post('http://localhost:8888/api/private/v1/user', this.addUserForm, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      if (res.data.meta.status === 201) {
        // 1.关闭对话框
        this.dialogAddUserFormVisible = false;
        // 2.重新刷新页面
        this.loadUsersData()
        // 3.添加用户成功提示
        this.$message({
          message: "添加成功",
          type: "success",
          duration: 800
        })
        // 4.重置表单
        this.$refs.addUserForm.resetFields();
      }
    }
  }
};
