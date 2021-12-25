export default {
  getCalendarStrings (year, month) {
    // カレンダー初日から1日を 7回*週、足しながら格納する
    // 日付がmonth外だったら、フラグをつけておく → 灰色にするとかの処理に使用
  },
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
