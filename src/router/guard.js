import router from "./index"
import {getToken} from "../utils/auth"

// 导航守卫，确保登录后无法返回首页
router.beforeEach((to,from,next)=>{
    const hasToken=getToken();
    if(hasToken){
        if(to.path=="/login"){
            next("/")
        }else{
            next()
        }
    }else{
        if(to.path=="/login"){
            next()
        }else{
            next("/login")
        }
    }
})