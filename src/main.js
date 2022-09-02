import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // element-ui 样式文件
import "./common/common.css"   // 在根目录中引入全局样式
import "./mock/mock";
import "./router/guard";  // 引入拦截器

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
