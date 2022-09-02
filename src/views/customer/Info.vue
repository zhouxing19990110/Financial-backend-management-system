<template>
  <div>
    <bread-crumb></bread-crumb>
    <!-- 第一个卡片 -->
    <el-card class="mt">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-input v-model="input" placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="6">
          <el-select
            v-model="value"
            placeholder="请选择学历"
            style="width: 100%"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input v-model="input1" placeholder="请输入手机号"></el-input>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 第二个卡片 -->
    <el-card class="mt">
      <el-button type="primary">新增客户</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50px" label="序号"></el-table-column>
        <el-table-column prop="number"  width="100px" label="客户编号" ></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="phone" label="手机号码"></el-table-column>
        <el-table-column prop="id" label="身份证号"></el-table-column>
        <el-table-column prop="education" label="学历"></el-table-column>
        <el-table-column prop="address" label="住址"></el-table-column>
        <el-table-column prop="marry" label="婚姻状况"></el-table-column>
        <el-table-column label="操作">
          <template >
            <!-- scope.row可以拿到当前行的数据，还要在上面的template组件中写slot-scope="scope" -->
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
            <el-button size="mini">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb.vue";
export default {
  components: { BreadCrumb },
  data() {
    return {
      input: "",
      input1: "",
      options: [
        {
          value: "选项1",
          label: "初中",
        },
        {
          value: "选项2",
          label: "高中",
        },
        {
          value: "选项3",
          label: "本科",
        },
        {
          value: "选项4",
          label: "研究生",
        },
      ],
      value: "",
      tableData: [
        {
          number: "1001",
          name: "赵铁柱",
          phone: "13071988950",
          id:"20131283912371212",
          education:"初中",
          address:"山东省青岛市",
          marry:"已婚"
        },
        {
          number: "1002",
          name: "詹姆斯",
          phone: "13071988950",
          id:"20131283912371212",
          education:"高中",
          address:"山东省青岛市",
          marry:"已婚"
        },
        {
          number: "1003",
          name: "张大彪",
          phone: "13071988950",
          id:"20131283912371212",
          education:"初中",
          address:"山东省青岛市",
          marry:"未婚"
        },
        {
          number: "1004",
          name: "王老六",
          phone: "13071988950",
          id:"20131283912371212",
          education:"本科",
          address:"山东省青岛市",
          marry:"未婚"
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>