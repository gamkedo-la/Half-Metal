const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_RESET = 81;
const KEY_NEXT = 69;
const KEY_PREV = 87;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

const KEY_SPACE = 32;
const KEY_X = 88;
const KEY_V = 86;

const KEY_L = 76;

var Key_L_Held = false;
var KEY_V_Held = false;

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

function updateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

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

  if (editor.layer === "tile") {
    tileSetGrid[tileIndex] = editor.selected_tile_type;
    initGameObjects(worldGrid);
    return;
  }

  // Update level map to match the editor's version
  editor.currentMap[tileIndex] = editor.selected_tile_type;
  editor.level_config.level_map = editor.currentMap;
  worldGrid = editor.currentMap;

  // get the object type of the new tile
  const type = Object.keys(OBJECT_MAP).find(
    (key) => OBJECT_MAP[key] === editor.selected_tile_type
  );
  const config = editor.level_config;
  const config_obj = { ...config.default_object_config };
  config_obj.type = type;
  config_obj.position = { x: mX, y: mY };

  // place a fresh config object into the appropriate config array
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

  // respawn enemies
  initGameObjects(worldGrid);
}

function mousePressed() {
  console.log("Clicked at " + mouseX + ", " + mouseY);
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
  if (currentMode === CUTSCENE_MODE) {
    if (keyEvent.keyCode === KEY_X) {
      cutscene.key_next_held = setTo;
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
  if (keyEvent.keyCode == KEY_NEXT) {
    currentLevel++;
    if (currentLevel <= levels.length - 1) {
      loadLevel(levels[currentLevel].level_map);
    } else {
      currentLevel--;
    }
  }
  if (keyEvent.keyCode == KEY_PREV) {
    currentLevel--;
    if (currentLevel >= 0) {
      loadLevel(levels[currentLevel].level_map);
    } else {
      currentLevel++;
    }
  }

  if (keyEvent.keyCode == KEY_L && !Key_L_Held) {
    if (currentMode === PLAY_MODE) {
      currentMode = EDIT_MODE;
      editor.currentMap = worldGrid.slice();
    } else {
      currentMode = PLAY_MODE;
    }
  }

  if (keyEvent.keyCode == KEY_L) {
    Key_L_Held = setTo;
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
