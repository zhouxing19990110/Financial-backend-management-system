<template>
    <div>
        <!-- Layout 布局 -->
        <el-row type="flex" justify="center">
            <!-- Card 卡片 -->
            <el-card class="wrap">
                <!-- 头部 -->
                <div slot="header" class="clearfix">
                    <h1 class="title">周兴金融后台管理系统</h1>
                </div>
                <!-- 内容 Form 表单验证-->
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="ruleForm.username" ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="ruleForm.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100%" @click="handleClick()">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-row>
    </div>
</template>

<script>
import {post} from "../utils/http";
import {setToken} from "../utils/auth";

export default {

    data(){
        return{
            ruleForm:{
                username:"",
                password:""
            },
            rules:{
                username:[
                    {required:true,message:"用户名不能为空",trigger:"blur"},
                    {pattern:/^\w{4,8}$/,message:"用户名要求4到8位数字字母组合",trigger:"blur"}
                ],
                password:[
                    {required:true,message:"密码不能为空",trigger:"blur"}
                ]
            },
        }
    },
    methods:{
        // 触发表单验证功能
        handleClick(){
            this.$refs.ruleForm.validate((valid)=>{
                if(valid){
                    // 登录请求 模拟接口 mock
                    post("/login",this.ruleForm)
                    .then(res=>{
                        // 存token
                        console.log(res)
                        setToken(res.token)
                        // 存昵称
                        sessionStorage.setItem("nickname",res.nickname);
                        // 跳转
                        this.$router.push("/")
                    }).catch(err=>{
                        console.error(err)
                    })
                }
            })
        }
    }
};
</script>

<style lang="less" scoped>
    .title {text-align: center;}
    .wrap {width: 500px;margin-top: 200px;}
</style>

