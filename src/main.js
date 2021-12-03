import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
require('@/assets/sass/base.scss')
// eslint-disable-next-line new-cap
const i18n = new VueI18n({
  locale: 'ja', // ロケールをセット
  fallbackLocale: 'en', // フォールバックロケールをセット
  messages: {} // ロケールメッセージをセット
})
createApp(App).use(store).use(router).use(i18n).mount('#app')
