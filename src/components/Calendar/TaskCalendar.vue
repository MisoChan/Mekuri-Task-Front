<template>
  <div id="task_calendar"></div>
</template>

<script>
import calendar from '@/scripts/calendar.js'
export default {
  data: function () {
    return {}
  },
  mounted: function () {
    console.log(calendar.getFirstDateOfCalendar(2021, 12))
  },
  methods: {}
}
</script>
