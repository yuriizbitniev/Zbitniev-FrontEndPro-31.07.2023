// stopwatch.js
class Stopwatch {
    constructor(callback) {
        this.callback = callback;
        this.isRunning = false;
        this.startTime = null;
        this.elapsedTime = 0;
        this.timerInterval = null;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.startTime = Date.now() - this.elapsedTime;
            this.timerInterval = setInterval(() => {
                this.elapsedTime = Date.now() - this.startTime;
                this.callback(this.getTime());
            }, 1000);
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.timerInterval);
        }
    }

    reset() {
        this.isRunning = false;
        clearInterval(this.timerInterval);
        this.elapsedTime = 0;
        this.callback(this.getTime());
    }

    getTime() {
        const totalSeconds = Math.floor(this.elapsedTime / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return { hours, minutes, seconds };
    }
}

export default Stopwatch;
