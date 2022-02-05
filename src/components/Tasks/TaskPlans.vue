<template>
  <!-- タスク一覧部分 -->

  <div class="task_plans">

      <div class="task_header">
        <input
          type="checkbox"
          class="taskheader_checkbox"
          v-bind:id="item.id"
          v-bind:value="item.id"
          @change="checkHeaders(item.id)"
        />
        <label for="checkdone" class="task_head_text">
          {{ item.task_title }}
        </label>
      </div>
  </div>
</template>

<script>
import Mixins from '@/mixins/common_vue_mixin.js'
export default {
  mixins: [Mixins],
  props: {
    item: {
      type: Object,
      reqired: true
    }
  },
  methods: {
    // ヘッダがチェックされたときに発火するやつ。
    checkHeaders: function (headid) {
      const headerelem = document.getElementById(headid)
      // ヘッダのチェックがFalseの場合のみチェックをつける。
      if (headerelem.checked !== false) {
        this.checkPlanListByHeaderId(headid, true)
      }
    },
    // ヘッダIDチェック時の処理
    checkPlanListByHeaderId (dataval, checked) {
      // チェックをつけたときだけ子要素のチェックを完了させる
      const elems = this.getTaskHeaderElem(dataval)
      for (let i = 0; i < elems.length; i++) {
        elems[i].checked = checked
      }
    },
    // 内容チェックボックスが押されたときの処理
    planCheckBoxSelected (headid, planid) {
      const headerelement = document.getElementById(headid)
      const planelement = document.getElementById(planid)

      // ヘッダのチェックボックスがfalseかつ、内容のチェックボックスOFFのときはヘッダを自動でOffにする
      if ((planelement.checked !== true) & (headerelement.checked !== true)) {
        headerelement.checked = true
      }
      const elems = this.getTaskHeaderElem(headid)
      let allchecked = false
      let counts = 0
      for (let i = 0; i < elems.length; i++) {
        // TRUEならカウントに追加
        counts = elems[i].checked ? counts + 1 : counts
      }
      // 総数がカウントと同数ならヘッダチェックをつける
      allchecked = counts === elems.length

      headerelement.checked = allchecked
    },
    // タスクヘッダの要素を取得する
    getTaskHeaderElem (dataval) {
      return document
        .getElementById('task_lists')
        .querySelectorAll('[data-task-header="' + dataval + '"]')
    }
  }
}
</script>
