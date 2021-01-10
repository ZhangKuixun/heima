<template>
  <el-container>
    <el-header>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="8"><img src="../../assets/lj.png" alt="" /> </el-col>
        <el-col :span="8"><h1>电商后台管理系统</h1></el-col>
        <el-col :span="8" class="col_r"
          >恭喜上海前端36期月薪2W
          <el-button type="text" @click="logout">退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧栏 -->
      <!--
        el-menu  菜单组件
          default-active="1"  默认选中，默认高亮(index:2)
          @open="handleOpen"  打开
          @close="handleClose"  关闭
          el-submenu  菜单子组件(可展开)
          el-menu-item  菜单元素(最小单位)
          el-menu-item-group  分组
          :router="true"  是否打开路由模式
       -->
      <el-aside width="200px">
        <el-menu
          :router="true"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!--用户管理  -->
          <el-submenu
            v-for="item in menus"
            :key="item.id"
            :index="item.id + ''"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              v-for="item1 in item.children"
              :key="item1.id"
              :index="item1.path"
              >{{ item1.authName }}</el-menu-item
            >
          </el-submenu>
          <!-- 权限管理 -->
          <!-- <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="roles">角色列表</el-menu-item>
            <el-menu-item index="rights">权限列表</el-menu-item>
          </el-submenu> -->
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 子组件的出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      menus: []
    };
  },
  created() {
    this.loadMenusData();
  },
  methods: {
    async logout() {
      try {
        let res = await this.$confirm("此操作将退出该账户, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        console.log(res);
        // 点击确定
        // 1. 清除token
        localStorage.removeItem("token");
        // 2. 提示
        this.$message({
          type: "success",
          message: "退出成功"
        });
        // 3.退出到登录页面
        this.$router.push("/login");
      } catch (error) {
        // 点击取消
        this.$message({
          type: "info",
          message: "取消退出"
        });
      }
    },
    // 导航-打开
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // 导航-关闭
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    async loadMenusData() {
      // let res = await this.$axios.get("menus");
      // console.log(res);
      let res = {
        data: {
          data: []
        }
      };
      res.data.data = [
        {
          authName: "用户管理",
          id: 125,
          order: 1,
          path: "users",
          children: [
            {
              authName: "用户列表",
              id: 110,
              order: null,
              path: "users"
            }
          ]
        },
        {
          authName: "权限管理",
          id: 103,
          order: 2,
          path: "rights",
          children: [
            {
              authName: "角色列表",
              id: 104,
              order: null,
              path: "roles"
            },
            {
              authName: "权限列表",
              id: 105,
              order: null,
              path: "rights"
            }
          ]
        },
        {
          authName: "商品管理",
          id: 106,
          order: 2,
          path: "categories",
          children: [
            {
              authName: "商品分类",
              id: 107,
              order: null,
              path: "categories"
            }
          ]
        }
      ];
      this.menus = res.data.data;
      console.log(this.menus);
    }
  }
};
</script>

<style lang="less">
/* 外部容器 */
.el-container {
  height: 100%;
  min-width: 800px;

  /* 头部 */
  .el-header {
    background: #b3c1cd;
    padding: 0;

    img {
      width: 20%;
      height: 3.75rem /* 60/16 */;
    }
    h1 {
      color: #ffffff;
      size: 26px;
    }

    .col_r {
      padding-right: 20px;
    }
    .col_r el-button {
      color: green;
    }
  }
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
