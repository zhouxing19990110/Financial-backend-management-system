import axios from "axios";
import { Message } from "element-ui";
import { getToken } from "./auth";

const service=axios.create({
    baseURL:"localhost:8081",
    timeout:5000,  // 请求超时5s
})

// 请求拦截器
service.interceptors.request.use(config=>{
    if(getToken()){
        config.headers.token=getToken()
    }
    return config
},error=>{
    Message({
        type:"error",
        message:"请求错误"
    })
    return Promise.reject(new Error(error))
})


// 响应拦截器 axios
service.interceptors.response.use((response)=>{
    const res=response.data;
    if(!res.success){
        Message({
            type:"error",
            message:res.message
        })
        return Promise.reject(new Error(res.message))
    }
    return res
},function(error){  // 物理错误
    Message({
        type:"error",
        message:"请求错误"
    })
    return Promise.reject(new Error(error))
})

export default service;

