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

var mouseX = 0;
var mouseY = 0;

function setupInput() {
  canvas.addEventListener("mousemove", updateMousePos);

  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);

  player.setupInput(
    KEY_UP_ARROW,
    KEY_RIGHT_ARROW,
    KEY_DOWN_ARROW,
    KEY_LEFT_ARROW,
    KEY_SPACE
  );
}

function updateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;
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
}

function keyPressed(evt) {
  console.log("Key pressed: " + evt.keyCode);
  keySet(evt, true);

  evt.preventDefault();
}

function keyReleased(evt) {
  // console.log("Key pressed: "+evt.keyCode);
  keySet(evt, false);
}
