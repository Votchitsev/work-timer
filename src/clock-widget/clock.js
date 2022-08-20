/* Класс описывает поведение часов и имеет следующие методы:
 * run - запускает часы;
 * draw - добавляет часы на страницу
 * stop - останавливает часы
 */

import Timer from './timer';

class Clock {
  constructor(element) {
    this.element = element;
    this.run = this.run.bind(this);
  }

  setEventListeners() {
    const startBtn = this.element.querySelector('.start');
    startBtn.addEventListener('click', this.run);
  }

  run() {
    this.timer = new Timer(document.querySelector('.clock'), 0);
    this.timer.start(0);
    const pauseBtn = this.element.querySelector('.pause');
    pauseBtn.classList.add('active');
  }
}

export default Clock;
