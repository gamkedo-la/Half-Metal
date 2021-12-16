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

  this.start = function () {
    if (!this.started) {
      this.interval = setInterval(() => {
        this.iterations--;
        this.callback();
      }, this.countdown);

      this.started = true;
    }
  };

  this.stop = function () {
    clearInterval(this.interval);
  };

  this.update = function (dt) {
    if (this.loop) {
      this.iterations++;
    }

    if (this.iterations <= 0) {
      clearInterval(this.interval);
    }
  };
}
