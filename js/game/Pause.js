function PauseMenu() {
  const pause_config = {
    buttons: [
      new ButtonClass(...[, , , ,], "RESUME", ...[, ,], () => {
        currentMode = PLAY_MODE;
        menu_stack.pop();
      }),
    ],
    name: "Pause",
    button_start_x: 87,
    button_start_y: 125,
  };

  MenuClass.call(this, pause_config);
}
