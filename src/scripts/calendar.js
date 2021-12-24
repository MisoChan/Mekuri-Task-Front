import timeclock from '@/scripts/timeclock.js'
export default {
  getCalendarStrings (language, month) {
    const weeks = timeclock.getAllDayOfWeek(language)
  },
  getFullNumberOfWeeks (year, month) {
    return Math.floor((this.getLastDateOfCalendar(year, month)) / 7)
  },
  getFirstDateOfCalendar (year, month) {
    const date = new Date(year, month + 1, 1)
    return date
  },
  getLasDateOfCalendar (year, month) {
    const date = new Date(year, month + 1, 0)
    return date
  }

}
