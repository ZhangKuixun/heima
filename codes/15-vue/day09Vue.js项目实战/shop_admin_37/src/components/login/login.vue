<template>
  <!--
  el-form表单组件：
    - :model="ruleForm" 表单数据和表单绑定的数据对象（ruleForm对象）
    - :rules="rules" 表单验证规则
    - ref="ruleForm" 可以通过$refs获取当前这个组件
    - label-width="80px" 是el-form-item标签的宽度

  el-form-item：表单元素组件
    - label 标签名称
    - prop="name" 校验/重置用的
 -->
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="8">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <!--
          按钮类型：
            primary 蓝色
            success 绿色
            danger 红色
          -->
          <el-button type="danger" @click="startLogin()">登录</el-button>
          <el-button type="danger" @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      ruleForm: {
        userName: "",
        password: ""
      },
      // 校验规则
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
          { required: true, message: "请输入错误", trigger: "blur" },
          // 判断输入格式是否正确
          { min: 5, max: 14, message: "长度在 5 到 14 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 登录
    startLogin() {
      // 校验：
      this.$refs.ruleForm.validate(valid => {
        axios
          .post("http://localhost:8888/api/private/v1/login", this.ruleForm)
          .then(res => {
            console.log(res);
            if (res.data.meta.status === 200) {
              this.$message({
                message: res.data.meta.msg,
                type: "success",
                duration: 800
              });
              this.$router.push("/home");
            } else {
              this.$message({
                message: res.data.meta.msg,
                type: "error",
                duration: 800
              });
            }
          });
      });
    },
    resetForm() {
      // resetFields 重置到初始值
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>

<style scoped>
.el-row {
  height: 100%;
  background: #2d434c;
}

.el-col {
  background: #ffffff;
  padding: 20px 30px;
  border-radius: 10px;
}
</style>
