<template>
  <div>
    <!-- ★如果有子集 -->
    <el-submenu v-if="menu.children" :index="menu.url" style="width:220px">
      <!-- 插槽 -->
      <template slot="title">
        <!-- 图标+内容 -->
        <i :class="menu.icon"></i> 
        <span>{{ menu.name }}</span>
      </template>
      <!-- !!菜单递归，组件自己的名字不用注册，直接调用自己 -->
      <nav-menu v-for="(item,index) in menu.children" :menu="item" :key="index"></nav-menu>
    </el-submenu>
    <!-- ★没有子集 -->
    <el-menu-item v-else :index="menu.url" style="width:220px">
      <i :class="menu.icon"></i>
       <span slot="title">{{menu.name}}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name:"NavMenu",  // name属性，能够让组件完成递归，自己调用自己
  props: ["menu"]  // 父组Navleft件把每个菜单项传给子组件
};
</script>

<style lang="less" scoped>
</style>