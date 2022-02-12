function SpeedRunClockClass() {
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.milliseconds = 0;
  this.x = 0;
  this.y = 0;
  this.width = 85;
  this.height = 14;
  this.background = "black";
  this.start_time = Date.now();
  this.elapsed_time = this.start_time;
  this.started_clock = false;

  this.draw = function () {
    var time_string = `${this.prependZero(this.minutes, 2)}.${this.prependZero(
      this.seconds,
      2
    )}.${this.prependZero(this.milliseconds, 0)}`;

    // BG
    canvasContext.fillStyle = this.background;
    canvasContext.fillRect(this.x, this.y, this.width, this.height);

    // TEXT
    renderFont(time_string, this.x + 2, this.y + 2);
  };

  // Add zeroes at the beginning of each time measurement
  this.prependZero = function (time, length) {
    time = new String(time); // stringify time
    return new Array(Math.max(length - time.length + 1, 0)).join("0") + time;
  };

  // Will run in setInterval every 25 ms
  this.updateTime = function () {
    // Get milliseconds since the game started
    this.elapsed_time = new Date().getTime() - this.start_time.getTime();

    // Measure time based on milliseconds
    this.hours = parseInt(this.elapsed_time / 1000 / 60 / 60);

    this.minutes = parseInt(this.elapsed_time / 1000 / 60);
    if (this.minutes > 60) this.minutes %= 60;

    this.seconds = parseInt(this.elapsed_time / 1000);
    if (this.seconds > 60) this.seconds %= 60;

    this.milliseconds = parseInt(this.elapsed_time);
    if (this.milliseconds > 60) this.milliseconds %= 1000;
  };

  this.update = function (dt) {
    if (!this.started) {
      this.start_time = new Date();
      this.started = true;
      setInterval(() => this.updateTime(), 25);
    }
  };
}
