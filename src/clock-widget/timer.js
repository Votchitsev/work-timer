import Storage from '../storage/Storage';

class Timer {
  constructor(timerEl) {
    this.timerEl = timerEl;
    this.getCurrentTime();
    this.renderTime();

    this.stop = this.stop.bind(this);
  }

  getCurrentTime() {
    const data = Storage.load();

    if (data) {
      this.hour = data.hour;
      this.min = data.min;
      this.sec = data.sec;
    } else {
      this.setStartTime();
    }
  }

  start() {
    this.timer = setInterval(() => {
      this.tick();
      this.renderTime();
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
    clearInterval(this.timer);
    this.save();
  }

  renderTime() {
    this.timerEl.textContent = `${this.hour > 9 ? this.hour : `0${this.hour}`}:${
      this.min > 9 ? this.min : `0${this.min}`}:${
      this.sec > 9 ? this.sec : `0${this.sec}`}`;
  }

  save() {
    const data = {
      hour: this.hour,
      min: this.min,
      sec: this.sec,
    };

    Storage.save(data);
  }

  reset() {
    this.setStartTime();
    this.renderTime();
    Storage.clear();
  }

  setStartTime() {
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
  }
}

export default Timer;
