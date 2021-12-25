function SwitchClass() {
  this.state = UNPRESSED;
  this.x = 120;
  this.y = 128;
  this.width = 16;
  this.height = 16;
  this.color = "red";
  this.type = SWITCH;

  this.update = function () {
    if (this.state === UNPRESSED) this.color = "red";
    if (this.state === PRESSED) this.color = "blue";
  };

  this.draw = function () {
    colorRect(this.x, this.y, this.width, this.height, this.color);
  };
}
