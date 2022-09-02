<template>
  <div>
    <!-- 使用封装组件完成面包屑导航 -->
    <bread-crumb></bread-crumb>
    <!-- 第一个卡片 搜索框+4个按钮-->
    <el-card class="mt">
      <el-row>
        <!-- 左边的输入框 -->
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <!-- 右边4个按钮 -->
        <el-col :span="8" :offset="8">
          <el-button type="primary" @click="add">新建角色</el-button>
          <el-button :disabled="!selection.length" @click="operate">启用</el-button>
          <el-button :disabled="!selection.length">冻结</el-button>
          <el-button :disabled="!selection.length">删除</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 第二个卡片 人员表格 -->
    <!-- ★table中的selection-change事件，是指该行发生变化时，就触发该事件 -->
    <el-card class="mt">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelect"
      >
        <!-- label为列名 prop为列的内容 不加width属性，就默认为响应式-->
        <!-- 该行的复选框 -->
        <el-table-column type="selection"></el-table-column>
        <!-- 该行的序号 -->
        <el-table-column type="index" width="50px" label="序号"></el-table-column>
        <el-table-column prop="account" label="账户" width="100px"></el-table-column>
        <el-table-column prop="name" label="用户名" width="80px"></el-table-column>
        <el-table-column prop="character" label="角色"> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
        <el-table-column prop="reason" label="创建原因"> </el-table-column>
        <!-- 后端返回的状态是1和0的数字，但是我们需要将其转换成1:已启用，0:未启用 -->
        <el-table-column prop="status" label="状态" width="80px">
          <!-- 作用域插槽，如果table-column中存在template，那么该列中的内容就会变成template中的内容-->
          <template slot-scope="scope">
            <!-- 拿到当前行的状态，并判断状态是否为1 -->
            {{ scope.row.status == 1 ? "已启用" : "未启用" }}
          </template>
        </el-table-column>
        <!-- 最后一列的三个按钮 -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- scope.row可以拿到当前行的数据，还要在上面的template组件中写slot-scope="scope" -->
            <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
            <el-button size="mini">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 点击新建角色的弹窗组件,close是父组件传给子组件的数据 -->
    <add-modal :visible="visible" @close="visible = false"></add-modal>
  </div>
</template>

<script>
import { get } from "@/utils/http";
import BreadCrumb from "../../components/BreadCrumb.vue";
import AddModal from "./AddModal.vue";     // 引入新建角色的组件
import { mapMutations } from "vuex";

export default {
  components: { BreadCrumb, AddModal },
  data() {
    return {
      input3: "",
      tableData: [],
      selection: [],  // 用来存选中的行数组
      accountList: [],
      visible: false,  // 新建角色，组件默认不显示
      total:[],    // 分页的总条数
    };
  },
  created() {
    // 函数中虽然写了list方法来获取数据，但是没有调用该函数，必须调用该函数才能从mock中拿到数据
    this.list();
  },
  methods: {
    ...mapMutations(["setRow"]),
    // 请求表格数据的方法
    list() {
      get("/all").then((res) => {
        this.tableData = res.data.list;
        this.total = res.data.total;
      });
    },
    // table表格的选择事件
    handleSelect(selection) {
      this.selection = selection; // 存选中项
      // ★把选择项的account拿出来，生成一个数组
      var arr = selection.map((item) => {
        return item.account;
      });
      // 用来存选中的account账户号
      this.accountList = arr;
    },
    // 启用按钮的函数，因为这个项目没有数据库，我们就不操作数据库了，仅仅做一个操作提示
    operate() {
      this.$notify({
        title: "操作成功",
        message: JSON.stringify(this.accountList) + " 操作成功", // 把数组转成字符串
        type: "success",
      });
    },
    // 点击新建角色的事件，把是组件的否显示组件改为true
    add() {
      this.visible = true;
      this.setRow({}); // 点击新建角色，不填充内容
    },
    // 点击编辑按钮，也显示弹窗，并且填充弹窗中的内容
    edit(row) {
      this.visible = true;
      this.setRow(row);
    },
  },
};
</script>

<style lang="less" scoped>
</style>