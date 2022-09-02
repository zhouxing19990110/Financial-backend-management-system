// 路由相关配置项
export default [
  // 一级路由：主页面 
  {  
    path: "/",
    name: "Layout",
    redirect: "/index", // 路由重定向 为什么加？如果不加路由重定向，登录成功后，子路由并不会直接渲染，因为只定位到一级路由，二级路由没写。
    component: () => import("../views/Layout"),
    // 二级子路由
    children: [
      // 首页
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/index/Index.vue")
      },
      // 账户管理->所有人员
      {
        path: "/account/all",
        name: "account_all",
        // 面包屑导航 路由配置项的meta，可以携带任意数据，在meta中规定一个bread字段  为什么写成数组？ 答：对数组进行循环，可以得到每个item
        meta: { bread: ["账户管理", "所有人员"] },
        component: () => import("../views/account/All.vue")
      },
      // 产品管理->全部产品
      // keepAlive字段，是用来确定哪一个路由是需要缓存的
      {
        path: "/product/all",
        name: "product_all",
        meta: { bread: ["产品管理", "全部产品"], keepAlive: true },
        component: () => import("../views/product/All.vue")
      },
      // 产品管理->全部产品->产品详情
      {
        path: "/product/detail",
        name: "product_detail",
        meta: { bread: ["产品管理", "全部产品", "产品详情"] },
        component: () => import("../views/product/Detail.vue")
      },
      // 订单管理->所有订单
      {
        path: "/order/all",
        name: "order_all",
        meta: { bread: ["订单管理", "所有订单"]},
        component: () => import("../views/order/All.vue")
      },
      // 账户管理->基本信息
      {
        path: "/customer/info",
        name: "customer_info",
        meta: { bread: ["账户管理", "基本信息"]},
        component: () => import("../views/customer/Info.vue")
      },
      // 个人中心
      {
        path:"/my",
        name:"My",
        component: () => import("../views/my/My.vue")
      }
    ]
  },
  // 一级路由：登录页面
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login")
  }
]

