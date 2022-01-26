// Construct top level menu and buttons
const menuList = {
  palette: [
    new ButtonClass(...[, , , ,], "ENEMY", ...[, ,], () => {
      editor.goToMenu("enemies");
    }),
    new ButtonClass(...[, , , ,], "SHOTS", ...[, ,], () => {
      editor.goToMenu("shots");
    }),
    new ButtonClass(...[, , , ,], "WALLS", ...[, ,], () => {
      editor.goToMenu("walls");
    }),
    new ButtonClass(...[, , , ,], "HAZARD", ...[, ,], () => {
      editor.goToMenu("hazards");
    }),
    new ButtonClass(...[, , , ,], "RANDOM", ...[, ,], () => {
      randomizelevel();
    }),
    new ButtonClass(...[, , , ,], "TILES", ...[, ,], () => {
      // go to tile set menu
      editor.goToMenu("tiles");
    }),
    new ButtonClass(...[, , , ,], "GOAL", ...[, ,], () => {
      // go to tile set menu
      // editor.goToMenu("tiles");
      editor.selected_tile_type = TILE_GOAL;
    }),
  ],
};

// Functions to keep world grid and the current level data in sync with editor
function syncLevelData() {
  world_grid = editor.currentMap.slice();
  level = { ...editor.level_config };
}

function loadEditorData() {
  level = { ...levels[currentLevel] };
  editor.currentMap =
    editor.currentMap.length === 0 ? world_grid.slice() : editor.currentMap;
  editor.level_config = { ...level };
}

function updateEditorData(property, change) {
  editor.level_config[property] = change;
  syncLevelData();
}

// some global variables to deal with undo/redo
var currentLevelCheck;
var lastLevelCheck;
var levelHistory = [];
var levelHistoryIndex = 0;

function undoChange() {
  if (levelHistoryIndex > 0 && levelHistory.length > 0) {
    levelHistoryIndex--;
    console.log("undoing, index now ", levelHistoryIndex);

    editor.level_config = JSON.parse(levelHistory[levelHistoryIndex]);
    editor.level_config.tileset = editor.current_tileset;
    editor.currentMap = editor.level_config.level_map.slice();
    world_grid = editor.level_config.level_map.slice();
    level = { ...editor.level_config };

    loadLevel(world_grid);
  }
}

function redoChange() {
  if (levelHistoryIndex <= levelHistory.length - 2) {
    levelHistoryIndex++;
    console.log("redoing");

    editor.level_config = JSON.parse(levelHistory[levelHistoryIndex]);
    editor.level_config.tileset = editor.current_tileset;
    editor.currentMap = editor.level_config.level_map.slice();
    world_grid = editor.level_config.level_map;
    level = { ...editor.level_config };

    loadLevel(world_grid);
  }
}

// Construct submenus based on Game Object types defined in Constants.js.
const subMenus = ["enemies", "shots", "walls", "hazards"];
subMenus.forEach((sub) => {
  // Return an array of buttons for each submenu item
  menuList[sub] = CONSTANTS[sub]?.map((constant) => {
    return new ButtonClass(...[, , , ,], constant, ...[, ,], () => {
      console.log("Clicked " + constant);
      editor.layer = "world";
      editor.selected_tile_type = OBJECT_MAP[constant];
      editor.current_config = { ...editor.level_config.default_object_config };
      editor.current_config.type = constant;
      console.log(editor.current_config);
    });
  });

  // Ensure each submenu has a Back button
  menuList[sub].push(
    new ButtonClass(...[, , , ,], "BACK", ...[, ,], () => {
      console.log("Clicked back");
      editor.goToMenu("palette");
    })
  );
});

menuList["tiles"] = [
  new ButtonClass(...[, , , ,], "CELLS", ...[, ,], () => {
    editor.current_tileset = cell_tileset;
    level.tileset = cell_tileset;
    editor.updateTileset();
  }),
  new ButtonClass(...[, , , ,], "ARMORY", ...[, ,], () => {
    editor.current_tileset = armory_tileset;
    level.tileset = armory_tileset;
    editor.updateTileset();
  }),
  new ButtonClass(...[, , , ,], "PROCESS", ...[, ,], () => {
    editor.current_tileset = processing_tileset;
    level.tileset = processing_tileset;
    editor.updateTileset();
  }),
  new ButtonClass(...[, , , ,], "YARD", ...[, ,], () => {
    editor.current_tileset = courtyard_tileset;
    level.tileset = courtyard_tileset;
    editor.updateTileset();
  }),
  new ButtonClass(...[, , , ,], "BACK", ...[, ,], () => {
    console.log("Clicked back");
    editor.goToMenu("palette");
  }),
];

// Define button functionality
function ButtonClass(
  height = 12,
  width = 10,
  x = 0,
  y = 0,
  label = "TEXT",
  color = "black",
  textColor = "white",
  handler,
  paddingX = 2,
  paddingY = 2
) {
  this.label = label;
  this.height = height;
  this.width = this.label.length * width;
  this.x = x;
  this.y = y;
  this.color = color;
  this.handler = handler;
  this.paddingX = paddingX;
  this.paddingY = paddingY;
  this.textColor = textColor;
  this.active = false;
  this.visible = true;

  this.draw = function () {
    if (this.visible) {
      colorRect(this.x, this.y, this.width, this.height, this.color);
      renderFont(this.label, this.x + this.paddingX, this.y + this.paddingY);
    }
  };
}

// BEHAVIOR:
// Open editor - DONE
// Select submenu - DONE
// Select object type - DONE
// Render object as cursor image
// Select tile to place object - DONE
// Press 'R' to rotate object - DONE
// Replace tile in level map with new selected_tile_type - DONE
// Add the object to the appropriate configurations array - DONE
// Configs:
// --- Enemies: [{direction, position, type}...],
// --- Walls: [{orientation, position, type}...],
// --- Hazards: [{orientation, position, type, triggers}...],
// --- Shots: [{position}...],
// Reset the level with new configurations
// Select tileset from menu - DONE
// Place tiles in editor - DONE
// Update all tiles to match current set - DONE
// Set some tiles as solid/passable/etc - DONE

// Main renderer and contoller of the Editor UI
function EditorClass() {
  this.currentLevel = 0;
  this.currentMap = [];
  this.toolBarOptions = [
    new ButtonClass(...[, , , ,], "NEW", ...[, ,], () => {
      this.currentMap = [...baseLevel];
      loadLevel(this.currentMap);
    }),
    new ButtonClass(...[, , , ,], "LOAD", ...[, ,], () => {
      console.log("Clicked LOAD");
    }),
    new ButtonClass(...[, , , ,], "SAVE", ...[, ,], () => {
      this.level_config.level_map = [...this.currentMap];
      this.level_config.tile_map = [...levels[currentLevel].tile_map];
      this.level_config.tileset = this.current_tileset;
      console.log(this.level_config);
    }),
    new ButtonClass(...[, , , ,], "PLAY", ...[, ,], () => {
      currentMode = PLAY_MODE;
    }),
  ];
  this.showEditor = false;
  this.currentMenu = "palette";
  this.selected_tile_type = -1;
  this.selected_tile = {};
  this.level_config = new BaseLevelClass();
  this.current_tileset = cell_tileset;
  this.current_config = {};
  this.tiles = [];
  this.layer = "world";
  this.tileset_start_x = 2;
  this.tileset_start_y = 208;

  this.deactivateMenuButtons = function () {
    menuList[this.currentMenu].forEach((button) => (button.active = false));
  };

  this.toggleButtonVisibility = function () {
    buttons.forEach((button) => {
      button.active = !button.active;
      button.visible = !button.visible;
    });
  };

  this.goToMenu = function (menu) {
    this.deactivateMenuButtons();
    this.currentMenu = menu;
    buttons = [...this.toolBarOptions, ...menuList[menu]];
    this.resetUI();
  };

  this.initTileset = function () {
    var tile_type = 0;
    this.tiles.length = 0;

    // Store the properties of each tile in the set
    for (var i = 0; i < TILE_ROWS; i++) {
      for (var j = 0; j < TILE_COLS; j++) {
        this.tiles.push({
          x: this.tileset_start_x + (TILE_WIDTH + 1) * j,
          y: this.tileset_start_y + (TILE_HEIGHT + 1) * i,
          width: TILE_WIDTH,
          height: TILE_HEIGHT,
          tileset_x: TILE_WIDTH * j,
          tileset_y: TILE_HEIGHT * i,
          tile_type,
        });
        tile_type++;
      }
    }
  };

  this.drawCurrentTileset = function () {
    // Cut tile set into 16x16 slices
    for (var i = 0; i < TILE_ROWS; i++) {
      for (var j = 0; j < TILE_COLS; j++) {
        // Render each slice as a grid
        canvasContext.drawImage(
          // Tileset image
          this.current_tileset,

          // Tile cut
          j * TILE_WIDTH, // x
          i * TILE_HEIGHT, // y
          TILE_WIDTH, // w
          TILE_HEIGHT, // h

          // Canvas
          // Include buffer space between grid elements
          this.tileset_start_x + (TILE_WIDTH + 1) * j, // x
          this.tileset_start_y + (TILE_HEIGHT + 1) * i, // y
          TILE_WIDTH, // w
          TILE_HEIGHT // h
        );
      }
    }
  };

  this.resetUI = function () {
    var buttonX = 0;
    var buttonY = 0;
    this.toolBarOptions.forEach((option) => {
      option.y = buttonY;
      option.x = buttonX;
      buttonX = buttonX + option.label.length * 12;
      option.active = true;
    });

    buttonX = 200;
    buttonY = 0;
    menuList[this.currentMenu].forEach(function (option) {
      option.x = buttonX;
      option.y = buttonY;
      buttonY += option.height;
      option.width = 56;
      option.active = true;
    });
  };

  this.updateTileset = function () {
    this.level_config.tileset = this.current_tileset;
    levels[currentLevel] = this.level_config;
    console.log(levels[currentLevel]);
  };

  this.update = function () {};

  this.draw = function () {
    if (this.selected_tile_type > -1) {
      var tile_image;
      switch (this.layer) {
        case "world":
          tile_image = image_list.find(
            (img) => img.tile === this.selected_tile_type
          );

          // Get object and animation data with the current config direction
          const object_frame_data = FRAME_DATA[this.current_config.type];

          // Only use frame data when an object has multiple frames to
          const frames = object_frame_data
            ? object_frame_data[
                `walk-${DIRECTION_MAP[this.current_config.direction]}`
              ]
            : [];

          // Draw current selection at mouse position
          canvasContext.drawImage(
            tile_image ? tile_image?.var_name : invisible_wall,
            frames.length === 0 ? 0 : frames[0].x,
            frames.length === 0 ? 0 : frames[0].y,
            tile_image?.width ?? 16,
            tile_image?.height ?? 16,
            mouseX - (tile_image?.width / 2 || 8),
            mouseY - (tile_image?.height / 2 || 8),
            tile_image?.width ?? 16,
            tile_image?.height ?? 16
          );
          break;
        case "tile":
          // Render each slice as a grid
          canvasContext.drawImage(
            // Tileset image
            this.current_tileset,

            // Tile cut
            this.selected_tile.tileset_x, // x
            this.selected_tile.tileset_y, // y
            TILE_WIDTH, // w
            TILE_HEIGHT, // h

            // Canvas
            mouseX - TILE_WIDTH / 2, // x
            mouseY - TILE_HEIGHT / 2, // y
            TILE_WIDTH, // w
            TILE_HEIGHT // h
          );
          break;
        default:
          break;
      }
    }

    // Tool bar for PLAY, SAVE, LOAD, etc
    this.toolBarOptions.forEach((option) => {
      option.draw();
    });

    // Menu of lists of game objects
    menuList[this.currentMenu].forEach((option) => {
      option.draw();
    });

    // Tileset palette
    this.drawCurrentTileset();
  };
}
