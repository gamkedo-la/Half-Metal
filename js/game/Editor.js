// Construct top level menus and buttons th
const menuList = {};
const subMenus = ["enemies", "shots", "walls", "hazards"];
subMenus.forEach((sub) => {
  // Return an array of buttons for each submenu item
  menuList[sub] = CONSTANTS[sub]?.map((constant) => {
    return new ButtonClass(...[, , , ,], constant, ...[, ,], () => {
      console.log("Clicked " + constant);
    });
  });

  // Ensure each submenu has a Back button
  menuList[sub].push(
    new ButtonClass(...[, , , ,], "BACK", ...[, ,], () => {
      editor.goToMenu("palette");
    })
  );
});
menuList.palette = [
  new ButtonClass(...[, , , ,], "ENEMY", ...[, ,], () => {
    editor.goToMenu("enemies");
  }),
  new ButtonClass(...[, , , ,], "SHOTS", ...[, ,], () => {
    console.log("Clicked SHOTS");
    editor.goToMenu("shots");
  }),
  new ButtonClass(...[, , , ,], "WALLS", ...[, ,], () => {
    console.log("Clicked WALLS");
    editor.goToMenu("walls");
  }),
  new ButtonClass(...[, , , ,], "HAZARD", ...[, ,], () => {
    console.log("Clicked HAZARD");
    editor.goToMenu("hazards");
  }),
];

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
    }),
    new ButtonClass(...[, , , ,], "PLAY", ...[, ,], () => {
      currentMode = PLAY_MODE;
    }),
  ];
  this.paletteOptions = [
    new ButtonClass(...[, , , ,], "ENEMY", ...[, ,], () => {
      console.log("Clicked ENEMIES");
    }),
    new ButtonClass(...[, , , ,], "SHOTS", ...[, ,], () => {
      console.log("Clicked SHOTS");
    }),
    new ButtonClass(...[, , , ,], "WALLS", ...[, ,], () => {
      console.log("Clicked WALLS");
    }),
    new ButtonClass(...[, , , ,], "HAZARD", ...[, ,], () => {
      console.log("Clicked HAZARD");
    }),
    new ButtonClass(...[, , , ,], "TILES", ...[, ,], () => {
      console.log("Clicked TILES");
    }),
    new ButtonClass(...[, , , ,], "PLAYER", ...[, ,], () => {
      console.log("Clicked PLAYER");
    }),
  ];
  this.currentPalette = [];
  this.showLevelNameModal = false;
  this.showSelectLevelModal = false;
  this.levelNameModal = {
    header: "Level Name",
    handler: () => {
      console.log("Clicked level name button");
    },
  };
  this.showSelectLevelModal = {
    header: "Select Level",
    handler: () => {
      console.log("Loading level");
    },
    levels: [],
  };
  this.showEditor = false;
  this.currentMenu = "palette";

  this.deactivateMenuButtons = function () {
    menuList[this.currentMenu].forEach((button) => (button.active = false));
  };

  this.goToMenu = function (menu) {
    this.deactivateMenuButtons();
    this.currentMenu = menu;
    buttons = [...this.toolBarOptions, ...menuList[menu]];
    this.resetUI();
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
    this.toolBarOptions.forEach((option) => {
      option.draw();
    });
    menuList[this.currentMenu].forEach((option) => {
      option.draw();
    });
  };
}
