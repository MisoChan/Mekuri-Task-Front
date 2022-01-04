<template>
  <!-- タスク入力部分 -->
  <div class="task_input_box">
    <div class="task_input_wrapper">
      <div class="task_input_upper">
        <span>
        <input
          type="text"
          class="task_title"
          v-model="task_head_title"
          placeholder="タスク タイトル"
          @keydown.prevent.enter="selectId('taskhead_timeinput_from')"
        />
        </span>
        <span>
          <input
            type="text"
            id="taskhead_timeinput_to"
            v-model="task_date_end_time"
            class="task_time_limit"
            placeholder="期限"
          />
        </span>
      </div>
      <div class="task_input_middle_upper">
      </div>
      <form name="task_details" autocomplete="off">
        <div class="task_input_middle">
          <input
            type="text"
            id="taskhead_plansinput"
            v-model="task_head_memo"
            class="col-11"
            placeholder="概要を一言で…"
          />
          <ul class="task_details_list">
            <li
              v-for="(plan, index) in taskplans"
              v-bind:key="plan.key"
              class="task_details"
            >
              <div>
                <input
                  type="text"
                  class="taskplan_titles"
                  v-model="plan.title"
                  placeholder="内容を入力…"
                  v-bind:id="plan.key"
                  @keydown.prevent.enter="selectId(plan.key + '_TIME')"
                />
                <input
                  type="text"
                  class="col-2"
                  v-model="plan.reqtime"
                  v-bind:id="plan.key + '_TIME'"
                  v-bind:data-nextkey="plan.nextkey"
                  @keypress="validateNum"
                  @input="plan.reqtime = format(plan.reqtime)"
                  @keydown.prevent.enter="dupeTaskPlanLists(index)"
                  @keydown.prevent.left="reverseTaskPlanInput(index)"
                  placeholder="所要時間（分）"
                />
              </div>
              <textarea
                class="task_detail_memo"
                v-bind:id="plan.key + '_MEMO'"
                placeholder="何をするの？"
                rows="3"
                cols="60"
              ></textarea>
              <button
                type="button"
                class="btn btn-primary plan_delete"
                @click="deleteTaskPlan(index)"
              >
                削除
              </button>
            </li>
            <li class="bottom_button">
              <button type="button" id="add_detail" @click="dupeTaskPlan()">
                ＋ こまかい内容追加
              </button>
            </li>
          </ul>
        </div>
      </form>
      <br />
      <div class="task_input_bottoms">
        <hr />
        <button
          type="button"
          id="task_add_button"
          class="btn_standard"
          @click="sendAddTaskRequest()"
        >
          登録
        </button>
      </div>
    </div>

    <TimeSum ref="tasksum" :childTasks="this.taskplans" ></TimeSum>
  </div>
</template>
<style
  lang="scss"
  scoped
  src="@/assets/sass/components/tasks/Taskinput.scss"
></style>
<script>
import axios from '@/util/mekuri_common_axios'
import Mixins from '@/mixins/common_vue_mixin.js'
import TimeSum from '@/components/Tasks/TaskTimeSum.vue'
export default {
  mixins: [Mixins],
  components: {
    TimeSum
  },
  data: function () {
    return {
      task_head_title: '',
      task_date_begin: '',
      task_date_end: '',
      task_date_begin_time: '',
      task_date_end_time: '',
      task_head_memo: '',
      taskplans: [{ key: 0, title: '', reqtime: '' }],
      today: new Date(),
      // 内容の追加を行ってもいいか
      canAddPlan: false
    }
  },
  methods: {
    reverseTaskPlanInput (listIndex) {
      // インデックスを取得
      const index = this.taskplans[listIndex]
      this.selectId(index.key)
    },

    // 内容追加ボタン用 タスク内容の新規追加を行う
    dupeTaskPlan () {
      const listIndex = this.taskplans.length - 1
      this.dupeTaskPlanLists(listIndex)
    },
    // タスク内容の新規追加を行う。
    async dupeTaskPlanLists (listIndex) {
      const randid = Math.random()
        .toString(36)
        .slice(8)
      // インデックスを取得
      const index = this.taskplans[listIndex]

      let canSelect = false
      let canAddPlan = false
      let isTitleInput = false
      let isReqTimeInput = false

      // リストに何もないならここで新規作成
      if (!index) {
        // empty→追加
        this.addTaskPlan(randid)
        canAddPlan = true
      } else {
        isTitleInput = !index.title
        isReqTimeInput = !index.reqtime
      }

      // 直近の入力項目がEmptyではない？
      if (!isTitleInput && !isReqTimeInput) {
        // 次のインデックスが存在する？
        if (listIndex === this.taskplans.length - 1) {
          // empty→追加
          this.addTaskPlan(randid)
          canAddPlan = true
        } else {
          canSelect = true
        }
      }
      // DOM が更新されるのを待つ
      await this.$nextTick()
      // 選択可能？
      if (canSelect) {
        const nextIndex = this.taskplans[listIndex + 1].key
        this.selectId(nextIndex)
      } else if (canAddPlan) {
        // それとも新規追加？
        const plans = document.getElementById(randid)
        plans.select()
      }

      // 最後にタスクの合計時間の更新を通知
      this.$refs.tasksum.countTaskTimeSummesion()
    },

    async addTaskPlan (randid) {
      const taskplanDatatemplate = { key: randid, title: '', reqtime: '' }

      this.taskplans.push(taskplanDatatemplate)
    },

    // タスク内容の削除を行う。
    deleteTaskPlan (index) {
      this.taskplans.splice(index, 1)
      this.$refs.tasksum.countTaskTimeSummesion()
    },
    // タスクリストの登録処理
    sendAddTaskRequest: function () {
      axios
        .post('/task_lists', {
          task_head_title: this.task_head_title,
          task_date_begin: this.task_date_begin,
          task_date_end: this.task_date_end,
          task_head_memo: this.task_head_memo,
          task_date_begin_time: this.task_date_begin_time,
          task_date_end_time: this.task_date_end_time,
          task_plans: this.taskplans
        })
        .then(function (response) {
          console.log(response)
        })
    }
  }
}
</script>
