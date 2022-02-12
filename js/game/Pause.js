function PauseMenu() {
  const pause_config = {
    buttons: [
      new ButtonClass(...[, , , ,], "RESUME", ...[, ,], () => {
        currentMode = PLAY_MODE;
        this.deactivateMenuButtons();
        unpauseGame();
      }),
    ],
    name: "Pause",
    button_start_x: 87,
    button_start_y: 125,
    show_name: true,
  };

  MenuClass.call(this, pause_config);
}
