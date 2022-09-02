<template>
  <div>
    <!-- 面包屑导航 全部产品-->
    <bread-crumb></bread-crumb>
    <!-- 第一个卡片 -->
    <el-card class="mt">
      <!-- 第一行 -->
      <el-row :gutter="16">
        <!-- 输入表单 -->
        <el-col :span="6">
          <el-input placeholder="产品名称" v-model="form.name"></el-input>
        </el-col>
        <!-- 下拉选择框 -->
        <el-col :span="6">
          <el-select placeholder="利率" v-model="form.rate" style="width:100%">
            <el-option value="3.8"></el-option>
            <el-option value="3.9"></el-option>
            <el-option value="4.0"></el-option>
            <el-option value="4.1"></el-option>
          </el-select>
        </el-col>
        <!-- 日期区间 -->
        <el-col :span="6">
          <el-date-picker
            v-model="form.value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-col>
        <!-- 2个按钮+下箭头 -->
        <el-col :span="6">
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="primary" class="mr">重置</el-button>
          <!-- 下箭头 -->
          <span
            class="el-dropdown-link"
            style="color: blue"
            v-show="!advanced"
            @click="expand"
            >展开<i class="el-icon-arrow-down el-icon--right"></i
          ></span>
          <!-- 上箭头 -->
          <span
            class="el-dropdown-link"
            style="color: blue"
            v-show="advanced"
            @click="expand"
            >收起<i class="el-icon-arrow-up el-icon--right"></i
          ></span>
        </el-col>
      </el-row>
      <!-- 第二行 默认为隐藏状态-->
      <el-row :gutter="16" class="mt" v-show="advanced">
        <el-col :span="6">
          <el-input placeholder="产品类别"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="最高分期数"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="状态"></el-input>
        </el-col>
      </el-row>
    </el-card>
    <!-- 第二个卡片-表格列 -->
    <el-card class="mt">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="序号"></el-table-column>
        <el-table-column prop="type" label="产品类别"></el-table-column>
        <el-table-column prop="rate" label="利率"></el-table-column>
        <el-table-column prop="date" label="开放日期"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.status == 1" effect="dark"
              >已启用</el-tag
            >
            <el-tag type="danger" v-else effect="dark">已禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="highest"
          label="最高分期数(月)"
        ></el-table-column>
        <el-table-column prop="number" label="申请客户数量"></el-table-column>
        <el-table-column prop="total" label="申请客户数量"></el-table-column>
        <el-table-column prop="average" label="件均"></el-table-column>
        <el-table-column prop="remark" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-if="scope.row.status == 2"
              type="primary"
              @click="handleEdit(scope.row)"
              >启用</el-button
            >
            <el-button size="mini" v-else type="danger">停用</el-button>
            <el-button size="mini" type="primary" @click="detail"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="10"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb.vue";
import moment from "moment";       //引入moment插件
import { get } from "@/utils/http";   // get请求mock接口数据

export default {
  components: { BreadCrumb },
  data() {
    return {
      form: {
        name: "",
        rate: "",
        value1: "",
      },
      advanced: false,
      tableData: [],
      total:[],
    };
  },
  created() {
    this.list();
  },
  methods: {
    expand() {
      this.advanced = !this.advanced;
    },
    search() {
      // 使用moment插件对日期进行格式化
      const start = moment(this.form.value1[0].format("YYYY-MM-DD"));
      console.log(start);
    },
    list() {
      get("/productList").then((res) => {
        this.tableData = res.data.list;
        this.total = res.data.total;
      });
    },
    detail() {
      this.$router.push("/product/detail");
    },
  },
};
</script>

<style lang="less" scoped>
</style>
