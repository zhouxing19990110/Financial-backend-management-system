<template>
  <div>

    <el-container>
      <!-- 侧边栏导航 -->
      <el-aside width="220px">
        <nav-left></nav-left>
      </el-aside>
      <el-container>
        <!-- 头部导航 -->
        <el-header>
          <headers></headers>
        </el-header>
        <!-- 中间的index主页面，通过router-view引入 -->
        <el-main>
          <!-- 如果路由有keepAlive字段，就使用keep-alive缓存 -->
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>  
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
import NavLeft from '../components/NavLeft.vue';  // 引入左侧边栏组件
import Headers from "../components/Headers.vue";  // 引入头部组件

export default {
  // 引入组件后还要注册组件
  components: {
    NavLeft,
    Headers
  },
};
</script>

<style lang="less" scoped>
// 头部的样式
.el-header {
  background-color: #ffff;
  color: #333;
  line-height: 60px;
}

// 侧边栏的样式
.el-aside {
  background-color: #001529;
  color: #333;
  height: 100vh;   // 侧边栏高度100%
}

// 二级主页面的样式
.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 80vh;
}
</style>