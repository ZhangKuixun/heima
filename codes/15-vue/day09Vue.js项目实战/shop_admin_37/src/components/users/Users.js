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
      dialogAddUserFormVisible: true,
      // 添加表单对象
      addUserForm: {
        userName: '',
        password: '',
        email: '',
        phoneNumber: ''
      },
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
      this.currentPage = 1;
      this.loadUsersData();
    }
  }
};
