// Need shortcut to open editor - "L" key

// Interface
// --------------------------------------------
// | NEW | SAVE | LOAD | PLAY
// |----- ------ ------ -----------------------
// |
// |  ------------------------------   _________
// | |                              | | ENEMIES |
// | |                              | | SHOTS   |
// | |                              | | HAZARDS |
// | |                              | | WALLS   |
// | |                              | | TILES   |
// | |        LEVEL MAP             | | PLAYER  |
// | |                              | |         |
// | |                              |  ---------
// | |                              |
// | |                              |
// | |                              |
// |  ------------------------------
// |
// |  ------------------------------------------

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
  this.palletteOptions = [
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
  this.currentPallette = [];
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
    console.log("Initiating UI");
  };

  this.update = function () {
    console.log("IN EDIT MODE");
  };

  this.draw = function () {
    console.log("Drawing editor");
    colorRect(0, 0, canvas.width, canvas.height, "gray");
  };
}
