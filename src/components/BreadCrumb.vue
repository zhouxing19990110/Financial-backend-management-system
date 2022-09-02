<template>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name:"BreadCrumb",
        data(){
            return{
                breadList: []
            }
        },
        created(){
            this.breadList=this.$route.meta.bread
        }
    }
</script>

<style lang="less" scoped>

</style>
