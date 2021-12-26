<template>
  <div id="task_calendar">
    <table class="mini_calendar">
      <thead>
          <tr>
              <th v-for="weekName in weekday" :key=weekName>{{weekName}}</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(week,index) in calendarStrings" :key=index >
              <td v-for="(days,index) in week" :key=index >{{days.day}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import calendar from '@/scripts/calendar.js'
import timeclock from '@/scripts/timeclock.js'
export default {
  data: function () {
    return {
      weekday: [],
      calendarStrings: []
    }
  },
  mounted: function () {
    this.weekday = timeclock.getAllDayOfWeek(this.$store.state.language)
    this.calendarStrings = calendar.getCalendarStringsArrayByWeek(2022, 1)
  },
  methods: {}
}
</script>
