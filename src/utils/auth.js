// 封装一些方法，用来处理token

// 获取token
export function getToken(){
    return sessionStorage.getItem("token")
}

// 存取token
export function setToken(token){
    sessionStorage.setItem("token",token)
}

// 删除token
export function removeToken(){
    sessionStorage.removeItem("token")
}


