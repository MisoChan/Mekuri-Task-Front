<template>
  <div class="login_form">
    <div class="login_input">
      <div id="login_title">
        ログイン
        <div id="greet_message">
          おかえりなさいまし。
        </div>
      </div>

      <ul class="login_form_input_li">
        <li>メールアドレス</li>
        <li><input type="text" class="login_input" v-model="user_email" /></li>

        <li>パスワード</li>
        <li>
          <input type="password" class="login_input" v-model="user_pass" />
        </li>

        <li>
          <div>
            <button id="button_login_submit" @click="request_login()">
              ログイン
            </button>
            <a>パスワード忘れた…</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/login.css"></style>

<script>
import Mixins from '@/mixins/common_vue_mixin.js'
import axios from '@/util/mekuri_common_axios'
export default {
  mixins: [Mixins],
  data () {
    return {
      user_email: '',
      user_pass: ''
    }
  },
  methods: {
    request_login () {
      const params = new URLSearchParams()
      params.append('mail', this.user_email) // 渡したいデータ分だけappendする
      params.append('password', this.user_pass)
      axios
        .post('/login', params)
        .then(response => {
          // タスクリストにとりあえず飛ばす
          this.$router.push('/tasklist')
        })
    }
  }
}
</script>
