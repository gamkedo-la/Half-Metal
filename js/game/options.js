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
  const options_config = {
    buttons: [
      new ButtonClass(...[, , , ,], "VOLUME", ...[, ,], () => {
        console.log("Volume clicked");
      }),
      new ButtonClass(
        ...[, , , ,],
        "FULLSCREEN",
        ...[, ,],
        () => {
          fullscreen_mode = !fullscreen_mode;
        },
        ...[, ,],
        "OFF"
      ),
      new ButtonClass(
        ...[, , , ,],
        "SPEEDRUN TIMER",
        ...[, ,],
        () => {
          speedrun_mode = !speedrun_mode;
        },
        ...[, ,],
        "OFF"
      ),
      new ButtonClass(...[, , , ,], "BACK", ...[, ,], () => {
        menu_stack.pop();
      }),
    ],
    name: "Options",
    button_start_x: 60,
    button_start_y: 80,
    show_name: true,
  };

  MenuClass.call(this, options_config);

  this.updateButtonValues = function () {
    buttons.forEach((button) => {
      switch (button.label) {
        case "FULLSCREEN":
          button.value = fullscreen_mode ? "ON" : "OFF";
          break;
        case "SPEEDRUN TIMER":
          button.value = speedrun_mode ? "ON" : "OFF";
          break;
        case "VOLUME":
          break;
      }
    });
  };

  this.update = function () {
    this.updateButtonValues();
    var button_y_margin = 30;
    this.buttons.forEach((button, index) => {
      button.x = this.button_start.x;
      button.y = this.button_start.y + button.height + button_y_margin * index;
      button.active = true;
    });
  };
}
