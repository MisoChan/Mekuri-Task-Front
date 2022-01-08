<template>
  <div class="task_time_sum">
    <div>所要時間合計</div>
    <div class="task_time_sum_text">{{ taskSum }}</div>
  </div>
</template>
<style
  lang="scss"
  src="@/assets/sass/components/tasks/TaskTimeSum.scss"
></style>

<script>
export default {
  props: {
    childTasks: {
      type: Array,
      required: false
    }
  },
  data: function () {
    return {
      taskSum: 0
    }
  },
  methods: {
    // タスク内容更新時に合計時間を計算する
    countTaskTimeSummesion () {
      this.taskSum = this.childTasks.reduce((sum, element) => sum + Number(element.require_time), 0)
    }
  }
}
</script>
