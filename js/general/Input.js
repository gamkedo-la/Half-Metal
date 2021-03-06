const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_RESET = 81;
const KEY_PLUS = 107; //plus on numpad
const KEY_MINUS = 109; //minus on numpad

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

const KEY_SPACE = 32;
const KEY_X = 88;
const KEY_V = 86;

const KEY_L = 76;

const KEY_T = 84;

const KEY_ENTER = 13;

// undo and redo
const KEY_U = 85;
const KEY_R = 82;

var Key_L_Held = false;
var KEY_V_Held = false;

var Key_U_Held = false;
var Key_R_Held = false;
var key_T_Held = false;
var key_X_held = false;

var key_enter_held = false;
var key_space_held = false;

var key_up_held = false;
var key_down_held = false;
var key_left_held = false;
var key_right_held = false;

var mouseX = 0;
var mouseY = 0;
var unscaledMouseX = -1,
  unscaledMouseY = -1;

function setupInput() {
  canvas.addEventListener("mousemove", updateMousePos);
  canvas.addEventListener("mousedown", mousePressed);

  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);

  player.setupInput(
    KEY_UP_ARROW,
    KEY_RIGHT_ARROW,
    KEY_DOWN_ARROW,
    KEY_LEFT_ARROW,
    KEY_SPACE,
    KEY_X,
    KEY_W,
    KEY_D,
    KEY_S,
    KEY_A
  );
}

function map(v, n1, n2, m1, m2) {
  return ((v - n1) / (n2 - n1)) * (m2 - m1) + m1;
}

function updateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  if (fullscreen_mode) {
    var x, y;
    var element = evt.target;
    let br = element.getBoundingClientRect();
    let ratio = window.innerHeight / canvas.height;
    let offset = (window.innerWidth - canvas.width * ratio) / 2;
    x = map(
      evt.clientX - br.left - offset,
      0,
      canvas.width * ratio,
      0,
      element.width
    );
    y = map(evt.clientY - br.top, 0, canvas.height * ratio, 0, element.height);

    mouseX = x;
    mouseY = y;
    return;
  }

  unscaledMouseX = evt.clientX - rect.left - root.scrollLeft;
  unscaledMouseY = evt.clientY - rect.top - root.scrollTop;

  mouseX = Math.floor((unscaledMouseX * GAME_W) / SCALED_W);
  mouseY = Math.floor((unscaledMouseY * GAME_H) / SCALED_H);
}

function editorMapClick(mX, mY) {
  console.log(
    "editorMapClick at " +
      mX +
      "," +
      mY +
      ". Selected tile: " +
      editor.selected_tile_type
  );

  if (editor.selected_tile_type < 0) {
    console.log("editorMapClick ignored: no selected tile.");
    return;
  }

  var tileIndex = getTileIndexAtPixelCoord(mX, mY);

  // Capture editor data before change
  if (levelHistory.length === 0) {
    // this has an issue with not capturing something important, perhaps tile info
    // so the redraw is off
    editor.level_config.level_map = editor.currentMap.slice();
    levelHistory.push(JSON.stringify(editor.level_config));
  }

  // Update tile map
  if (editor.layer === "tile") {
    editor.level_config.tile_map[tileIndex] = editor.selected_tile_type;
    level.tile_map[tileIndex] = editor.selected_tile_type;
  }

  // Update level map
  if (editor.layer !== "tile") {
    // If changing player start point, remove previous point
    if (editor.selected_tile_type === TILE_PLAYERSTART) {
      var player_start_index = editor.currentMap.indexOf(TILE_PLAYERSTART);
      editor.currentMap[player_start_index] = TILE_GROUND;
      level.level_map[player_start_index] = TILE_GROUND;
      level.level_map[tileIndex] = TILE_PLAYERSTART;
      player.x = mX;
      player.y = mY;
    }

    // Place new tile selection
    editor.currentMap[tileIndex] = editor.selected_tile_type;
    editor.level_config.level_map = editor.currentMap;
    world_grid = editor.currentMap.slice();

    // Get the object type of the new tile
    const type = Object.keys(OBJECT_MAP).find(
      (key) => OBJECT_MAP[key] === editor.selected_tile_type
    );
    const config = editor.level_config;

    const config_obj = { ...editor.current_config };
    config_obj.type = type;
    config_obj.position = { x: mX, y: mY };
    config_obj.array_index = tileIndex;

    // Place a fresh config object into the appropriate config array
    if (ENEMIES.includes(type)) {
      config.enemies.push(config_obj);
    }
    if (HAZARDS.includes(type)) {
      config.hazards.push(config_obj);
    }
    if (WALLS.includes(type)) {
      config.walls.push(config_obj);
    }
    if (SHOTS.includes(type)) {
      config.shots.push(config_obj);
    }

    // Respawn enemies
    initGameObjects(world_grid);
    console.log(world_grid);
    player.reset(playerSheet, "Player");
  }

  currentLevelCheck = JSON.stringify(editor.level_config);

  // Check if we need to update the undo/redo stack, push if necessary
  if (currentLevelCheck != lastLevelCheck) {
    levelHistory.push(currentLevelCheck);
    lastLevelCheck = currentLevelCheck;
    levelHistoryIndex++;
  }
}

function getObjectAtMouseCoord(mX, mY) {
  return game_objects.find(
    (object) =>
      mX >= mX &&
      mX <= object.x + object.width &&
      mY >= mY &&
      mY <= object.y + object.height
  );
}

function deleteEditorTile() {
  // Get tile at mouse coordinates
  var tileIndex = getTileIndexAtPixelCoord(mouseX, mouseY);
  console.log("tileIndex");
  console.log(tileIndex);

  if (editor.layer === "tile") {
    return;
  }

  if (editor.layer !== "tile") {
    // Get the game object at that tile
    var object = getObjectAtMouseCoord(mouseX, mouseY);

    // Remove configuration from the all collections
    editor.level_config.enemies = editor.level_config.enemies.filter(
      (config) => config?.array_index !== tileIndex
    );
    editor.level_config.hazards = editor.level_config.hazards.filter(
      (config) => config?.array_index !== tileIndex
    );
    editor.level_config.walls = editor.level_config.walls.filter(
      (config) => config?.array_index !== tileIndex
    );
    editor.level_config.shots = editor.level_config.shots.filter(
      (config) => config?.array_index !== tileIndex
    );

    // Remove the game object from the appropriate collection
    var index = game_objects.indexOf(object);
    game_objects.splice(index, 1);
    delete object;

    // Remove the tile from all maps
    editor.currentMap[tileIndex] = 0;
    editor.level_config.level_map = editor.currentMap;
    world_grid = editor.currentMap.slice();

    // Respawn enemies
    initGameObjects(world_grid);
    player.reset(playerSheet, "Player");
  }
}

function mousePressed() {
  console.log("Clicked at " + mouseX + ", " + mouseY);
  if (clickedYet == false) {
    if (allImagesLoaded) {
      clickedYet = true;
      initSounds();
      imageLoadingDoneSoStartGame();
    }
    return;
  }
  var over_button = false;

  // Check if the user has clicked any of the UI buttons
  buttons.forEach((button) => {
    if (
      mouseX > button.x &&
      mouseX < button.x + button.width &&
      mouseY > button.y &&
      mouseY < button.y + button.height &&
      button.active
    ) {
      button.handler();
      over_button = true;
    }
  });

  // Check if user has clicked any of the tiles on the current tileset palette
  editor.tiles.forEach((tile) => {
    if (
      mouseX > tile.x &&
      mouseX < tile.x + tile.width &&
      mouseY > tile.y &&
      mouseY < tile.y + tile.height
    ) {
      editor.layer = "tile";
      editor.selected_tile_type = tile.tile_type;
      editor.selected_tile = tile;
      over_button = true;
    }
  });

  if (over_button) return;

  if (currentMode === EDIT_MODE) editorMapClick(mouseX, mouseY);
}

function keySet(keyEvent, setTo) {
  if (currentMode === MENU_MODE) {
    if (keyEvent.keyCode === KEY_LEFT_ARROW) {
      key_left_held = setTo;
    }
    if (keyEvent.keyCode === KEY_RIGHT_ARROW) {
      key_right_held = setTo;
    }
    if (keyEvent.keyCode === KEY_UP_ARROW) {
      key_up_held = setTo;
    }
    if (keyEvent.keyCode === KEY_DOWN_ARROW) {
      key_down_held = setTo;
    }

    if (keyEvent.keyCode === KEY_X) {
      key_X_held = setTo;
    }
    if (keyEvent.keyCode === KEY_SPACE) {
      key_space_held = setTo;
    }
  }

  if (currentMode === CUTSCENE_MODE) {
    if (keyEvent.keyCode === KEY_X) {
      cutscene.key_next_held = setTo;
    }

    if (keyEvent.keyCode === KEY_ENTER) {
      cutscene.key_skip_held = true;
    }

    return;
  }

  if (currentMode === EDIT_MODE && keyEvent.keyCode === KEY_V) {
    if (!KEY_V_Held) {
      editor.toggleButtonVisibility();
    }

    if (keyEvent.keyCode == KEY_V) {
      KEY_V_Held = setTo;
    }
  }

  if (currentMode === EDIT_MODE && keyEvent.keyCode === KEY_X) {
    if (!key_X_held) {
      deleteEditorTile();
      console.log("deleteEditorTile called");
    }

    if (keyEvent.keyCode == KEY_X) {
      key_X_held = setTo;
    }
  }

  if (currentMode === EDIT_MODE && keyEvent.keyCode === KEY_T) {
    key_T_Held = setTo;
  }

  if (keyEvent.keyCode === KEY_ENTER) {
    key_enter_held = setTo;
  }

  if (key_T_Held) {
    editor.current_config.direction += 90;

    if (editor.current_config.direction >= 360) {
      editor.current_config.direction = 0;
    }

    editor.current_config.orientation =
      editor.current_config.orientation === HORIZONTAL ? VERTICAL : HORIZONTAL;

    key_T_Held = false;
  }

  if (key_enter_held && keyEvent.keyCode === KEY_ENTER) {
    if (!paused && currentMode === PLAY_MODE) {
      pauseGame();
      key_enter_held = false;
    } else if (paused && currentMode === MENU_MODE) {
      unpauseGame();
      key_enter_held = false;
    }
  }

  if (
    keyEvent.keyCode == player.controlKeyLeft ||
    keyEvent.keyCode == player.controlKeyLeft2
  ) {
    player.keyHeld_West = setTo;
  }
  if (
    keyEvent.keyCode == player.controlKeyRight ||
    keyEvent.keyCode == player.controlKeyRight2
  ) {
    player.keyHeld_East = setTo;
  }
  if (
    keyEvent.keyCode == player.controlKeyUp ||
    keyEvent.keyCode == player.controlKeyUp2
  ) {
    player.keyHeld_North = setTo;
  }
  if (
    keyEvent.keyCode == player.controlKeyDown ||
    keyEvent.keyCode == player.controlKeyDown2
  ) {
    player.keyHeld_South = setTo;
  }
  if (keyEvent.keyCode == player.controlKeyShoot) {
    player.keyHeld_Shoot = setTo;

    if (!keyEvent.repeat) {
      player.keyPressed_Shoot = setTo;
    }
  }
  if (keyEvent.keyCode == KEY_RESET) {
    loadLevel(levels[currentLevel].level_map);
  }
  if (keyEvent.keyCode == KEY_PLUS) {
    currentLevel++;
    if (currentLevel <= levels.length - 1) {
      loadLevel(levels[currentLevel].level_map);
    } else {
      currentLevel--;
    }
  }
  if (keyEvent.keyCode == KEY_MINUS) {
    currentLevel--;
    if (currentLevel >= 0) {
      loadLevel(levels[currentLevel].level_map);
    } else {
      currentLevel++;
    }
  }

  if (keyEvent.keyCode == KEY_L && !Key_L_Held) {
    if (currentMode === PLAY_MODE) {
      // ENTER EDIT MODE
      currentMode = EDIT_MODE;
      loadLevel(editor.currentMap);
    } else {
      // ENTER PLAY MODE
      currentMode = PLAY_MODE;
    }
  }

  if (keyEvent.keyCode == KEY_U && !Key_U_Held) {
    if (currentMode === EDIT_MODE) {
      // call undo function
      console.log("pressed undo");
      undoChange();
    }
  }

  if (keyEvent.keyCode == KEY_R && !Key_R_Held) {
    if (currentMode === EDIT_MODE) {
      // call redo function
      console.log("pressed redo");
      redoChange();
    }
  }

  if (keyEvent.keyCode == KEY_L) {
    Key_L_Held = setTo;
  }

  if (keyEvent.keyCode == KEY_U) {
    Key_U_Held = setTo;
  }

  if (keyEvent.keyCode == KEY_R) {
    Key_R_Held = setTo;
  }

  if (keyEvent.keyCode == player.controlKeySwitchAmmo) {
    player.keyHeld_Switch_Ammo = setTo;
  }
}

function keyPressed(evt) {
  console.log("Key pressed: " + evt.keyCode);

  keySet(evt, true);

  evt.preventDefault();
}

function keyReleased(evt) {
  keySet(evt, false);
}
