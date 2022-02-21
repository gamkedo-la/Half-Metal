function LevelSelectSubMenuClass() {
  // CONFIG
  this.name = "";
  this.levels = [];
  this.game_section = "1";

  // SUPER CONSTRUCTOR
  MenuClass.call(this, {});

  this.quadrants = this.getQuadrants();

  // LEVEL BUTTONS
  this.defineLevelButtons = function () {
    // Remove previous buttons if we were displaying the levels for a different section
    this.buttons.length = 0;

    // Get floor names for each level
    var max_floors = levels.length;

    this.levels = levels.map((level, i) => {
      level.floor = max_floors - i;
      level.id = i;
      return level;
    });

    // Only create buttons for the levels of the selected game section (CELLS, ARMORY, etc)
    this.levels = this.levels.filter(
      (level) => level.name.split("-")[0] === this.game_section
    );

    this.levels.forEach((level, i) => {
      var level_name = `FLOOR ${level.floor}`;
      var level_button = new ButtonClass(
        ...[, , , ,],
        level_name,
        ...[, ,],
        () => {
          menu_stack.pop();
          this.deactivateMenuButtons();
          currentMode = PLAY_MODE;
          currentLevel = level.id;
          goToLevel(currentLevel);
        }
      );
      this.buttons.push(level_button);

      buttons.push(...this.buttons);
    });

    // Separate button array into quarters
    var quarter = this.buttons.length / 4;
    var quadrant_count = 0;
    var y_offset = 0;

    for (var i = 0; i < this.buttons.length; i += quarter) {
      y_offset = 0;
      for (var j = 0; j < quarter; j++) {
        var quadrant = this.quadrants[quadrant_count];
        this.buttons[j + i];
        this.buttons[j + i].x = quadrant.x + quadrant.width / 2 - 35;
        this.buttons[j + i].y = quadrant.y + quadrant.height / 4 + y_offset + 6;
        y_offset += 12;
      }
      quadrant_count++;
    }

    // BACK BUTTON
    var back_button = new ButtonClass(...[, , , ,], "BACK", ...[, ,], () => {
      menu_stack.pop();
      this.deactivateMenuButtons();
      console.log("BACK");
    });

    this.buttons.push(back_button);
  };

  this.defineLevelButtons();

  // OVERRIDES
  this.update = function () {
    this.updateCursor();
    this.buttons.forEach((button) => {
      button.active = true;
    });
  };

  this.draw = function () {
    // BG
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, this.width, this.height);

    // BORDERS FOR LEVEL QUADRANTS
    this.renderQuadrantBorders();

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
