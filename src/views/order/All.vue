<template>
  <div>
    <!-- 面包屑导航 订单管理->所有订单 -->
    <bread-crumb></bread-crumb>
    <!-- ★第一个卡片 使用动态组件实现选项卡-->
    <el-card class="mt">
      <el-radio-group v-model="radio1">
        <el-radio-button label="待审核" @click.native="com='Demo1'"></el-radio-button>
        <el-radio-button label="审核中" @click.native="com='Demo2'"></el-radio-button>
        <el-radio-button label="审核通过" @click.native="com='Demo3'"></el-radio-button>
        <el-radio-button label="审核拒绝" @click.native="com='Demo4'"></el-radio-button>
        <el-radio-button label="已放款" @click.native="com='Demo5'"></el-radio-button>
      </el-radio-group>
      <keep-alive>
          <component :is="com"></component>
      </keep-alive>
      
    </el-card>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";
import Demo1 from "./Demo1.vue"
import Demo2 from "./Demo2.vue"
import Demo3 from "./Demo3.vue"
import Demo4 from "./Demo4.vue"
import Demo5 from "./Demo5.vue"

export default {
  components: { BreadCrumb,Demo1,Demo2,Demo3,Demo4,Demo5 },
  data(){
      return{
           radio1: '待审核',
           com:"Demo1"
      }
  }
};
</script>

<style lang="less" scoped>
</style>