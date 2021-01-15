<template>
  <div>
    <el-button type="success" @click="go2GoodsAdd">添加商品</el-button>
    <el-table :data="goodsData" stripe style="width: 100%" width="180">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="goods_name" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="goods_price" label="商品价值" width="180">
      </el-table-column>
      <el-table-column prop="goods_number" label="商品数量" width="180">
      </el-table-column>
      <el-table-column prop="add_time" label="创建时间">
        <template slot-scope="scope">
          <span>{{ scope.row.add_time | detaFileter }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
/* eslint-disable */
import moment from "moment";
export default {
  data() {
    return {
      goodsData: [
        {
          goods_name: "tv",
          goods_price: "1000",
          goods_number: "10",
          add_time: "30"
        }
      ]
    };
  },
  created() {
    htis.loadGoodsData();
  },
  methods: {
    // 加载商品
    async loadGoodsData() {
      let res = await this.$axios.get("goods", {
        params: {
          query: "",
          pagenum: 1,
          pagesize: 4
        }
      });
      this.goodsData = this.data.data;
    },
    // 添加商品
    go2GoodsAdd() {
      this.$router.push("/goods-add");
    }
  },
  filters: {
    detaFileter(res) {
      return moment(res).format("YYYY-MM-DD");
    }
  }
};
</script>

<style></style>
