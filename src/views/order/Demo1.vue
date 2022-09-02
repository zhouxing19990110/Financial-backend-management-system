<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item index="1" @click.native="com='Demo1_1'">汽车消费</el-menu-item>
      <el-menu-item index="2" @click.native="com='Demo1_2'">房产消费</el-menu-item>
      <el-menu-item index="3" @click.native="com='Demo1_3'">抵押贷款</el-menu-item>
      <el-menu-item index="4" @click.native="com='Demo1_4'">其他</el-menu-item>
    </el-menu>
    <component :is="com"></component>
  </div>
</template>

<script>
import Demo1_1 from "./Demo1_1.vue";
import Demo1_2 from "./Demo1_2.vue";
import Demo1_3 from "./Demo1_3.vue";
import Demo1_4 from "./Demo1_4.vue";
export default {
  components:{Demo1_1,Demo1_2,Demo1_3,Demo1_4},
    data(){
        return{
            com:"Demo1_1"
        }
    }
};
</script>

<style lang="less" scoped>
</style>