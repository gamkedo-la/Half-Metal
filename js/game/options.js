function Options() {
  let input = document.createElement("input");
  input.type = "range";
  input.id = "audio volume slider";
  input.name = "audio volume slider";
  input.min = "0";
  input.max = "100";
  input.value = "0";
  input.style.position = "absolute";
  input.style.zIndex = "1";
  input.style.left = "50%";
  input.style.top = "20%";
  input.style.display = "contents";
  document.body.appendChild(input);
  input = "audio volume slider";
  this.button_start_x = 60;
  this.button_start_y = 60;
  const options_config = {
    buttons: [
      new ButtonClass(
        ...[, , , ,],
        "<",
        ...[, ,],
        () => {
          console.log("Volume down clicked");
          master_volume -= 0.1;
          if (master_volume < 0) {
            master_volume = 0;
          }
          console.log(master_volume);
        },
        ...[, , ,],
        "down"
      ),
      new ButtonClass(
        ...[, , , ,],
        ">",
        ...[, ,],
        () => {
          console.log("Volume Up clicked");
          master_volume += 0.1;
          if (master_volume > 1) {
            master_volume = 1;
          }
          console.log(master_volume);
        },
        ...[, , ,],
        "up"
      ),
      new ButtonClass(
        ...[, , , ,],
        "FULLSCREEN:",
        ...[, ,],
        () => {
          fullscreen_mode = !fullscreen_mode;
          if (fullscreen_mode) {
            canvas.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
        },
        ...[, ,],
        "OFF"
      ),
      new ButtonClass(
        ...[, , , ,],
        "SPEEDRUN TIMER:",
        ...[, ,],
        () => {
          speedrun_mode = !speedrun_mode;
        },
        ...[, ,],
        "OFF"
      ),
      new ButtonClass(...[, , , ,], "BACK", ...[, ,], () => {
        menu_stack.pop();
        this.deactivateMenuButtons();
      }),
    ],
    name: "Options",
    button_start_x: this.button_start_x,
    button_start_y: this.button_start_y,
    show_name: true,
  };

  MenuClass.call(this, options_config);

  this.updateButtonValues = function () {
    buttons.forEach((button) => {
      switch (button.label) {
        case "FULLSCREEN:":
          button.value = fullscreen_mode ? "ON" : "OFF";
          break;
        case "SPEEDRUN TIMER:":
          button.value = speedrun_mode ? "ON" : "OFF";
          break;
      }
    });
  };

  // For rendering labels not attached to a specific button
  this.renderExtraText = function () {
    // Small bit of adjustment to align the volume text with the buttons
    var button_align_y = 2;

    // Use volume button as reference point for volume text placement
    var volume_up = this.buttons.find((button) => button.id === "up");
    renderFont("VOLUME:", this.button_start_x, volume_up.y + button_align_y);

    // Volume value adjusted to a portion of 100, length is used for relative positioning
    var volume_string = (master_volume.toFixed(1) * 100).toString();
    var volume_string_width = volume_string.length * 8;
    renderFont(
      volume_string,
      volume_up.x - volume_string_width - 10,
      volume_up.y + button_align_y
    );
  };

  this.update = function () {
    this.updateCursor();
    this.updateButtonValues();
    var button_y_margin = 30;
    this.buttons.forEach((button, index) => {
      button.active = true;
      button.x = this.button_start.x;
      button.y = this.button_start.y + button.height + button_y_margin * index;

      // Keep volume up and volume down buttons at the same height
      if (button.id === "up" || button.id === "down") {
        button.y = this.button_start.y + button.height + button_y_margin;
        return;
      }
    });

    // Repositioning volume buttons
    var volume_up = this.buttons.find((button) => button.id === "up");
    var volume_down = this.buttons.find((button) => button.id === "down");
    volume_down.x = this.button_start_x + 60;
    volume_up.x = volume_down.x + volume_down.width + 40;
  };
}
