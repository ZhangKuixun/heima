<template>
  <div>
    <!--
      el-table  表格组件
      el-table-column  列
      行数 => 数据中的元素个数决定的
      prop  标签数据
      label  标签名称
    -->
    <el-table :data="userData" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"> </el-table-column>
      <el-table-column prop="phoneNumber" label="电话"> </el-table-column>
      <el-table-column label="用户状态"> </el-table-column>
      <el-table-column label="操作"> </el-table-column>
    </el-table>
    <!--
      分页部分
        layout="prev, pager, next"  组件布局，各个组件用逗号隔开
        total  总个数
        :page-sizes  每页显示两个
     -->
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page="pagenum"
      :page-sizes="2"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      // 用户列表
      userData: [
        {
          name: "王小虎",
          email: "qwe@163.com",
          phoneNumber: "110",
          userState: "登录",
          set: "删除"
        }
      ],
      // 总个数
      total: 0,
      pagenum: 1,
      pagesize: 2
    };
  },
  created() {
    axios
      .get("http://localhost:8888/api/private/v1/user", {
        // `headers` 是即将被发送的自定义请求头
        headers: { token: localStorage.getItem("token") },
        params: {
          pagenum: 1,
          pagesize: 2
        }
      })
      .then(res => {
        if (res && res.data && res.data.data && res.data.data.users) {
          // 保存列表数据
          this.userData = res.data.data.users;
          // 保存总页数
          this.total = res.data.total;
          // 保存当前页码
          this.pagenum = res.data.data.pagenum;
        }
      });
  },
  methods: {
    loaduserData(res) {}
  }
};
</script>

<style></style>
