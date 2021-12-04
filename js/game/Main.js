var canvas, canvasContext;
// Practice commit from Cooper, will remove
var player = new playerClass();
var gamepad = new GamepadSupport();
var bullets = new Array();
var enemies = new Array();
var entities = new Array();
var buttons = new Array();
var editor = new EditorClass();
var ui;

editor.initiateUI();
buttons = [...editor.toolBarOptions, ...editor.paletteOptions];

const EDIT_MODE = "EDIT_MODE";
const PLAY_MODE = "PLAY_MODE";
var currentMode = PLAY_MODE;

const characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!.? ";
const charMap = {};
for (var i = 0; i < characterSet.length; i++) {
  charMap[characterSet[i]] = i * 8;
}

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  canvasContext.font = "8px Arial";

  colorRect(0, 0, canvas.width, canvas.height, "white");
  colorText("LOADING IMAGES", canvas.width / 2, canvas.height / 2, "white");

  setupUI();
  loadImages();
  initSounds();
};

function imageLoadingDoneSoStartGame() {
  var framesPerSecond = 60;
  setInterval(updateAll, 1000 / framesPerSecond);

  setupInput();

  loadLevel(levels[0].level_map);
}

function spawnEnemy(direction) {
  enemy = new enemyClass();
  enemies.push(enemy);
  enemy.reset(enemyPic);
  enemy.direction = direction;
}

function setupUI() {
  var height = WORLD_H * 4;
  var width = canvas.width;
  var x = 0,
    y = canvas.height - height;

  ui = new UIClass(x, y, width, height, player);
}

function spawnEntity() {
  ent = new warpClass();
  entities.push(ent);
  ent.reset();
}

function setupEnemies(level) {
  currentEnemy = 0;
  level.forEach((tile, index) => {
    if (tile === TILE_ENEMY) {
      spawnEnemy(levels[currentLevel].enemies[currentEnemy]);
      currentEnemy++;
      level[index] = TILE_GROUND;
    }
  });
}

function setupEntities(level) {
  level.forEach((tile, index) => {
    if (tile === TILE_WARP) {
      spawnEntity();
      level[index] = TILE_GROUND;
    }
  });

  // set warp points
  entities.forEach(function (entity) {
    entityPosition = entities.indexOf(entity);
    if (entityPosition !== -1) {
      entity.link =
        entities[entityPosition + 1] ||
        entities[entityPosition - 1] ||
        undefined;
    }
  });
}

function loadLevel(whichLevel) {
  worldGrid = whichLevel.slice();
  player.reset(playerImage, "Blue");
  player.ammo = levels[currentLevel].ammo;
  enemies = [];
  entities = [];
  setupEnemies(worldGrid);
  setupEntities(worldGrid);
}

function updateAll() {
  switch (currentMode) {
    case PLAY_MODE:
      gamepad.update();
      moveAll();
      player.update();
      drawAll();
      break;
    case EDIT_MODE:
      editor.update();
      drawAll();
      break;
    default:
      break;
  }
}

function moveAll() {
  player.move();
  bullets.forEach(function (bullet) {
    bullet.move();
  });
  enemies.forEach(function (enemy) {
    enemy.move();
  });
}

function drawAll() {
  switch (currentMode) {
    case PLAY_MODE:
      drawWorld();
      bullets.forEach(function (bullet) {
        bullet.draw();
      });
      enemies.forEach(function (enemy) {
        enemy.draw();
      });
      entities.forEach(function (entity) {
        entity.draw();
      });
      player.draw();
      ui.draw();
      break;
    case EDIT_MODE:
      drawWorld();
      editor.draw();
      break;
    default:
      break;
  }
}
