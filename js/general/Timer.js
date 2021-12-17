function TimerClass(
  callback = () => {},
  countdown = 0,
  iterations = 1,
  loop = false
) {
  this.callback = callback;
  this.countdown = countdown;
  this.iterations = iterations;
  this.loop = loop;
  this.interval = undefined;
  this.started = false;
  this.finished = false;

  this.update = function () {
    if (this.iterations <= 0 && !this.loop) {
      clearInterval(this.interval);
      this.finished = true;
    }
  };

  this.start = function () {
    if (!this.started) {
      this.interval = setInterval(() => {
        this.iterations--;
        this.callback();
      }, this.countdown);

      this.started = true;
      this.finished = false;
    }
  };

  this.stop = function () {
    clearInterval(this.interval);
    this.finished = false;
    this.started = false;
    this.iterations = iterations;
  };

  this.stopAndCall = function () {
    this.stop();
    this.callback();
  };

  this.reset = function () {
    this.stop();
    this.start();
  };
}
