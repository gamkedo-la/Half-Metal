function vector2DClass(magnitude, direction) {
  this.magnitude = magnitude;
  this.direction = direction;
  this.x;
  this.y;
  this.visible = false;

  this.draw = function () {
    canvasContext.beginPath();
    canvasContext.moveTo(this.x, this.y);
    canvasContext.lineTo(this.x, this.y);
    canvasContext.stroke();
  };
}
