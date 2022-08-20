class Timer {
  constructor(timerEl) {
    this.timerEl = timerEl;
    this.sec = 0;
    this.min = 0;
    this.hour = 0;
  }

  start() {
    this.timer = setInterval(() => {
      this.tick();
      this.timerEl.textContent = this.renderTime();
    }, 1000);
  }

  tick() {
    this.sec += 1;
    if (this.sec >= 60) {
      this.sec = 0;
      this.min += 1;
      if (this.min >= 60) {
        this.min = 0;
        this.hour += 1;
      }
    }
  }

  stop() {
    this.timer.clearInterval();
  }

  renderTime() {
    return `${this.hour > 9 ? this.hour : `0${this.hour}`}:${
      this.min > 9 ? this.min : `0${this.min}`}:${
      this.sec > 9 ? this.sec : `0${this.sec}`}`;
  }
}

export default Timer;
