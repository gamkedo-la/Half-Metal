var canvas, canvasContext;

const GAME_SPEED = 60;

// OPTIONS
var speedrun_mode = false;
var play_time = 0;
var fullscreen_mode = false;
var master_volume = 1;
var paused = false;

// GAME OBJECTS
var player = new playerClass();
var bullets = new Array();
var enemies = new Array();
var entities = new Array();
var buttons = new Array();
var effects = new Array();
var hazards = new Array();
var walls = new Array();
var triggers = new Array();
var game_objects = new Array();
var all_objects_spawned = false;

// INPUTS
var gamepad = new GamepadSupport();

// TOOLS
var editor = new EditorClass();
var ui;

// CUTSCENES
var cutscene = new CutsceneClass();
var finished_level = false;
cutscene.dialogue = DIALOGUE[0];
var test_prompt = new TutorialPromptClass({
  prompt: TUTORIAL_TEXT[1],
});

function checkForCutscene() {
  if (currentMode === PLAY_MODE && levels[currentLevel]?.scene) {
    const current_scene = SCENES.find(
      (scene) => scene.id === levels[currentLevel].scene
    );
    cutscene.dialogue = current_scene.lines;
    cutscene.song = current_scene.song;
    cutscene.beats = current_scene.beats;
    cutscene.current_line = 0;
    cutscene.current_char = 0;
    levels[currentLevel].scene = null;
    currentMode = CUTSCENE_MODE;
  }
}

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
  level_name: "2-9",
});
var prompts = [switch_prompt, shoot_prompt, walk_prompt];

// MENUS
var title_screen = new TitleMenu();
var level_select_screen = new LevelSelectClass({ name: "Select Level" });
var options_screen = new Options();
var credits_screen = new Credits();
//var credits_screen = new MenuClass({ name: "Credits" });
//var controls_screen = new MenuClass({ name: "Controls" });
var controls_screen = new Controls();
var pause_screen = new PauseMenu({ name: "Pause" });
var menu_stack = [title_screen]; // Data structure for navigating menus

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
  ...credits_screen.buttons,
  ...controls_screen.buttons,
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
  if (game_object.type === ELECTRIC) {
    game_object.state = config?.state;
  }
  if (config?.x && config?.y) {
    game_object.x = config?.x;
    game_object.y = config?.y;
  }

  return game_object;
}

// PAUSE/UNPAUSE
function pauseGame() {
  currentMode = MENU_MODE;
  menu_stack.push(pause_screen);
  playSound(sounds.pause);
  paused = true;
}

function unpauseGame() {
  currentMode = PLAY_MODE;
  menu_stack.pop();
  playSound(sounds.pause);
  paused = false;
}

// SOUND CONTROLS
function playMusic() {
  let playbackRate = 1;
  let pan = 0;
  let volume = 0.5;
  let loop = true;

  if (!song_playing && currentMode === MENU_MODE) {
    if (sounds["title_music"]) {
      current_song = playSound(
        sounds["title_music"],
        playbackRate,
        pan,
        volume,
        loop
      );
      song_playing = true;
    }
    return;
  }

  if (!song_playing && currentMode === CUTSCENE_MODE) {
    if (sounds[cutscene.song]) {
      current_song = playSound(
        sounds[cutscene.song],
        playbackRate,
        pan,
        volume,
        loop
      );
      song_playing = true;
    }
    return;
  }

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

function playSong(song, loop) {
  let playbackRate = 1;
  let pan = 0;
  let volume = 0.5;

  if (!song_playing && sounds[song]) {
    current_song = playSound(sounds[song], playbackRate, pan, volume, loop);
    song_playing = true;
  }
}

function stopMusic() {
  current_song.sound.stop();
  song_playing = false;
}

// SPAWNING
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

  all_objects_spawned = true;
}

// TRANSITIONS/EFFECTS
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

// UI
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

// LOADING
function loadLevel(whichLevel) {
  world_grid = whichLevel.slice();
  player.reset(playerSheet, "Player");
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

// LEVEL DEBUG TOOLS
function goToNextLevel() {
  currentLevel++;
  level = { ...levels[currentLevel] };
  editor.currentMap.length = 0;
  loadLevel(level.level_map);
  finished_level = false;
  player.touched_goal = false;
}

function goToPrevLevel() {
  currentLevel--;
  level = { ...levels[currentLevel] };
  editor.currentMap.length = 0;
  loadLevel(level.level_map);
  finished_level = false;
  player.touched_goal = false;
}

function getLevelName() {
  console.log(levels[currentLevel].name);
}

function getLevel(name) {
  const found_level = levels.find((lev) => lev.name === name);
  if (found_level) {
    return found_level;
  }
  console.log("Level not found");
}

function setLevelName(new_name) {
  levels[currentLevel].name = new_name;
}

function goToLevel(level_index) {
  editor.currentMap.length = 0;
  level = { ...levels[level_index] };
  loadLevel(level.level_map);
  finished_level = false;
  player.touched_goal = false;
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

function goToLevelByName(name) {
  const found_level = levels.find((lev) => lev.name === name);
  const found_idx = levels.indexOf(found_level);
  if (found_level && found_idx) {
    currentLevel = found_idx;
    goToLevel(found_idx);
  } else {
    console.log("Level not found");
  }
}

function getSectionLevels(section) {
  return levels.filter((lev) => lev.name.split("-")[0] === section);
}

function renameLevelSection(section) {
  const section_levels = getSectionLevels(section);
  const renamed_levels = section_levels.map((lev, i) => {
    lev.name = `${section}-${i + 1}`;
    return lev;
  });
  console.log(renamed_levels);
}

function swapLevels(lev_a, lev_b) {
  // Get levels A and B
  const level_a = getLevel(lev_a);
  const level_b = getLevel(lev_b);
  const index_a = levels.indexOf(level_a);
  const index_b = levels.indexOf(level_b);
  let temp = undefined;

  // Simple temp swap
  temp = { ...level_a };
  levels[index_a] = level_b;
  levels[index_b] = temp;
}

function updateLevels() {
  // Get current editor level
  editor.level_config.level_map = [...editor.currentMap];
  editor.level_config.tile_map = [...levels[currentLevel].tile_map];
  editor.level_config.tileset = editor.current_tileset;

  // Get level list
  const target_level_name = editor.level_config.name;
  const section = target_level_name.split("-")[0];
  const section_levels = getSectionLevels(section);

  // Replace previous level entry with new level config
  const target_level = section_levels.find(
    (level) => level.name === target_level_name
  );
  const target_level_index = section_levels.indexOf(target_level);
  section_levels[target_level_index] = editor.level_config;

  // Output revised level list
  console.log(section_levels);
}

// TUTORIALS
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

// GROUP LOOP FUNCTIONS
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
      menu_stack.forEach((menu) => menu.deactivateMenuButtons());
      editor.deactivateButtons();

      ui.update();
      playSong(levels[currentLevel].song, true);
      checkForTutorialProgress();
      checkForCutscene();
      break;

    case EDIT_MODE:
      gamepad.update(dt);
      editor.update(dt);
      if (current_song.sound) {
        stopMusic();
      }
      break;

    case CUTSCENE_MODE:
      playSong(cutscene.song, true);
      gamepad.update(dt);
      cutscene.update(dt);
      break;

    case MENU_MODE:
      var active_menu = menu_stack[menu_stack.length - 1];
      gamepad.update(dt);
      editor.deactivateButtons();
      menu_stack.forEach((menu) => menu.deactivateMenuButtons());
      menu_stack[menu_stack.length - 1].update();

      if (active_menu.name === "Title") {
        playSong("title_music", true);
      }
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

      if (currentLevel === levels.length - 1 && enemies.length === 1) {
        // FADE TRANSITION INTO FINAL SCENE
        stopMusic();
        const current_scene = SCENES.find((scene) => scene.id === "outro");
        cutscene.dialogue = current_scene.lines;
        cutscene.song = current_scene.song;
        cutscene.beats = current_scene.beats;
        cutscene.current_line = 0;
        cutscene.current_char = 0;
        levels[currentLevel].scene = null;
        currentMode = CUTSCENE_MODE;
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

// CORE GAME LOOP
function loop(dt) {
  if (speedrun_mode) {
    play_time += dt;
  }

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
