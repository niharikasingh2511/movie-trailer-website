class Timer {
  constructor () {
    this.timeouts = []
    this.intervals = []
  }

  setTimeout (callback, n) {
    const t = setTimeout(callback, n)

    this.timeouts[this.timeouts.length] = t

    return t
  }

  setInterval (callback, n) {
    const t = setInterval(callback, n)

    this.intervals[this.intervals.length] = t

    return t
  }

  clearTimeout (t) {
    if (t) {
      clearTimeout(t)
      this.timeouts = this.timeouts.filter(t1 => t1 !== t)
    } else {
      this.timeouts.map(clearTimeout)
      this.timeouts = []
    }
  }

  clearInterval (t) {
    if (t) {
      clearInterval(t)
      this.intervals = this.intervals.filter(t1 => t1 !== t)
    } else {
      this.intervals.map(clearInterval)
      this.intervals = []
    }
  }

  clear () {
    this.clearTimeout()
    this.clearInterval()
  }
}
export default new Timer()
