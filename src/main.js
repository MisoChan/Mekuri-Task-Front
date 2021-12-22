import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueI18n from 'vue-i18n'
// import messages from '@/locales/string.json'
require('@/assets/sass/commons/color_variables.scss')
require('@/assets/sass/base.scss')
require('@/assets/sass/nomalize.scss')

createApp(App).use(store).use(router).mount('#app')
