<template>
  <main class="background">
    <div class="login_form">

      <div class="login_input">
        <div id="login_title">
          <div id="greet_message">
          おかえりなさいまし
          </div>
        </div>

        <div class="login_form_input">
          <div class="mailaddress">
            <label>メールアドレス</label>
            <input type="text" class="login_input" v-model="user_email"/>
          </div>

          <div class="password">
            <label>パスワード</label>
            <input type="password" class="login_input" v-model="user_pass"/>
          </div>

          <div>
              <button  id="button_login_submit" @click="request_login()">ログイン</button>
          </div>
          <a id="forgot_password">パスワード忘れた…</a>
        </div>
      </div>
    </div>
  </main>
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
      axios.post('/login', {
        email_user: this.user_email,
        pass: this.user_pass
      }
      ).then(response => {
        // タスクリストにとりあえず飛ばす
        window.location.href = '/tasklist'
      })
    }
  }

}
</script>
