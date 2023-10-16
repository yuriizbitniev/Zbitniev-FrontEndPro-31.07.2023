// index.js
import Stopwatch from './stopwatch.js';
import StopwatchUI from './stopwatch-ui.js';

const initialTime = { hours: 0, minutes: 0, seconds: 0 };

const ui1 = new StopwatchUI(initialTime);
const onTick1 = (time) => ui1.setTime(time);
const stopwatch1 = new Stopwatch(onTick1);

ui1.addStartBtnListener(() => stopwatch1.start());
ui1.addPauseBtnListener(() => stopwatch1.pause());
ui1.addResetBtnListener(() => stopwatch1.reset());

ui1.appendStopwatch(document.body);

const ui2 = new StopwatchUI(initialTime);
const onTick2 = (time) => ui2.setTime(time);
const stopwatch2 = new Stopwatch(onTick2);

ui2.addStartBtnListener(() => stopwatch2.start());
ui2.addPauseBtnListener(() => stopwatch2.pause());
ui2.addResetBtnListener(() => stopwatch2.reset());

ui2.appendStopwatch(document.body);
