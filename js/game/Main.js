var canvas, canvasContext;

const GAME_SPEED = 60;

var player = new playerClass();
var gamepad = new GamepadSupport();
var bullets = new Array();
var enemies = new Array();
var entities = new Array();
var buttons = new Array();
var effects = new Array();
var hazards = new Array();
var walls = new Array();
var triggers = new Array();

var editor = new EditorClass();
var ui;

entities.push(my_switch);
hazards.push(my_laser);
triggers.push(trigger);

editor.resetUI();
buttons = [...editor.toolBarOptions, ...menuList[editor.currentMenu]];

var currentMode = PLAY_MODE;

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
  window.requestAnimationFrame(updateAll);

  setupInput();

  loadLevel(levels[0].level_map);
}

function spawnEnemy(config, type = LEAPER) {
  switch (type) {
    case LEAPER:
      enemy = new LeaperClass();
      break;
    case FLYER:
      enemy = new FlyerClass();
      break;
    case HUNTER:
      enemy = new HunterClass();
      break;
    case BLOCKER:
      enemy = new BlockerClass();
      break;
  }
  enemies.push(enemy);
  enemy.reset(enemy.image);
  enemy.direction = config.direction;
}

function spawnHazard(config = { orientation: HORIZONTAL }, type = LASER) {
  switch (type) {
    case WINDOW:
      hazard = new WindowClass();
      break;
    case LASER:
      hazard = new LaserClass();
      break;
    case CAMERA:
      hazard = new CameraClass();
      break;
    case TURRET:
      hazard = new TurretClass();
      break;
  }

  hazards.push(hazard);
  hazard.reset();
  hazard.orientation = config?.orientation;
  console.log("SPAWN HAZARD: ", hazard);
}

function spawnWall(config, type = NORMAL) {
  switch (type) {
    case NORMAL_WALL:
      wall = new WallClass();
      break;
    case ELECTRIC:
      wall = new ElectricWallClass();
      break;
    case STURDY:
      break;
    case BOUNCE:
      break;
  }
  walls.push(wall);
  wall.reset();
  wall.direction = config.direction ? config.direction : 0;
}

function spawnEffect(x, y, type = EXPLOSION) {
  switch (type) {
    case EXPLOSION:
      effect = new effectClass(x, y, wallDestructionSheet, 1);
      break;
    case LEAPER_DIE:
      effect = new effectClass(x, y, leaperDestructionSheet);
      break;
  }
  // console.log("spawned new effect with:", effect.x, effect.y);
  effect.animator.currentAnimationFrame = 0;
  effects.push(effect);
}

function setupUI() {
  var height = WORLD_H * 2;
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
    switch (tile) {
      case TILE_LEAPER:
        spawnEnemy(levels[currentLevel].enemies[currentEnemy], LEAPER);
        currentEnemy++;
        level[index] = TILE_GROUND;
        break;

      case TILE_HUNTER:
        spawnEnemy(levels[currentLevel].enemies[currentEnemy], HUNTER);
        currentEnemy++;
        level[index] = TILE_GROUND;
        break;

      case TILE_BLOCKER:
        spawnEnemy(levels[currentLevel].enemies[currentEnemy], BLOCKER);
        currentEnemy++;
        level[index] = TILE_GROUND;
        break;

      default:
        break;
    }
  });
}

function setupHazards(level) {
  level.forEach((tile, index) => {
    switch (tile) {
      case TILE_LASER:
        spawnHazard({ orientation: HORIZONTAL }, LASER);
        level[index] = TILE_GROUND;
        break;

      case TILE_WINDOW_V:
      case TILE_WINDOW_H:
      case TILE_TURRET:
      case TILE_CAMERA:
        break;

      default:
        break;
    }
  });
}

function setupWalls(level) {
  level.forEach((tile, index) => {
    switch (tile) {
      case TILE_ELEC_WALL:
        spawnWall({ direction: 0 }, ELECTRIC);
        level[index] = TILE_GROUND;
        break;

      case TILE_WALL:
        break;

      default:
        break;
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
  player.reset(playerSheet, "Player");
  player.ammo = levels[currentLevel].starting_ammo;
  enemies = [];
  setupEnemies(worldGrid);
  setupWalls(worldGrid);
  setupHazards(worldGrid);
  setupEntities(worldGrid);
}

function updateAll(dt) {
  switch (currentMode) {
    case PLAY_MODE:
      gamepad.update(dt);
      moveAll(dt);
      player.update(dt);
      enemies.forEach((enemy) => enemy.update(dt));
      triggers.forEach((trigger) => trigger.update(dt));
      walls.forEach((wall) => wall.update(dt));
      entities.forEach((ent) => ent.update(dt));
      hazards.forEach((haz) => haz.update(dt));
      drawAll(dt);
      break;
    case EDIT_MODE:
      editor.update(dt);
      drawAll(dt);
      break;
    default:
      break;
  }
  window.requestAnimationFrame(updateAll);
}

function moveAll() {
  player.move();
  bullets.forEach(function (bullet) {
    bullet.move();
  });
  enemies.forEach(function (enemy) {
    enemy.move();
  });
  effects.forEach(function (effect) {
    effect.update();
  });
  hazards.forEach(function (hazard) {
    if (hazard.hasOwnProperty("move")) {
      hazard.move();
    }
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
      walls.forEach(function (wall) {
        wall.draw();
      });
      effects.forEach(function (effect) {
        effect.draw();
      });
      hazards.forEach(function (hazard) {
        hazard.draw();
      });

      player.draw();
      ui.draw();
      break;

    case EDIT_MODE:
      drawWorld();
      enemies.forEach(function (enemy) {
        enemy.draw();
      });
      hazards.forEach(function (hazard) {
        hazard.draw();
      });
      editor.draw();
      ui.draw();
      break;

    default:
      break;
  }
}
