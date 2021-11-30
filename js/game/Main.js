var canvas, canvasContext;

var player = new playerClass();
var gamepad = new GamepadSupport();
var bullets = new Array();
var enemies = new Array();
var entities = new Array();

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  colorRect(0, 0, canvas.width, canvas.height, "white");
  colorText("LOADING IMAGES", canvas.width / 2, canvas.height / 2, "white");

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
  gamepad.update();
  moveAll();
  player.update();
  drawAll();
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
}
