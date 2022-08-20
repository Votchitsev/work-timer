import Clock from './clock-widget/clock';
import Timer from './clock-widget/timer';

const timer = new Timer(document.querySelector('.clock'));

const clock = new Clock(document.querySelector('.clock-container'), timer);
clock.setEventListeners();
