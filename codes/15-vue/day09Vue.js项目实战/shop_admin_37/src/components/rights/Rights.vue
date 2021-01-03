<template>
  <el-table :data="rigthsData" style="width: 100%">
    <el-table-column type="index" width="50" :index="indexMethod">
    </el-table-column>
    <el-table-column prop="authName" label="权限名称" width="180">
    </el-table-column>
    <el-table-column prop="path" label="路径" width="180"> </el-table-column>
    <el-table-column label="等级">
      <template slot-scope="scope">
        <span v-if="scope.row.level == 0">一级</span>
        <span v-else-if="scope.row.level == 1">二级</span>
        <span v-else>三级</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      rigthsData: [
        {
          authName: "商品管理",
          path: "goods",
          level: "0"
        },
        {
          authName: "商品管理",
          path: "王小虎",
          level: "1"
        }
      ]
    };
  },
  created() {
    // 请求权限数据
    this.loadRightsData();
  },
  methods: {
    // 请求权限数据
    async loadRightsData() {
      let res = await this.$axios.get("rights/list");
      if (res.data.meta.status === 200) {
        this.rigthsData = res.data.data;
      }
    },
    // 处理索引
    // 形参：形参的值是从0开始的下标
    indexMethod(index) {
      return index;
    }
  }
};
</script>

<style></style>
