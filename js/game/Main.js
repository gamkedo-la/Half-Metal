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
var finished_level = false;
cutscene.dialogue = [
  "TEST LINE TEST LINE TEST LINE TEST LINE TEST LINE TEST LINE",
  "TEST LINE B",
  "TEST LINE C",
];
var ui;
var test_prompt = new TutorialPromptClass({
  prompt: TUTORIAL_TEXT[1],
});

// TUTORIAL PROMPTS
var walk_prompt = new TutorialPromptClass({
  prompt: TUTORIAL_TEXT[0],
  control: "move",
});
var shoot_prompt = new TutorialPromptClass({
  prompt: TUTORIAL_TEXT[1],
  control: "shoot",
});
var switch_prompt = new TutorialPromptClass({
  prompt: TUTORIAL_TEXT[2],
  control: "switch",
  level_name: "2-1",
});
var prompts = [switch_prompt, shoot_prompt, walk_prompt];

// Menus
var title_screen = new TitleMenu();
var level_select_screen = new LevelSelectClass({ name: "Select Level" });
var options_screen = new Options();
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
  ...options_screen.buttons,
  ...level_select_screen.buttons,
];

var currentMode = CUTSCENE_MODE;

var current_song = {};

// Set to true if you want to turn off the music temporarily
var song_playing = false;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  canvasContext.font = "8px Arial";

  colorRect(0, 0, canvas.width, canvas.height, "black");
  colorText("LOADING IMAGES", canvas.width / 2, canvas.height / 2, "white");

  setupUI();
  loadImages();
  setupInput();
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
var clickedYet = false;

function imageLoadingDoneSoStartGame() {
  window.requestAnimationFrame(loop);

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

function spawnTransition(config) {
  var new_transition = new FadeClass(config);
  effects.push(new_transition);

  return new_transition;
}

function fadeTransitionBetweenLevels() {
  if (finished_level) {
    level_fade_out = spawnTransition({ animation: "fade-out" });
    level_fade_out.opacity = 0;
    playSound(sounds.level_transition);

    level_fade_out.onFadeComplete = function () {
      level_fade_out.removeSelf();
      spawnTransition({ animation: "fade-in" });
      goToNextLevel();
    };

    level_fade_out.draw();

    finished_level = false;
  }
}

function setupUI() {
  var height = WORLD_H * 2;
  var width = canvas.width;
  var prompt_buffer = 20;
  var x = 0,
    y = canvas.height - height;

  ui = new UIClass(x, y, width, height, player);

  prompts.forEach(function (prompt) {
    prompt.x = canvas.width / 2 - prompt.background_width / 2;
    prompt.y = ui.y - prompt.background_height - prompt_buffer;
  });
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

function goToNextLevel() {
  currentLevel++;
  level = { ...levels[currentLevel] };
  loadLevel(level.level_map);
  finished_level = false;
  player.touched_goal = false;
}

function checkForTutorialProgress() {
  if (prompts.length === 0) return;

  var current_prompt = prompts[prompts.length - 1];

  switch (level.name) {
    case "1-1":
      // PROMPT 1
      if (
        (player.keyHeld_East ||
          player.keyHeld_North ||
          player.keyHeld_West ||
          player.keyHeld_South) &&
        current_prompt.control === "move"
      ) {
        prompts.pop();
      }

      // PROMPT 2
      if (player.keyHeld_Shoot && current_prompt.control === "shoot") {
        prompts.pop();
      }

      break;
    case "2-1":
      // PROMPT 2
      if (player.currentAmmoIndex > 0 && current_prompt.control === "switch") {
        prompts.pop();
      }
      break;
    default:
      break;
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
      checkForTutorialProgress();

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
      break;

    case MENU_MODE:
      menu_stack[menu_stack.length - 1].update();
      break;

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

function sortLevelsByName() {
  const sorted_levels = levels.sort((a, b) => {
    var number_a = parseInt(a.name.split("-")[1], 10);
    var number_b = parseInt(b.name.split("-")[1], 10);

    console.log(number_a, number_b);

    return number_a > number_b ? 1 : -1;
  });

  console.log(sorted_levels);
}

var opacity = 1;

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

      // PROMPTS
      if (prompts.length > 0) {
        prompts[prompts.length - 1].draw();
      }

      // LEVEL TRANSITION
      fadeTransitionBetweenLevels();
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
      break;

    case MENU_MODE:
      menu_stack[menu_stack.length - 1].draw();
      break;

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
