<template>
    <div class="task_page">
      <!-- 題名部分 -->
      <div id="task_add_date">{{task_date}}</div>
      <!-- メイン部分  -->
      <div id="main_task_lists">
        <!-- タスク入力欄 -->
        <Taskinput></Taskinput>

        <div v-for="itemProp in tasklist" v-bind:key="itemProp.id">
          <Taskplan :item='itemProp'></Taskplan>
        </div>
      </div>
      <div id="right_side_menu">
        <ul
          id="right-sidebar_list"
          class="nav-sidebar"
          style="list-style: none; padding-left: 0"
        >
          <li>
            <TaskCalendar></TaskCalendar>
          </li>
          <li class="mt-5">
            <TaskListClock></TaskListClock>
          </li>

          <li class="mt-2">
            <button type="button" id="begin_work_button" class="btn_danger">
              作業開始！
            </button>
          </li>
        </ul>
      </div>
    </div>
</template>
<style lang="scss" scoped src="@/assets/sass/task_lists.scss"></style>
<script>
import axios from '@/util/mekuri_common_axios'
import Taskinput from '@/components/Tasks/Taskinput.vue'
import Taskplan from '@/components/Tasks/TaskPlans.vue'
import TaskListClock from '@/components/Clocks/TasklistClock.vue'
import TaskCalendar from '@/components/Calendar/TaskCalendar.vue'
export default {

  components: {
    Taskinput,
    Taskplan,
    TaskListClock,
    TaskCalendar
  },
  data: function () {
    return {

      DatePickerFormat: 'yyyy-MM-dd',
      checkdone: [],
      tasklist: [],
      pageNumber: 1,
      modelConfig: {
        type: 'string'
      }

    }
  },
  methods: {

  },
  // DOMが出来上がる前にやっとく処理
  created () {
    axios
      .get('/tasks', { pageNumber: this.pageNumber, withCredentials: true })
      .then((response) => (this.tasklist = response.data.result))
  },

  // DOMが出来上がった時点の処理
  mounted () {

  },
  // 値の変更監視
  watch () {

  }
}
</script>
