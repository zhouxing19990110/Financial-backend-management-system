<template>
<!-- 头部组件 -->
  <div>
    <!-- 下拉菜单 -->
    <div class="head">
        <el-dropdown @command="select">
            <span class="el-dropdown-link">
            欢迎您，{{info}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">个人中心</el-dropdown-item>
                <el-dropdown-item command="b">修改密码</el-dropdown-item>
                <!-- 需要给退出登录绑定退出的事件 -->
                <el-dropdown-item command="c">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
    <!-- 入职日期,第x天需要调用mock接口 -->
    <p class="date">
        今天是你在宁大的第<span class="tips">{{days}}</span>天
    </p>
    <!-- 清除浮动 -->
    <div class="clear"></div>
  </div>
</template>

<script>
import {get} from "@/utils/http";  // 引入get请求来取mock接口数据

export default {
    data(){
        return{
            // 用来存取到的时间
            time:"",
            // 欢迎您的姓名，存在本地存储里
            info:sessionStorage.getItem("nickname")
        }
    },
    // 调用mock接口（使用自己封装的get请求），返回入职时间
    created(){
        get("/in").then(res=>{
            this.time=res.time
        })
    },
    computed:{
        // 后端返回的是日期格式的字符串，我们需要通过计算属性，自己计算出入职时间
        days(){
            let target=new Date(this.time)
            let now=new Date()
            return Math.floor((now-target)/1000/60/60/24)
        }
    },
    methods:{
        // 退出登录的事件，command是点击菜单项触发的事件回调
        select(command){
            if(command=="c"){
                sessionStorage.clear()  // 清除本地存储，不然存在token时，不能跳转
                this.$router.push("/login")
            }
            if(command=="a"){
                this.$router.push("/my")
            }
        }
    }
};
</script>

<style lang="less" scoped>
.head{
    float: right;
}
.date{
    float:right;
    margin-right: 50px;
}
// 入职天数的样式
.tips{
    font-size: 24px;
    color: #40a9ff;
}
</style>
