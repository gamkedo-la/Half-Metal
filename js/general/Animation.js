function FrameClass(
  x,
  y,
  width,
  height,
  tag = "",
  angle = 0,
  widthScale = 1,
  heightScale = 1
) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.angle = angle;
  this.widthScale = widthScale;
  this.heightScale = heightScale;
  this.tag = tag;
}

function AnimationClass(name = "", frames = [], sheet = {}, speed = 0) {
  this.name = name;
  this.frames = frames;
  this.currentFrame = {};
  this.currentFrameIndex = 0;
  this.sheet = sheet;
  this.speed = speed;
  this.interval = setInterval(() => this.updateFrame(), this.speed);

  this.updateFrame = function () {
    if (this.speed > 0) {
      this.currentFrameIndex++;
    }

    if (this.currentFrameIndex > this.frames.length - 1) {
      this.currentFrameIndex = 0;
    }
  };

  this.startAnimation = function () {
    this.currentFrameIndex = 0;
  };

  this.draw = function (x, y, width, height, frameTag = "") {
    const frames = this.frames.filter(
      (f) => f.tag.toLowerCase() === frameTag || frameTag === ""
    );

    if (this.currentFrameIndex > frames.length - 1) {
      this.currentFrameIndex = 0;
    }

    this.currentFrame = frames[this.currentFrameIndex];
    const image = this.sheet;

    canvasContext.save();
    canvasContext.translate(x, y);
    canvasContext.rotate(0);

    canvasContext.drawImage(
      image,
      this.currentFrame.x,
      this.currentFrame.y,
      this.currentFrame.width,
      this.currentFrame.height,
      -width / 2,
      -height / 2,
      width,
      height
    );

    canvasContext.restore();
  };
}
