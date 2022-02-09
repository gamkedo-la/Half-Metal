function LevelSelectClass() {
  // BUTTONS
  const buttons = [];
  const floors = [...CELL_LEVELS, ARMORY_LEVELS, PROCESSING_LEVELS];
  var floor_count = floors.length;

  // Count down floor numbers for all levels inside the prison
  floors.forEach((l, index) => {
    console.log(index);
    console.log(currentLevel);
    var level_button = new ButtonClass(
      ...[, , , ,],
      `FLOOR ${floor_count}`,
      ...[, ,],
      () => {
        currentMode = "PLAY_MODE";
        currentLevel = index;
        level = { ...levels[currentLevel] };
        loadLevel(level.level_map);
      }
    );
    floor_count--;
    buttons.push(level_button);
  });

  // CONFIGURATION
  const level_select_config = {
    name: "LEVEL SELECT",
    buttons: [
      ...buttons,
      new ButtonClass(...[, , , ,], "BACK", ...[, ,], () => {
        menu_stack.pop();
      }),
    ],
    button_start_x: 87,
    button_start_y: 20,
  };

  // SUPER CONSTRUCTOR
  MenuClass.call(this, level_select_config);
}
