<template>
  <el-table :data="catData" style="width: 100%">
    <el-table-column label="分类名称" prop="cat_name"> </el-table-column>
    <el-table-column label="是否有效">
      <template slot-scope="scope"
        >{{ scope.row.cat_deleted ? "是" : "否" }}
      </template>
    </el-table-column>
    <el-table-column label="层级">
      <template slot-scope="scope">
        <span v-if="scope.row.cat_level == 1">一级</span>
        <span v-else-if="scope.row.cat_level == 2">二级</span>
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
      catData: []
    };
  },
  created() {
    this.loadCatData();
  },
  methods: {
    async loadCatData() {
      // let res = await this.$axios.get("categories", {
      //   params: { query: "", pagenum: 1, pagesize: 4 }
      // });
      this.catData = [
        {
          id: "12987122",
          cat_name: "王小虎",
          cat_deleted: true,
          cat_level: 1
        }
      ];
    }
  }
};
</script>

<style></style>
