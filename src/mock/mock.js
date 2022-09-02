// mock模拟接口 保存在开发依赖，上线后使用真接口
import Mock from "mockjs";
// Moack.mock("接口地址","请求方式","处理函数")

// 登录接口
Mock.mock("localhost:8081/login","post",(req)=>{
    // req是接收到前端的参数信息
    const {username,password}=JSON.parse(req.body)  //req.body是一个JSON格式字符串，我们要把它转换成对象
    // 数据库查询（后端操作）
    if(username=="user" && password=="123456"){
        return{
            code:200,
            success:true,
            message:"登录成功",
            nickname:"杨飞",
            token:"3arc9h0vhcr0f8iprpnscmfo8s",
        }
    }else{
        return{
            code:100,
            success:false,
            message:"登录失败，账号或密码有误"
        }
    }
})

// ★菜单接口的数据
const menuList = [
    {
        name: "首页",
        icon: "el-icon-s-home",
        url: "/index",
    },
    {
        name: "账户管理",
        icon: "el-icon-coin",
        url: "/account",
        children: [
            {
                name: "所有人员",
                icon: "el-icon-user",
                url: "/account/all",
            },
            {
                name: "业务人员",
                icon: "el-icon-phone-outline",
                url: "/account/business",
            },
            {
                name: "审核人员",
                icon: "el-icon-s-check",
                url: "/account/audit",
            },
            {
                name: "风控经理",
                icon: "el-icon-s-finance",
                url: "/account/risk",
            },
            {
                name: "管理员",
                icon: "el-icon-s-custom",
                url: "/account/admin",
            }
        ]
    },
    {
        name: "产品管理",
        icon: "el-icon-menu",
        url: "/product",
        children: [
            {
                name: "全部产品",
                icon: "el-icon-notebook-2",
                url: "/product/all",
            },
            {
                name: "汽车消费",
                icon: "el-icon-truck",
                url: "/product/carConsumption",
            },
            {
                name: "房产消费",
                icon: "el-icon-office-building",
                url: "/product/estate",
            },
            {
                name: "抵押贷款",
                icon: "el-icon-money",
                url: "/product/mortgage",
            },
        ]
    },
    {
        name: "订单管理",
        icon: "el-icon-s-order",
        url: "/order",
        children: [
            {
                name: "所有订单",
                icon: "el-icon-tickets",
                url: "/order/all",
            },
            {
                name: "新建订单",
                icon: "el-icon-document",
                url: "/order/create",
            },
        ]
    },
    {
        name: "客户管理",
        icon: "el-icon-user",
        url: "/customer",
        children: [
            {
                name: "基本信息",
                icon: "el-icon-chat-square",
                url: "/customer/info",
            },
            {
                name: "资金记录",
                icon: "el-icon-bank-card",
                url: "/record",
            },
        ]
    },
    {
        name: "待办事项",
        icon: "el-icon-chat-dot-square",
        url: "/todo",
    },
    {
        name: "个人中心",
        icon: "el-icon-user",
        url: "/my",
    }
]

// 菜单接口
Mock.mock("localhost:8081/menu","get",()=>{
    return{
        code:200,
        success:true,
        message:"成功",
        data:menuList
    }
})


// 入职时间接口
Mock.mock('localhost:8081/in', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "操作成功",
        time: "2020-09-08 00:00:00"
    }
})

// echarts数据接口
Mock.mock("localhost:8081/echarts",'get',()=>{
    return{
        code:200,
        success:true,
        message: "获取数据成功",
        data:[["20-01", "20-02", "20-03", "20-04", "20-05", "20-06", "20-07"],[30, 84, 56, 47, 84, 61, 90]]
    }
})

//所有人员
Mock.mock('localhost:8081/all', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            // 数组随机生成20-40条数据
            "list|20-40": [{
                // account在这区间随机取1位
                'account|100000-999999': 1,
                // 自增
                'id|+1': 1,
                // 随机生成人名
                'name': "@cname",
                // 从数组中随机取1位
                'character|1': ["业务人员", "审核人员", "风控经理", "管理员"],
                // 生成5-20个字符的一句话
                'remark|5-20': '@cword',
                'reason|1': ["需要进系统录入进件补充资料", "对进件进行风险审核", "对放款进行风险审核"],
                'status|1': [1, 2],
               
            }],
            // 分页数据的总条数
            "total|1":[10,20,30,40,50]
        })
    }
})

//产品管理--全部产品   
Mock.mock('localhost:8081/productList', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|8-20": [{
                'id|+1': 10000,
                'type|1': ["汽车消费","房产消费","抵押贷款"],
                'name|1':["巴贝拉贷款","麦穗金融","日借款","爱猫借贷","樱花分期","小熊金融","借乐花","星星钱袋"],
                'limit|1': [100,200,300],
                'rate|1':[4.1,4.3,3.8,3.9,5,3] ,
                'number':Mock.Random.integer(30,200),   // 区间内随机生成一个整数
                'total': Mock.Random.integer(10000000,500000000),
                'average': Mock.Random.integer(10000000,250000000),
                'status|1':[1,2],
                'highest|1':[36,60,24,360],
                'date':Mock.Random.date()   // 随机生成日期
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})

