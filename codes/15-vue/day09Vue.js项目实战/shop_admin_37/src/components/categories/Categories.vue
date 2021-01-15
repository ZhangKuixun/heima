<template>
  <div>
    <el-button type="success" plain @click="showAddCatDialog"
      >添加分类</el-button
    >
    <el-table :data="catData" style="width: 100%">
      <!--       file-icon="icon icon-file"
      folder-icon="icon icon-folder" -->
      <el-table-tree-column
        treeKey="cat_id"
        parentKey="cat_pid"
        levelKey="cat_level"
        :indentSize="20"
        prop="cat_name"
        label="分类名称"
        width="220"
      ></el-table-tree-column>
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

    <!-- 添加商品分类对话框 -->
    <el-dialog title="添加分类" :visible.sync="dialogAddCatFormVisible">
      <el-form :model="addCatForm" label-width="80px">
        <el-form-item label="分类名称">
          <el-input v-model="addCatForm.cat_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="父级名称">
          <!-- 级联选择器 -->
          <el-cascader
            :options="options"
            clearable
            v-model="addCatForm.cat_pid_arr"
            :props="defaultProps"
          ></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddCatFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogAddCatFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from "vue";
// 引入
import ElTreeGrid from "element-tree-grid";
Vue.component(ElTreeGrid.name, ElTreeGrid);

export default {
  data() {
    return {
      catData: [],
      dialogAddCatFormVisible: false,
      addCatForm: {
        cat_name: "",
        cat_pid_arr: []
      },
      options: [
        {
          value: "zhinan", // 收集数据的id值
          label: "指南", // 显示
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则"
            },
            {
              value: "daohang",
              label: "导航"
            }
          ],
          // 选择器的配置对象
          defaultProps: {
            value: "cat_id",
            label: "cat_name",
            children: ""
          }
        }
      ]
    };
  },
  created() {
    this.loadCatData();
  },
  methods: {
    // 获取全部数据
    async loadCatData() {
      // let res = await this.$axios.get("categories", {
      //   params: { query: "", pagenum: 1, pagesize: 4 }
      // });
      this.catData = [
        {
          cat_deleted: false,
          cat_id: 1,
          cat_pid: 1,
          cat_level: 1,
          cat_name: "大家电",
          children: [
            {
              cat_deleted: false,
              cat_id: 1,
              cat_pid: 1,
              cat_level: 2,
              cat_name: "空调"
            }
          ]
        },
        {
          cat_deleted: false,
          cat_id: 3,
          cat_pid: 3,
          cat_level: 1,
          cat_name: "推荐",
          children: [
            {
              cat_deleted: false,
              cat_id: 3,
              cat_pid: 3,
              cat_level: 2,
              cat_name: "电视"
            }
          ]
        }
      ];
    },
    // 获取添加分类的数据
    async loadCatData2() {
      // let res = await this.$axios.get("categories", {
      //   params: { query: "", pagenum: 1, pagesize: 4 }
      // });
      // this.options=res.data.data;
    },
    // 弹出添加对话框
    showAddCatDialog() {
      this.dialogAddCatFormVisible = true;
    },
    // 把添加的数据提交到服务器
    async addCatData() {
      // const { cat_name, cat_pid_arr } = this.addCatForm;
      // let res = await this.$axios.get("categories", {
      //   params: {
      //     cat_pid: cat_pid_arr[cat_pid_arr.length - 1],
      //     cat_name,
      //     cat_level: cat_pid_arr.length
      //   }
      // });
      this.dialogAddCatFormVisible = false;
    }
  }
};
</script>

<style></style>
