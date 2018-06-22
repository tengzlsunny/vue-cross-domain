## vue post跨域请求问题

#### 1.安装axios模块和qs模块
  > npm install -s axios
  > npm install -s qs

#### 2.在main.js中注入axios和qs
  > import Axios from 'axios'
  > import qs from 'qs'

#### 3.设置属性
  > Vue.prototype.$http = axios

#### 4.post请求设置数据
  > Axios.interceptors.request 发送数据请求
  > qs.stringify(config.data) post请求修改数据的编码类型
  