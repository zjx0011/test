import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

//根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b 过程中切掉api
axios.defaults.baseURL = '/api';//接口代理
axios.defaults.timeout = 8000;//超时

//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {//成功
    return res.data;
  } else if (res.status == 10) {//未登录
    window.location.href = '/#/login';// #哈希路由
  } else {
    alert(res.msg);
  }
});

Vue.use(VueAxios, axios);//加载插件
Vue.config.productionTip = true //生产环境提示

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
