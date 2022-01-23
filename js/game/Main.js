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
cutscene.dialogue = ["TEST LINE A", "TEST LINE B", "TEST LINE C"];
var ui;

// Menus
var title_screen = new TitleMenu();
var level_select_screen = new MenuClass({ name: "Select Level" });
var options_screen = new MenuClass({ name: "Options" });
var credits_screen = new MenuClass({ name: "Credits" });
var controls_screen = new MenuClass({ name: "Controls" });
var pause_screen = new PauseMenu({ name: "Pause" });

// Data structure for navigating menus
var menu_stack = [title_screen];

//
var level = new BaseLevelClass();

editor.resetUI();
editor.initTileset();
buttons = [
  ...editor.toolBarOptions,
  ...menuList[editor.currentMenu],
  ...title_screen.buttons,
  ...pause_screen.buttons,
];

var currentMode = MENU_MODE;

var current_song = {};

// Set to true if you want to turn off the music temporarily
var song_playing = false;

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
  world_grid = randomLevelData;
  initGameObjects(world_grid);

  console.log("Random level generated successfully.");
}

function imageLoadingDoneSoStartGame() {
  window.requestAnimationFrame(loop);

  setupInput();

  // Shallow copy of current level
  level = { ...levels[currentLevel] };

  loadLevel(level.level_map);
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

function playMusic() {
  let playbackRate = 1;
  let pan = 0;
  let volume = 0.5;
  let loop = true;

  if (!song_playing && sounds[level.song] !== undefined) {
    current_song = playSound(
      sounds[level.song],
      playbackRate,
      pan,
      volume,
      loop
    );
    song_playing = true;
  }
}

function stopMusic() {
  current_song.sound.stop();
  song_playing = false;
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

function initGameObjects(map) {
  const configurations = [
    ...level.walls,
    ...level.enemies,
    ...level.shots,
    ...level.hazards,
  ];

  map.forEach((tile, index) => {
    var object_type = Object.keys(OBJECT_MAP).find((key) => {
      return OBJECT_MAP[key] === tile;
    });

    var object_config = configurations.find(
      (config) => config?.array_index === index
    );

    if (object_type) {
      spawnGameObject(object_config, object_type);
    }
  });
}

function loadLevel(whichLevel) {
  world_grid = whichLevel.slice();
  player.reset(playerSheet, "Player");
  player.ammo = levels[currentLevel].starting_ammo;
  enemies.length = 0;
  hazards.length = 0;
  bullets.length = 0;
  entities.length = 0;
  effects.length = 0;
  walls.length = 0;
  triggers.length = 0;

  initGameObjects(world_grid);

  if (editor.currentMap.length === 0) {
    editor.currentMap = whichLevel.slice();
    editor.level_config = { ...level };
    return;
  }
}

function updateAll(dt) {
  if (currentMode !== MENU_MODE) {
    menu_stack.forEach((menu) => menu.deactivateMenuButtons());
  }

  switch (currentMode) {
    case PLAY_MODE:
      gamepad.update(dt);
      moveAll(dt);
      game_objects.forEach((object) => {
        if (object?.update) {
          object.update(dt);
        }
      });

      playMusic();
      break;

    case EDIT_MODE:
      gamepad.update(dt);
      editor.update(dt);
      if (current_song.sound) {
        stopMusic();
      }
      break;

    case CUTSCENE_MODE:
      cutscene.update(dt);

    case MENU_MODE:
      menu_stack[menu_stack.length - 1].update();

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
      // Lower layer
      drawTilesetLowerLayer(level);
      drawWorld();

      game_objects
        .sort(function (a, b) {
          return a.y - b.y;
        })
        .forEach(function (object) {
          object.draw();
        });

      // Upper layer
      drawTilesetUpperLayer(level);
      ui.draw();
      break;

    case EDIT_MODE:
      // Lower layer
      drawTilesetLowerLayer(level);
      drawWorld();

      game_objects
        .sort(function (a, b) {
          return a.y - b.y;
        })
        .forEach(function (object) {
          object.draw();
        });

      // Upper layer
      drawTilesetUpperLayer(level);

      ui.draw();
      editor.draw();
      break;

    case CUTSCENE_MODE:
      cutscene.draw();

    case MENU_MODE:
      menu_stack[menu_stack.length - 1].draw();

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
