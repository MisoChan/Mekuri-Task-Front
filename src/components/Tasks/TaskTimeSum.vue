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
  watch: {
    childTasks: function (oldArray, newArray) {
      console.log(newArray)
      if (this.childTasks.length !== 0) {
      }
    }
  },
  data: function () {
    return {
      taskSum: 1
    }
  },
  methods: {
    countTaskTimeSummesion () {}
  }
}
</script>
