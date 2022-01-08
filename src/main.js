import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
require('@/assets/sass/commons/color_variables.scss')
require('@/assets/sass/base.scss')
require('@/assets/sass/nomalize.scss')

// Axiosのヘッダをここで設定する。
axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json'
}
axios.defaults.withCredentials = true

createApp(App).use(store).use(router).mount('#app')
