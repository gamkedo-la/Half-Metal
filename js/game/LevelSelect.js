function LevelSelectClass() {
  // CONFIGURATION
  const level_select_config = {
    name: "LEVEL SELECT",
  };

  // SUPER CONSTRUCTOR
  MenuClass.call(this, level_select_config);

  // DEFINE QUADRANTS
  this.quadrants = this.getQuadrants();

  // LEVEL BUTTONS
  var level_names = ["CELLS", "ARMORY", "PROCESSING", "COURTYARD"];

  this.quadrants.forEach((quadrant, i) => {
    var width = level_names[i].length * 8;
    var button = new ButtonClass(...[, , , ,], level_names[i], ...[, ,], () => {
      // var sub_menu = new LevelSelectSubMenuClass({ name: "Levels" });
      // sub_menu.game_section = `${i + 1}`;
      // sub_menu.defineLevelButtons();
      // buttons.push(...sub_menu.buttons);
      // menu_stack.push(sub_menu);
      this.deactivateMenuButtons();
      currentMode = PLAY_MODE;
      switch (level_names[i]) {
        case "CELLS":
          goToLevelByName("1-1");
          break;
        case "ARMORY":
          goToLevelByName("2-1");
          break;
        case "PROCESSING":
          goToLevelByName("3-1");
          break;
        case "COURTYARD":
          goToLevelByName("4-1");
          break;
        default:
          break;
      }
    });
    button.x = quadrant.x + quadrant.width / 2 - width / 2;
    button.y = quadrant.y + quadrant.height / 2;
    this.buttons.push(button);
  });

  // BACK BUTTON
  var back_button = new ButtonClass(...[, , , ,], "BACK", ...[, ,], () => {
    menu_stack.pop();
    this.deactivateMenuButtons();
  });
  this.buttons.push(back_button);

  // OVERRIDES
  this.update = function () {
    this.updateCursor();
    this.buttons.forEach((button) => {
      button.active = true;
    });

    if (!menu_stack.includes(this)) {
      this.deactivateMenuButtons();
    }
  };

  this.draw = function () {
    // BG
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, this.width, this.height);

    // BORDERS
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
