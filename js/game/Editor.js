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
        console.log("Clicked NEW");
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
        console.log("Clicked PLAY");
      },
    },
  ];
  this.paletteOptions = [
    {
      label: "ENEMIES",
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
      label: "HAZARDS",
      pallete: [],
      handler: () => {
        console.log("Clicked HAZARDS");
      },
    },
    {
      label: "TILES",
      pallete: [],
      handler: () => {
        console.log("Clicked TILES");
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
      option.width = option.label.length * 8;
    });

    this.paletteOptions.forEach(function (option) {
      option.height = 12;
      option.width = option.label.length * 8;
    });
  };

  this.update = function () {};

  this.draw = function () {
    var textYOffset = 10;
    var textXOffset = 5;

    //   TOOLBAR
    var buttonX = 0;
    var buttonY = 0;
    this.toolBarOptions.forEach((option) => {
      option.y = buttonY;
      option.x = buttonX;
      colorRect(buttonX, option.y, option.width, 12, "black");
      colorText(
        option.label,
        buttonX + textXOffset,
        buttonY + textYOffset,
        "white"
      );
      buttonX = buttonX + option.label.length * 8;
    });

    //   PALETTE OPTIONS
    var paletteX = 200;
    var paletteY = 0;
    this.paletteOptions.forEach(function (option) {
      option.x = paletteX;
      option.y = paletteY;

      colorRect(option.x, paletteY, 56, option.height, "black");
      colorText(
        option.label,
        paletteX + textXOffset,
        paletteY + textYOffset,
        "white"
      );
      paletteY += option.height;
    });
  };
}
