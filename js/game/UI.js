function UIClass(x, y, width, height) {
  this.backgroundWidth = width;
  this.backgroundHeight = height;
  this.x = x;
  this.y = y;
  this.x_buffer = this.x;
  this.text_height = this.y + this.backgroundHeight / 2 - 5;
  this.ammo_type_map = {
    [NORMAL]: "power shot",
    [STUN]: "stun shot",
    [TURN]: "turn shot",
    [PUSH]: "push shot",
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
      const ammo_map = {
        [NORMAL]: player.ammo,
        [STUN]: player.stun_ammo,
        [TURN]: player.turn_ammo,
      };

      const ammo = ammo_map[player.selected_ammo];
      const ammo_types = Object.keys(this.ammo_type_map);
      const selected_ammo_index = ammo_types.indexOf(player.selected_ammo);

      // AMMO BORDER
      canvasContext.drawImage(
        ammo_border,
        this.x_buffer + 20,
        this.text_height - 1,
        20,
        10
      );

      // AMMO COUNTER
      for (var i = 0; i < ammo; i++) {
        canvasContext.drawImage(
          ammo_counter,
          0,
          0 + 8 * selected_ammo_index,
          4,
          7,
          this.x_buffer + 22 + i * 4,
          this.text_height,
          3,
          7
        );
      }

      // AMMO SELECTION
      renderFont(
        this.ammo_type_map[player.selected_ammo],
        this.x_buffer + 45,
        this.text_height
      );

      // FLOOR COUNT
      if (currentLevel <= this.floor_levels.length - 1) {
        renderFont(
          `FLOOR ${this.floor_levels.length - currentLevel}`,
          this.x_buffer + 170,
          this.text_height
        );
      } else {
        canvasContext.drawImage(
          escape_text,
          this.x_buffer + 170,
          this.text_height - 1
        );
      }
    }
  };
}
