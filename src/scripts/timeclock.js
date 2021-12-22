import locale from '@/locales/string.json'
export default {
  getNowDate () {
    const date = new Date()
    return (
      date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDay()
    )
  },
  getNowTime () {
    const date = new Date()
    return date.getHours() + ':' + this.sliceDigit(date.getMinutes(), 2) + ':' + this.sliceDigit(date.getSeconds(), 2)
  },
  getMiliSec () {
    const date = new Date()
    return this.sliceDigit(date.getMilliseconds(), 3)
  },
  getDayOfWeek (language) {
    const date = new Date()
    return locale[language].dayOfWeek[date.getDay()]
  },
  sliceDigit (regex, slice) {
    let zeros = ''
    for (let i = 0; i < slice; i++) {
      zeros = zeros + '0'
    }
    return (zeros + regex).slice(-slice)
  }
}
