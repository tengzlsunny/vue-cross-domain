// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

//post请求设置数据
Axios.interceptors.request.use(function (config) {
  if (config.method === "post") {
    config.data = qs.stringify(config.data);
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
