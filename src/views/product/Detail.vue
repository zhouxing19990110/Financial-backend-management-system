<template>
  <div>
    <!-- 面包屑导航 全部产品-->
    <bread-crumb></bread-crumb>
    <!-- 第一个卡片 -->
    <el-card class="card mt">
      <el-row :gutter="16">
        <el-col class="info" :span="12" style="text-align: left">
          <span>申请编号：YGC2017011000001</span>
          <span>推送时间：2020-05-20</span>
          <span>推送员：张三丰</span>
          <span>状态：待上线</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button type="primary" @click="back">返回</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 第二个卡片 -->
    <el-card class="card mt">
      <h1>产品信息</h1>
      <el-row class="product-detail" :gutter="16">
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <h1>费用明细</h1>
      <el-row class="product-detail" :gutter="16">
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <h1>资产明细</h1>
      <el-row class="product-detail" :gutter="16">
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
        <el-col :span="6">
          <p>标题：上海甲壳虫车借贷</p>
          <p>借款总金额：90000元</p>
          <p>是否定向标：是</p>
          <p>还款来源：月薪8000</p>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </el-card>
  </div>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb.vue";

export default {
  data() {
    return {};
  },
  components: { BreadCrumb },
  methods: {
    // 返回按钮的方法
    back() {
      this.$router.push("/product/all");
    },
  },
};
</script>

<style lang="less" scoped>
.info span {
  line-height: 40px;
  text-align: left;
  margin: 0 8px;
}
.product-detail p {
  line-height: 40px;
  text-align: left;
}
</style>