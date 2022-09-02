<template>
  <div>
    <h1 class="title">杨飞金融后台管理系统</h1>
    <!-- el-menu中的router属性 是vue-router模式，以index为path进行路由跳转 -->
    <el-menu
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      
    >
    <!--★★自定义组件menus 对后端返回的数据 进行循环 -->
    <menus v-for="(item,index) in menuData" :key="index" :menu="item"></menus>
    </el-menu>
  </div>
</template>

<script>
import menus from "./Menu.vue";  // 因为menu是关键字，所以要加s
import { get } from "@/utils/http";

export default {
  data() {
    return {
      // 在data中定义一个空数组，用来存储通过get请求获取来的数据
      menuData: []
    }
  },
  // 通过get请求，获取mock接口中的数据
  mounted() {
    get("/menu").then((res) => {
      this.menuData = res.data;
    })
  },
  // 注册组件
  components:{
    menus
  }
};
</script>

<style lang="less" scoped>
.title{color: #fff;text-align: center;line-height: 50px;margin-top: 10px;}
</style>



