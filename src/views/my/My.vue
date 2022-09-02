<template>
  <div>
    <!-- 卡片 -->
    <el-row :gutter="20" class="mt">
      <!-- 左边卡片 -->
      <el-col :span="8">
        <el-card>
          <!-- 第一部分 简介 -->
          <el-row >
            <div class="ct"><el-avatar :size="100" :src="circleUrl"></el-avatar></div>
            <h1 class="ct">Serati Ma</h1>
            <p class="ct">海纳百川，有容乃大</p>
            <div class="mt">
              <i class="el-icon-user"></i>
              交互专家
            </div>
            <div>
              <i class="el-icon-s-grid"></i>
              蚂蚁金服-某某某事业群-某某平台部-某某技术部-UED
            </div>
            <div>
              <i class="el-icon-s-home"></i>
              浙江省杭州市
            </div></el-row
          >
          <!-- 第二部分 标签 -->
          <el-row style="margin-top: 50px">
            <p style="margin-bottom: 10px">标签</p>
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput"
              >+ New Tag</el-button
            >
          </el-row>
          <!-- 第二部分 团队 -->
          <el-row style="margin-top: 50px">
            <p style="margin-bottom: 10px">团队</p>
            <el-col :span="10" style="margin-left:20px" >
              <div class="mb " @click="go">
                <el-avatar src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" style="margin-right: 15px"></el-avatar>
                <span>科学板砖组</span>
              </div>
              <div class="mb " @click="go">
                <el-avatar src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" style="margin-right: 15px"></el-avatar>
                <span>中二少女团</span>
              </div>
              <div @click="go">
                <el-avatar src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png" style="margin-right: 15px"></el-avatar>
                <span>高逼格设计天团</span>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="mb" @click="go">
                <el-avatar src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" style="margin-right: 15px"></el-avatar>
                <span>全组都是吴彦祖</span>
              </div>
              <div class="mb" @click="go">
                <el-avatar src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" style="margin-right: 15px"></el-avatar>
                <span>程序员日常</span>
              </div>
              <div @click="go">
                <el-avatar src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" style="margin-right: 15px"></el-avatar>
                <span>骗你来学计算机</span>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <!-- 右边卡片 -->
      <el-col :span="16">
        <el-card>
          <el-menu mode="horizontal" class="mb">
            <el-menu-item index="1" @click.native="com='Demo1'">文章</el-menu-item>
            <el-menu-item index="2" @click.native="com='Demo2'">应用</el-menu-item>
            <el-menu-item index="3" @click.native="com='Demo3'">项目</el-menu-item>
          </el-menu>
          <component :is="com"></component>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Demo1 from "./Demo1.vue";
import Demo2 from "./Demo2.vue";
import Demo3 from "./Demo3.vue";
export default {
  components:{Demo1,Demo2,Demo3},
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
      com:"Demo1"
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    go(){
      this.$router.push("/index")
    }
  },
};
</script>

<style lang="less" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>