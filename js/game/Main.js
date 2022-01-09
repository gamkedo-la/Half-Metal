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
var game_objects = new Array();
var editor = new EditorClass();
var cutscene = new CutsceneClass();
cutscene.dialogue = [
  "TEST LINE A",
  "TEST LINE B",
  "TEST LINE C",
];
var ui;

editor.resetUI();
buttons = [...editor.toolBarOptions, ...menuList[editor.currentMenu]];

var currentMode = EDIT_MODE;
var state_stack = [];
var play_state = {};
var scene_state = {};
var menu_state = {};
var pause_state = {};
var edit_state = {};

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

function randomizelevel() {
  console.log("Randomizing Level!");

  // FIXME:
  // we need to fake a mouse click to edit world data!
  // this likely breaks "config objects" (????)
  let randomLevelData = generateRandomLevel();

  console.log("Randomizing");
  console.log(randomLevelData);

  editor.currentMap = randomLevelData;
  editor.level_config.level_map = randomLevelData;
  worldGrid = randomLevelData;
  initGameObjects(worldGrid);

  console.log("Random level generated successfully.");
}

function imageLoadingDoneSoStartGame() {
  window.requestAnimationFrame(loop);

  setupInput();

  loadLevel(levels[0].level_map);
}

function spawnGameObject(config, type) {
  var game_object;

  // Get a corresponding object from the collection in ObjectData.js
  var current_object = OBJECT_COLLECTION.find((obj) => obj.type === type);

  // Instantiate the Game Object based on the associated class in the OBJECT_COLLECTION
  if (current_object) {
    game_object = new current_object.class();
  }

  // If no game_object is found, end the function early
  if (!game_object) return;

  // Assign instance of spawned class to the correct collection
  if (ENEMIES.includes(type)) {
    enemies.push(game_object);
  }
  if (WALLS.includes(type)) {
    walls.push(game_object);
  }
  if (HAZARDS.includes(type)) {
    hazards.push(game_object);
  }

  // Set instance to default state
  game_object?.reset();

  // Apply configurations to instance
  game_object.direction = config?.direction;
  game_object.orientation = config?.orientation;
  if (config?.x && config?.y) {
    game_object.x = config?.x;
    game_object.y = config?.y;
  }

  return game_object;
}

function spawnEffect(x, y, type = EXPLOSION) {
  switch (type) {
    case EXPLOSION:
      effect = new effectClass(x, y, wallDestructionSheet, 1);
      break;

    case DESTROY_STURDY_WALL:
      effect = new effectClass(x, y, sturdyWallDestructionSheet, 1);
      break;

    case LEAPER_DIE:
      effect = new effectClass(x, y, leaperDestructionSheet);
      break;

    case FLYER_DIE:
      effect = new effectClass(x, y, flyer_destruction_sheet);
      break;

    case SHATTER:
      effect = new effectClass(x, y, windowDestructionSheet, 1);
      break;
  }

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

function initGameObjects(level) {
  level.forEach((tile, index) => {
    if (tile === TILE_WALL) return;

    var object_type = Object.keys(OBJECT_MAP).find((key) => {
      return OBJECT_MAP[key] === tile;
    });

    if (object_type) {
      spawnGameObject({ orientation: HORIZONTAL, direction: 90 }, object_type);
    }
  });
}

function loadLevel(whichLevel) {
  worldGrid = whichLevel.slice();
  player.reset(playerSheet, "Player");
  player.ammo = levels[currentLevel].starting_ammo;
  enemies.length = 0;
  hazards.length = 0;
  bullets.length = 0;
  entities.length = 0;
  effects.length = 0;
  walls.length = 0;
  triggers.length = 0;

  initGameObjects(worldGrid);
}

function updateAll(dt) {
  switch (currentMode) {
    case PLAY_MODE:
      gamepad.update(dt);
      moveAll(dt);
      game_objects.forEach((object) => {
        if (object?.update) {
          object.update(dt);
        }
      });
      break;

    case EDIT_MODE:
      gamepad.update(dt);
      editor.update(dt);
      break;

    case CUTSCENE_MODE:
      cutscene.update(dt);

    default:
      break;
  }
}

function moveAll() {
  game_objects.forEach(function (object) {
    if (object?.move) {
      object.move();
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

      player.draw();

      hazards.forEach(function (hazard) {
        hazard.draw();
      });

      ui.draw();
      break;

    case EDIT_MODE:
      drawWorld();
      drawTileset();

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

      player.draw();

      hazards.forEach(function (hazard) {
        hazard.draw();
      });

      ui.draw();
      editor.draw();
      break;

    case CUTSCENE_MODE:
      cutscene.draw();

    default:
      break;
  }
}

function loop(dt) {
  game_objects = [
    player,
    ...enemies,
    ...triggers,
    ...walls,
    ...entities,
    ...hazards,
    ...bullets,
    ...effects,
  ];
  updateAll(dt);
  drawAll(dt);
  window.requestAnimationFrame(loop);
}
