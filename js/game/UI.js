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
      renderFont("AMMO ", this.x_buffer, this.text_height);
      renderFont(
        player.ammo.toString(10),
        this.x_buffer + 40,
        this.text_height
      );
      renderFont("TYPE ", this.x_buffer + 80, this.text_height);
      renderFont(
        this.ammo_type_map[player.selected_ammo],
        this.x_buffer + 120,
        this.text_height
      );
    }
  };
}
