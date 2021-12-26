export default {

  getCalendarStringsArrayByWeek (year, month) {
    const calendarStrings = this.getCalendarStrings(year, month)
    const resultArray = []
    const weeks = calendarStrings.length / 7
    let from = 0
    let to = 0
    for (let i = 0; i < weeks; i++) {
      to = (i + 1) * 7
      resultArray.push(calendarStrings.slice(from, to))
      from = to
    }
    return resultArray
  },
  getCalendarStrings (year, month) {
    // カレンダー初日から1日足しながら格納、最終日になったらストップ。
    // 日付がmonth外だったら、フラグをつけておく → 灰色にするとかの処理に使用

    const date = this.getFirstDateOfCalendar(year, month)
    const dates = []
    while (date.getTime() <= this.getLastDateOfCalendar(year, month).getTime()) {
      dates.push({
        month: date.getMonth() + 1,
        day: date.getDate(),
        dayOfWeek: date.getDay(),
        isSpecifiedMonth: (date.getMonth() + 1) === month
      })
      date.setDate(date.getDate() + 1)
    }
    return dates
  },
  getFirstDateOfCalendar (year, month) {
    const date = new Date(year, month - 1, 1)
    const dayOfWeek = date.getDay()
    date.setDate(date.getDate() - dayOfWeek)

    return date
  },
  getLastDateOfCalendar (year, month) {
    const date = new Date(year, month, 0)

    date.setDate(date.getDate() + (6 - date.getDay()))
    return date
  }
}
