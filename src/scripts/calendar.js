export default {
  getCalendarStrings (year, month) {},
  getFullNumberOfWeeks (year, month) {
    return Math.floor(this.getLastDateOfCalendar(year, month) / 7)
  },
  getFirstDateOfCalendar (year, month) {
    const date = this.getLastDateOfCalendar(year, month - 1)

    const firstMonthDay = new Date(date - date.getDay() + 1)

    return firstMonthDay
  },
  getLastDateOfCalendar (year, month) {
    const date = new Date(year, month, 0)
    return date
  }
}
