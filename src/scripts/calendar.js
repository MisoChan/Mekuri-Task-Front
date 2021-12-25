export default {
  getCalendarStrings (year, month) {
    // カレンダー初日から1日足しながら格納、最終日になったらストップ。
    // 日付がmonth外だったら、フラグをつけておく → 灰色にするとかの処理に使用

    const date = this.getFirstDateOfCalendar(year, month)
    const dates = []
    while (date.getTime() !== this.getLastDateOfCalendar(year, month).getTime()) {
      dates.push({
        day: date.getDate(),
        isSpecifiedMonth: date.getMonth() === month
      })
      date.setDate(date.getDay() + 1)
      console.log(date)
    }
    return dates
  },
  substractDays (to, from) {},
  getFirstDateOfCalendar (year, month) {
    const date = this.getLastDateOfCalendar(year, month - 1)

    const firstMonthDay = new Date(date - date.getDay() + 1)

    return firstMonthDay
  },
  getLastDateOfCalendar (year, month) {
    const date = new Date(year, month - 1, 0)

    date.setDate(date.getDate() + (6 - date.getDay()))
    return date
  }
}
