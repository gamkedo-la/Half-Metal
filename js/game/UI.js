function UIClass(x, y, width, height) {
  this.backgroundWidth = width;
  this.backgroundHeight = height;
  this.x = x;
  this.y = y;
  this.x_buffer = this.x + 10;
  this.text_height = this.y + this.backgroundHeight / 2 - 5;
  this.ammo_type_map = {
    [NORMAL]: "normal",
    [STUN]: "stun",
    [TURN]: "turn",
    [PUSH]: "push",
  };
  this.speedrun_timer = new SpeedRunClockClass();
  this.floor_levels = [...CELL_LEVELS, ...ARMORY_LEVELS, ...PROCESSING_LEVELS];

  this.update = function () {
    if (speedrun_mode) {
      this.speedrun_timer.update();
    }
  };

  this.draw = function () {
    if (speedrun_mode) {
      this.speedrun_timer.draw();
    }

    colorRect(0, this.y, this.backgroundWidth, this.backgroundHeight, "black");

    if (currentMode === PLAY_MODE) {
      // AMMO COUNTER
      renderFont("AMMO ", this.x_buffer, this.text_height);
      renderFont(
        player.ammo.toString(10),
        this.x_buffer + 40,
        this.text_height
      );

      // AMMO SELECTION
      renderFont("TYPE ", this.x_buffer + 60, this.text_height);
      renderFont(
        this.ammo_type_map[player.selected_ammo],
        this.x_buffer + 100,
        this.text_height
      );

      // FLOOR COUNT
      renderFont(
        `FLOOR ${this.floor_levels.length - currentLevel}`,
        this.x_buffer + 170,
        this.text_height
      );
    }
  };
}
