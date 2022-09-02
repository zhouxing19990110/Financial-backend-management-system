<template>
<!-- 点击新建角色，弹出的窗口的组件，复制element-ui dailog对话框 -->
  <div>
    <!-- close事件是 弹窗❌的事件 -->
    <el-dialog :title="title" :visible="visible" width="500px" @close="close">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- 下拉选择框表单 复制element-ui select选择器-->
        <el-form-item label="角色" prop="character">
          <el-select
            v-model="ruleForm.character"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <el-option value="业务人员"></el-option>
            <el-option value="审核人员"></el-option>
            <el-option value="风控经理"></el-option>
            <el-option value="管理员"></el-option>
          </el-select>
        </el-form-item>
        <!-- 输入框表单 -->
        <el-form-item label="备注" prop="remark">
          <el-input v-model="ruleForm.remark"></el-input>
        </el-form-item>
        <!-- 文本域表单 -->
        <el-form-item label="创建原因" prop="reason">
          <el-input v-model="ruleForm.reason" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部插槽 两个按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import {mapState} from "vuex"

export default {
  props: ["visible"],   // 弹窗的显示与隐藏，由父组件传入
  data() {
    return {
      // 表单的ruleForm
      ruleForm: {
        character: "",
        remark: "",
        reason: "",
      },
      title:"",
      // 表单的规则
      rules: {
        character: [{ required: true, message: "不能为空", trigger: "blur" }],
        remark: [{ required: true, message: "不能为空", trigger: "blur" }],
        reason: [{ required: true, message: "不能为空", trigger: "blur" }],
      },
    };
  },
  watch:{
    // 通过监听visible 点击编辑按钮可以填充该行数据
    "visible"(){
      const {character,remark,reason}=this.row    // es6 解构赋值
      this.title=character?"编辑教师":"新增教师"
      this.ruleForm={character,remark,reason}    // es6 解构赋值
    }
  },
  computed:{
    // 把vuex中的row拿进子组件里，就是选中的那一行的数据（是一个对象）
      ...mapState(["row"])
  },
  methods:{
    // 通知父级传数据
      close(){
          this.$emit("close")
      }
  }
};
</script>

<style lang="less" scoped>
</style>