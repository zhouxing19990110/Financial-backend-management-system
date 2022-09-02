<template>
  <!-- 中间的index主页面 -->
  <div>
    <!-- 第一行 4个div -->
    <el-row :gutter="24" style="margin-bottom: 20px">
      <el-col :span="6">
        <el-card shadow="always" class="in">
          <div style="float: left">
            <p>本月进件</p>
            <p style="font-weight: bold">6588</p>
            <p>
              +20.12%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="out">
          <div style="float: left">
            <p>本月放款（元）</p>
            <p style="font-weight: bold">121000000</p>
            <p>
              +1.25%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-money ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allin">
          <div style="float: left">
            <p>累计进件</p>
            <p style="font-weight: bold">128700</p>
            <p>
              +11.48%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-date ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allout">
          <div style="float: left">
            <p>累计放款</p>
            <p style="font-weight: bold">923380079</p>
            <p>
              -2.06%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 第二行 画图-->
    <el-row :gutter="12">
      <!-- 左边的图 -->
      <el-col :span="18">
        <el-card>
          <!-- 图表的标题需要使用一个插槽完成 -->
          <div slot="header" class="title">
            <span>进件统计分析</span>
          </div>
          <!-- echarts渲染图表，前提是容器必须有高度，ref中传入初始化echarts实例的id -->
          <div ref="analysis" style="height: 240px"></div>
        </el-card>
      </el-col>
      <!-- 右边的图 -->
      <el-col :span="6">
        <el-card>
          <div slot="header" class="title">
            <span>进件产品占比</span>
          </div>
          <div ref="percent" style="height: 240px"></div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 第三行 表格-->
    <el-row class="mt" :gutter="24">
      <el-col :span="12">
        <el-card class="log">
          <!-- 时间线代码 -->
          <el-timeline>
            <el-timeline-item timestamp="2020/07/01" placement="top">
              <el-card>
                <h4>审核订单</h4>
                <p>李红 操作于 08:54</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/07/01" placement="top">
              <el-card>
                <h4>新增贷款</h4>
                <p>王小虎 操作于 11:24</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>新增渠道</h4>
                <p>张浩 操作于 15:23</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-calendar></el-calendar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts"; // 在主页中引入echart
import { get } from "../../utils/http";

export default {
  data(){
    return{
        xData:[],
        yData:[],
    }
  },
  mounted() {
    // 调用画图
    this.drawLine(); 
    this.drawPie();
  },
  methods: {
    drawLine() {
      var myChart = echarts.init(this.$refs["analysis"]);
      // 直接在echarts中复制option配置项
      // ----------配置项开始-----------
      const option = {
        // x轴
        xAxis: {
          type: "category", // 坐标轴类型 类目轴
          boundaryGap: false,
          data: this.xData,
        },
        // y轴
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.yData,
            type: "line",
            smooth: true,  // 曲线平顺
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#4f88ff", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "white", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      };
      // ----------配置项结束-----------
      myChart.setOption(option);
    },
    drawPie() {
      var myChart = echarts.init(this.$refs["percent"]);
      // 直接在echarts中复制option配置项
      // ----------配置项开始-----------
      const option = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "24",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "房闪贷" },
              { value: 310, name: "新车贷" },
              { value: 234, name: "资金贷" },
              { value: 135, name: "合力贷" },
              { value: 1548, name: "其他" },
            ],
          },
        ],
      };
      // ----------配置项结束-----------
      myChart.setOption(option);
    },
  },
  created() {
    get("/echarts").then((res) => {
      this.xData = res.data[0];
      this.yData = res.data[1];
      var myChart = echarts.init(this.$refs["analysis"]);
      // 直接在echarts中复制option配置项
      // ----------配置项开始-----------
      const option = {
        // x轴
        xAxis: {
          type: "category", // 坐标轴类型 类目轴
          boundaryGap: false,
          data: this.xData,
        },
        // y轴
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.yData,
            type: "line",
            smooth: true,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#4f88ff", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "white", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      };
      // ----------配置项结束-----------
      myChart.setOption(option);
    })
      
  },
};

</script>

<style lang="less" scoped>
.ico {
  float: right;
  font-size: 90px;
  color: rgba(255, 255, 255, 0.3);
}
p {
  line-height: 30px;
  color: #fff;
  font-size: 16px;
}
.in {
  background: #4f88ff;
}
.out {
  background: #f26075;
}
.allin {
  background: #5050ff;
}
.allout {
  background: #f49b3b;
}
.log p {
  color: #000;
}
.title{
  text-align: center;
}
</style>
