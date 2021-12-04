function FrameClass(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

function AnimationClass(name, frames, sheet, speed = 240) {
  this.name = name;
  this.frames = frames;
  this.currentFrame = 0;
  this.sheet = sheet;
  this.speed = speed;
  this.interval = setInterval(() => this.updateFrame(), this.speed);

  this.updateFrame = function () {
    if (this.speed > 0) {
      this.currentFrame++;
    }

    if (this.currentFrame > this.frames.length - 1) {
      this.currentFrame = 0;
    }
  };

  this.startAnimation = function () {
    this.currentFrame = 0;
  };

  this.draw = function (x, y, width, height) {
    const frame = this.frames[this.currentFrame];
    const image = this.sheet;

    canvasContext.save();
    canvasContext.translate(x, y);
    canvasContext.rotate(0);
    canvasContext.drawImage(
      image,
      frame.x,
      frame.y,
      frame.width,
      frame.height,
      -width / 2,
      -height / 2,
      width,
      height
    );

    canvasContext.restore();
  };
}
