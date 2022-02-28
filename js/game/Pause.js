function PauseMenu() {
  const pause_config = {
    buttons: [
      new ButtonClass(...[, , , ,], "RESUME", ...[, ,], () => {
        currentMode = PLAY_MODE;
        this.deactivateMenuButtons();
        unpauseGame();
      }),
      new ButtonClass(...[, , , ,], "CONTROLS", ...[, ,], () => {
        menu_stack.push(controls_screen);
      }),
      new ButtonClass(...[, , , ,], "OPTIONS", ...[, ,], () => {
        menu_stack.push(options_screen);
      }),
      new ButtonClass(...[, , , ,], "AMMO: POWER SHOT", ...[, ,], () => {
        player.switchToAmmo(NORMAL);
      }),
    ],
    name: "Pause",
    button_start_x: 87,
    button_start_y: 125,
    show_name: true,
  };

  MenuClass.call(this, pause_config);
}
