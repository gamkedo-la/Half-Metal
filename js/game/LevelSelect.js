function LevelSelectClass() {
  // CONFIGURATION
  const level_select_config = {
    name: "LEVEL SELECT",
  };

  // SUPER CONSTRUCTOR
  MenuClass.call(this, level_select_config);

  // DEFINE QUADRANTS
  var quadrant = {
    width: this.width / 2,
    height: this.height / 2,
    x: 0,
    y: 0,
  };

  var top_left = { ...quadrant };

  var top_right = { ...quadrant };
  top_right.x = this.width / 2;

  var bottom_left = { ...quadrant };
  bottom_left.y = this.height / 2;

  var bottom_right = { ...quadrant };
  bottom_right.x = this.width / 2;
  bottom_right.y = this.height / 2;

  this.quadrants = [top_left, top_right, bottom_left, bottom_right];

  // LEVEL BUTTONS
  var level_names = ["CELLS", "ARMORY", "PROCESSING", "COURTYARD"];

  this.quadrants.forEach((quadrant, i) => {
    var width = level_names[i].length * 8;
    var button = new ButtonClass(...[, , , ,], level_names[i], ...[, ,], () => {
      console.log(`Clicked ${level_names[i]}`);
    });
    button.x = quadrant.x + quadrant.width / 2 - width / 2;
    button.y = quadrant.y + quadrant.height / 2;
    this.buttons.push(button);
  });

  // BACK BUTTON
  var back_button = new ButtonClass(...[, , , ,], "BACK", ...[, ,], () => {
    menu_stack.pop();
  });
  this.buttons.push(back_button);

  // OVERRIDES
  this.update = function () {
    this.buttons.forEach((button) => {
      button.active = true;
    });
  };
  this.draw = function () {
    // BG
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, this.width, this.height);

    // BORDERS FOR LEVEL QUADRANTS
    this.quadrants.forEach((quadrant) => {
      canvasContext.fillStyle = "white";
      canvasContext.fillRect(
        quadrant.x,
        quadrant.y,
        quadrant.width,
        quadrant.height
      );
      canvasContext.fillStyle = "black";
      canvasContext.fillRect(
        quadrant.x + 1,
        quadrant.y + 1,
        quadrant.width - 2,
        quadrant.height - 2
      );
    });

    // RENDER BUTTONS
    this.buttons.forEach(function (button) {
      button.draw();
    });

    // IMAGE
    if (this.image) {
      canvasContext.drawImage(this.image, 0, 0, this.width, this.height);
    }
  };
}
