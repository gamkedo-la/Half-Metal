function TitleMenu() {
  // BUTTONS
  const new_game = new ButtonClass(...[, , , ,], "NEW GAME", ...[, ,], () => {
    console.log("Clicked new game");
    currentMode = 'PLAY_MODE';
  });

  const select_level = new ButtonClass(
    ...[, , , ,],
    "select level",
    ...[, ,],
    () => {
      console.log("Clicked select level");
    }
  );

  const options = new ButtonClass(...[, , , ,], "options", ...[, ,], () => {
    console.log("Clicked options");
  });

  const credits = new ButtonClass(...[, , , ,], "credits", ...[, ,], () => {
    console.log("Clicked credits");
  });

  const controls = new ButtonClass(...[, , , ,], "controls", ...[, ,], () => {
    console.log("Clicked controls");
  });

  // CONFIGURATION
  const title_config = {
    name: "Title",
    buttons: [new_game, select_level, options, credits, controls],
    button_start_x: 87,
    button_start_y: 125,
  };

  // SUPER CONSTRUCTOR
  MenuClass.call(this, title_config);
}
