<template>
  <el-steps :active="activeIndex" finish-status="success">
    <el-step title="第一步" description="基本信息"></el-step>
    <el-step title="第二步" description="商品图片"></el-step>
    <el-step title="第三步" description="商品内容"></el-step>
  </el-steps>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      activeIndex: 1
    };
  }
};
</script>

<style></style>
