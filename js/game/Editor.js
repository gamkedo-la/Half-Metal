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
  ],
};

// Construct submenus based on Game Object types defined in Constants.js.
const subMenus = ["enemies", "shots", "walls", "hazards"];
subMenus.forEach((sub) => {
  // Return an array of buttons for each submenu item
  menuList[sub] = CONSTANTS[sub]?.map((constant) => {
    return new ButtonClass(...[, , , ,], constant, ...[, ,], () => {
      console.log("Clicked " + constant);
      console.log(ENEMIES);
      console.log(OBJECT_MAP[constant]);
      editor.selectedTile = OBJECT_MAP[constant];
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
    console.log("clicked cells");
  }),
  new ButtonClass(...[, , , ,], "ARMORY", ...[, ,], () => {
    console.log("clicked armory");
  }),
  new ButtonClass(...[, , , ,], "PROCESS", ...[, ,], () => {
    console.log("clicked processing center");
  }),
  new ButtonClass(...[, , , ,], "YARD", ...[, ,], () => {
    console.log("clicked courtyard");
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

  this.draw = function () {
    colorRect(this.x, this.y, this.width, this.height, this.color);
    renderFont(this.label, this.x + this.paddingX, this.y + this.paddingY);
  };
}

// BEHAVIOR:
// Open editor - DONE
// Select submenu - DONE
// Select object type - DONE
// Render object as cursor image
// Select tile to place object - DONE
// Press 'R' to rotate object
// Replace tile in level map with new selectedTile - DONE
// Add the object to the appropriate configurations array
// Configs:
// --- Enemies: [{direction, position, type}...],
// --- Walls: [{orientation, position, type}...],
// --- Hazards: [{orientation, position, type, triggers}...],
// --- Shots: [{position}...],
// Reset the level with new configurations
// Select tileset from menu
// Update all tiles to match current set
// Set some tiles as solid/passable/etc

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
      console.log("Clicked SAVE");
      console.log(this.level_config);
    }),
    new ButtonClass(...[, , , ,], "PLAY", ...[, ,], () => {
      currentMode = PLAY_MODE;
    }),
  ];
  this.showEditor = false;
  this.currentMenu = "palette";
  this.selectedTile = -1;
  this.level_config = new BaseLevelClass();
  this.current_tileset = cell_tileset;

  this.deactivateMenuButtons = function () {
    menuList[this.currentMenu].forEach((button) => (button.active = false));
  };

  this.goToMenu = function (menu) {
    this.deactivateMenuButtons();
    this.currentMenu = menu;
    buttons = [...this.toolBarOptions, ...menuList[menu]];
    this.resetUI();
  };

  this.drawCurrentTileset = function () {
    var x = 110;
    var y = 192;

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
          x + (TILE_WIDTH + 1) * j, // x
          y + (TILE_HEIGHT + 1) * i, // y
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

  this.update = function () {};

  this.draw = function () {
    if (this.selectedTile > -1) {
      var tile_image = image_list.find((img) => img.tile === this.selectedTile);

      canvasContext.drawImage(
        tile_image?.var_name,
        0,
        0,
        tile_image?.width ?? 16,
        tile_image?.height ?? 16,
        mouseX - (tile_image?.width / 2 || 8),
        mouseY - (tile_image?.height / 2 || 8),
        tile_image?.width ?? 16,
        tile_image?.height ?? 16
      );
    }

    this.toolBarOptions.forEach((option) => {
      option.draw();
    });
    menuList[this.currentMenu].forEach((option) => {
      option.draw();
    });

    this.drawCurrentTileset();
  };
}
