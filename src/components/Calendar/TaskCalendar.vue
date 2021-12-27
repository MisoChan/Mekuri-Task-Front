<template>
  <div id="task_calendar">
    <div class="task_calendar_Header">
      <span class="calendar_yearmonth">{{calendar_date}}</span>
    </div>
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
<style lang="scss" scoped src="@/assets/sass/components/calendar/calendar.scss"/>

<script>
import calendar from '@/scripts/calendar.js'
import timeclock from '@/scripts/timeclock.js'
export default {
  data: function () {
    return {
      weekday: [],
      calendarStrings: [],
      calendar_date: ''
    }
  },
  mounted: function () {
    this.weekday = timeclock.getAllDayOfWeek(this.$store.state.language)
    const date = new Date()
    this.calendar_date = date.getFullYear() + ' / ' + (date.getMonth() + 1)
    this.calendarStrings = calendar.getCalendarStringsArrayByWeek(date.getFullYear(), (date.getMonth() + 1))
  },
  methods: {}
}
</script>
