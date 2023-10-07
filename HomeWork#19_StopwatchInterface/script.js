class StopWatch {
    constructor(onTickCallback) {
        this.onTickCallback = onTickCallback;
        this.isRunning = false;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.intervalId = null;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalId = setInterval(() => {
                this.tick();
                this.onTickCallback(this.getTime());
            }, 1000);
        }
    }

    tick() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;
            }
        }
    }

    pause() {
        if (this.isRunning) {
            clearInterval(this.intervalId);
            this.isRunning = false;
        }
    }

    reset() {
        this.pause();
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

    getTime() {
        return {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
        };
    }
}

const timerElement = document.getElementById("timer");

const formatTime = (time) => {
    const pad = (num) => (num < 10 ? `0${num}` : num);
    return `${pad(time.hours)}:${pad(time.minutes)}:${pad(time.seconds)}`;
};

const onTick = (time) => {
    timerElement.textContent = formatTime(time);
};

const stopWatch = new StopWatch(onTick);

stopWatch.start();
