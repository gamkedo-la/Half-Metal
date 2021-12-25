function warpClass(x, y) {
  this.x = x;
  this.y = y;
  this.height = 32;
  this.width = 32;
  this.link = undefined;

  this.draw = function () {
    canvasContext.fillRect(this.x, this.y, this.width, this.height);
  };

  this.reset = function () {
    resetGameObject(this);
  };

  this.teleport = function (subject) {
    if (this.link !== undefined) {
      subject.x = this.link.x + subject.width;
      subject.y = this.link.y + subject.height;
    }
  };
}
