import Storage from '../storage/Storage';

class Timer {
  constructor(timerEl) {
    this.timerEl = timerEl;
    this.getCurrentTime();
    this.renderTime();
    this.isRunning = false;
    this.stop = this.stop.bind(this);
  }

  getCurrentTime() {
    const data = Storage.load();

    if (data) {
      this.time = data.time;
    } else {
      this.setStartTime();
    }
  }

  start() {
    this.isRunning = true;
    const start = Date.now();
    this.timer = setInterval(() => {
      this.tick(start);
      this.renderTime(this.delta + this.time);
    }, 1000);
  }

  tick(start) {
    const delta = (Date.now() - start) / 1000;
    this.delta = delta;
  }

  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timer);
      this.time += this.delta;
      this.save();
    }
  }

  renderTime(time = 0) {
    let hours;
    let minutes;
    let seconds;

    if (time < 60) {
      hours = 0;
      minutes = 0;
      seconds = parseInt(time, 10);
    } else if (time >= 60 && time < 3600) {
      hours = 0;
      minutes = parseInt(time / 60, 10);
      seconds = parseInt(time % 60, 10);
    } else if (time >= 3600) {
      hours = parseInt(time / 3600, 10);
      minutes = parseInt((time % 3600) / 60, 10);
      seconds = parseInt((time % 3600) % 60, 10);
    }

    this.timerEl.textContent = `${hours > 9 ? hours : `0${hours}`}:${
      minutes > 9 ? minutes : `0${minutes}`}:${
      seconds > 9 ? seconds : `0${seconds}`}`;
  }

  save() {
    const data = {
      time: this.time,
    };

    Storage.save(data);
  }

  reset() {
    this.setStartTime();
    this.renderTime();
    Storage.clear();
  }

  setStartTime() {
    this.time = 0;
  }
}

export default Timer;
