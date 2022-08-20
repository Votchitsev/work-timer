/* @class Clock
* @param { Object } HTMLDivElement
* @param { Object } Timer
*/

class Clock {
  constructor(element, timer) {
    this.element = element;
    this.timer = timer;
    this.run = this.run.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  setEventListeners() {
    const startBtn = this.element.querySelector('.start');
    startBtn.addEventListener('click', this.run);

    const resetBtn = this.element.querySelector('.reset');
    resetBtn.addEventListener('click', this.reset);
  }

  static changeEventListener(element, callback, previousCallback, event) {
    element.removeEventListener(event, previousCallback);
    element.addEventListener(event, callback);
  }

  run() {
    this.timer.start();

    const startBtn = this.element.querySelector('.start');
    startBtn.classList.remove('start');
    startBtn.classList.add('stop');
    startBtn.textContent = 'stop';

    Clock.changeEventListener(startBtn, this.stop, this.run, 'click');
  }

  stop() {
    this.timer.stop();

    const stopBtn = this.element.querySelector('.stop');
    stopBtn.classList.remove('stop');
    stopBtn.classList.add('start');
    stopBtn.textContent = 'start';

    Clock.changeEventListener(stopBtn, this.run, this.stop, 'click');
  }

  reset() {
    this.timer.reset();
  }
}

export default Clock;
