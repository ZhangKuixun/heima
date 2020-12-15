<template>
  <el-container>
    <el-header>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="8"><img src="../../assets/logo.png" alt="" /> </el-col>
        <el-col :span="8"><h1>电商后台管理系统</h1></el-col>
        <el-col :span="8" class="col_r"
          >恭喜上海前端36期月薪2W <a href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script></script>

<style>
/* 外部容器 */
.el-container {
  height: 100%;
  min-width: 800px;
}

/* 头部 */
.el-header {
  background: #b3c1cd;
  padding: 0;
}
.el-header img {
  width: 20%;
  height: 100%;
}
.el-header h1 {
  color: #ffffff;
  size: 26px;
}
.col_r {
  padding-right: 20px;
}
.col_r a {
  color: green;
}

/* 侧栏 */
.el-aside {
  background: #545c64;
}

/* 主体 */
.el-main {
  background: #eeeeee;
}
</style>
