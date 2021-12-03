function ButtonClass(
  height = 12,
  width = 16,
  x,
  y,
  label = "TEXT",
  color = "black",
  textColor = "white",
  handler,
  paddingX = 0,
  paddingY = 0
) {
  this.height = height;
  this.width = width;
  this.x = x;
  this.y = y;
  this.label = label;
  this.color = color;
  this.handler = handler;
  this.paddingX = paddingX;
  this.paddingY = paddingY;
  this.textColor = textColor;

  this.draw = function () {
    colorRect(this.x, this.y, this.width, this.height, this.color);
    colorText(this.label, this.x + paddingX, this.y + paddingY, this.textColor);
  };
  this.buttonHandler = function () {};
}

function EditorClass() {
  this.currentLevel = 0;
  this.currentMap = [];
  this.toolBarOptions = [
    {
      label: "NEW",
      handler: () => {
        this.currentMap = [...baseLevel];
        loadLevel(this.currentMap);
      },
    },
    {
      label: "LOAD",
      handler: () => {
        console.log("Clicked LOAD");
      },
    },
    {
      label: "SAVE",
      handler: () => {
        console.log("Clicked SAVE");
      },
    },
    {
      label: "PLAY",
      handler: () => {
        currentMode = PLAY_MODE;
      },
    },
  ];
  this.paletteOptions = [
    {
      label: "ENEMY",
      pallete: [],
      handler: () => {
        console.log("Clicked ENEMIES");
      },
    },
    {
      label: "SHOTS",
      pallete: [],
      handler: () => {
        console.log("Clicked SHOTS");
      },
    },
    {
      label: "WALLS",
      pallete: [],
      handler: () => {
        console.log("Clicked WALLS");
      },
    },
    {
      label: "HAZARD",
      pallete: [],
      handler: () => {
        console.log("Clicked HAZARD");
      },
    },
    {
      label: "TILES",
      pallete: [],
      handler: () => {
        console.log("Clicked TILES");
      },
    },
    {
      label: "PLAYER",
      pallete: [],
      handler: () => {
        console.log("Clicked PLAYER");
      },
    },
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

  this.initiateUI = function () {
    this.toolBarOptions.forEach(function (option) {
      option.height = 12;
      option.width = option.label.length * 10;
    });

    this.paletteOptions.forEach(function (option) {
      option.height = 12;
      option.width = option.label.length * 10;
    });
  };

  this.update = function () {};

  this.drawButtonBackgroundLayer = function () {
    //   TOOLBAR
    var buttonX = 0;
    var buttonY = 0;
    this.toolBarOptions.forEach((option) => {
      option.y = buttonY;
      option.x = buttonX;
      colorRect(buttonX, option.y, option.width, 12, "black");
      buttonX = buttonX + option.label.length * 12;
    });

    //   PALETTE OPTIONS
    var paletteX = 200;
    var paletteY = 0;
    this.paletteOptions.forEach(function (option) {
      option.x = paletteX;
      option.y = paletteY;
      colorRect(option.x, paletteY, 56, option.height, "black");
      paletteY += option.height;
    });
  };

  this.drawButtonTextLayer = function () {
    var textYOffset = 2;
    var textXOffset = 2;

    //   TOOLBAR
    var buttonX = 0;
    var buttonY = 0;
    this.toolBarOptions.forEach((option) => {
      renderFont(option.label, buttonX + textXOffset, buttonY + textYOffset);
      buttonX = buttonX + option.label.length * 12;
    });

    //   PALETTE OPTIONS
    var paletteX = 200;
    var paletteY = 0;
    this.paletteOptions.forEach(function (option) {
      renderFont(option.label, paletteX + textXOffset, paletteY + textYOffset);
      paletteY += option.height;
    });
  };

  this.draw = function () {
    this.drawButtonBackgroundLayer();
    this.drawButtonTextLayer();
  };
}
