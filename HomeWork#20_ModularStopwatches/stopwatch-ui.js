// stopwatch-ui.js
class StopwatchUI {
    constructor(initialTime) {
        this.initialTime = initialTime;
        this.stopwatchElement = this.createStopwatchElement();
    }

    createStopwatchElement() {
        const stopwatchElement = document.createElement("div");
        stopwatchElement.classList.add("stopwatch");
        stopwatchElement.innerHTML = `
      <div class="time">00:00:00</div>
      <button class="start-btn">Start</button>
      <button class="pause-btn">Pause</button>
      <button class="reset-btn">Reset</button>
    `;
        const startBtn = stopwatchElement.querySelector(".start-btn");
        const pauseBtn = stopwatchElement.querySelector(".pause-btn");
        const resetBtn = stopwatchElement.querySelector(".reset-btn");

        startBtn.addEventListener("click", () => {
            this.startCallback && this.startCallback();
        });

        pauseBtn.addEventListener("click", () => {
            this.pauseCallback && this.pauseCallback();
        });

        resetBtn.addEventListener("click", () => {
            this.resetCallback && this.resetCallback();
        });

        return stopwatchElement;
    }

    appendStopwatch(parentElement) {
        parentElement.appendChild(this.stopwatchElement);
    }

    setTime(time) {
        const timeElement = this.stopwatchElement.querySelector(".time");
        const { hours, minutes, seconds } = time;
        timeElement.textContent = `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
    }

    formatTime(value) {
        return value < 10 ? `0${value}` : value.toString();
    }

    addStartBtnListener(callback) {
        this.startCallback = callback;
    }

    addPauseBtnListener(callback) {
        this.pauseCallback = callback;
    }

    addResetBtnListener(callback) {
        this.resetCallback = callback;
    }
}

export default StopwatchUI;
