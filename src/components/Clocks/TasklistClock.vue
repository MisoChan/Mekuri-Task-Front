<template>
    <div class="clock_window">
        <div class="task_clock_wrapper">
            <div class="clock_time">{{time}}</div>
            <div class="clock_date">{{date}}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="@/assets/sass/components/clocks/tasklist_clocks.scss"/>

<script>
import timeclock from '@/scripts/timeclock.js'
export default {
  methods: {
    updateTime: function () {
      this.time = timeclock.getNowTime()
      this.date = timeclock.getNowDate() + ' ' + timeclock.getDayOfWeek(this.$store.state.language)
      this.mili = timeclock.getMiliSec()
    }
  },
  mounted: function () {
    setInterval(this.updateTime, 1000)
  },
  data: function () {
    return {
      time: '--:--:--',
      date: '----/--/-- --'
    }
  }
}
</script>
