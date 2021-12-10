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

const KEY_L = 76;

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
    KEY_X
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

function mousePressed() {
  console.log("Clicked at " + mouseX + ", " + mouseY);
  console.log(buttons);
  buttons.forEach((button) => {
    if (
      mouseX > button.x &&
      mouseX < button.x + button.width &&
      mouseY > button.y &&
      mouseY < button.y + button.height &&
      button.active
    ) {
      button.handler();
    }
  });
}

function keySet(keyEvent, setTo) {
  if (keyEvent.keyCode == player.controlKeyLeft) {
    player.keyHeld_West = setTo;
  }
  if (keyEvent.keyCode == player.controlKeyRight) {
    player.keyHeld_East = setTo;
  }
  if (keyEvent.keyCode == player.controlKeyUp) {
    player.keyHeld_North = setTo;
  }
  if (keyEvent.keyCode == player.controlKeyDown) {
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
  if (keyEvent.keyCode == KEY_L) {
    currentMode = EDIT_MODE;
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
