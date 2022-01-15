function UIClass(x, y, width, height) {
  this.backgroundWidth = width;
  this.backgroundHeight = height;
  this.x = x;
  this.y = y;

  this.draw = function () {
    colorRect(0, this.y, this.backgroundWidth, this.backgroundHeight, "black");
    renderFont("TESTING 0123456789", this.x, this.y);
  };
}
