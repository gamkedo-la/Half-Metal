function BaseLevelClass() {
  this.level_map = [];
  this.tile_map = [];
  this.starting_ammo = 0;
  this.default_object_config = {
    direction: 0,
    orientation: VERTICAL,
    type: "",
    state: MOVING,
    position: { x: 0, y: 0 },
  };
  this.enemies = [];
  this.hazards = [];
  this.walls = [];
  this.shots = [];
  this.name = "";
  this.tileset = CELLS;
}

const baseLevel = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const levelOne = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const levelTwo = [
  1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 12, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 6, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 13, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const levels = [
  {
    level_map: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ],
    tile_map: [
      10, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 8, 27, 4, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27,
      3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26,
      27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 26, 28, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
      14, 14, 14, 29,
    ],
    starting_ammo: 10,
    default_object_config: {
      direction: 0,
      orientation: "vertical",
      type: "",
      state: "moving",
      position: {
        x: 0,
        y: 0,
      },
    },
    enemies: [],
    hazards: [],
    walls: [],
    shots: [],
    name: "",
    tileset: "cells",
  },
  {
    level_map: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ],
    tile_map: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0,
    ],
    starting_ammo: 10,
    default_object_config: {
      direction: 0,
      orientation: "vertical",
      type: "",
      state: "moving",
      position: {
        x: 0,
        y: 0,
      },
    },
    enemies: [
      {
        direction: 0,
        orientation: "vertical",
        type: "flyer",
        state: "moving",
        position: {
          x: 140,
          y: 52,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "flyer",
        state: "moving",
        position: {
          x: 95,
          y: -1,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "flyer",
        state: "moving",
        position: {
          x: 108,
          y: 0,
        },
      },
    ],
    hazards: [],
    walls: [],
    shots: [],
    name: "",
    tileset: "cells",
  },
];

currentLevel = 0;

function generateRandomLevel(w = 16, h = 13) {
  console.log("Generating a random " + w + "x" + h + " level...");
  let x, y;
  let levelData = [];

  for (i = 0; i < w * h; i++) {}

  for (x = 0; x < w; x++) {
    for (y = 0; y < h; y++) {
      var index = rowColToArrayIndex(x, y);

      // usually empty floor
      levelData[index] = TILE_GROUND;

      // scatter random blocks
      if (Math.random() < 0.1) {
        levelData[index] = TILE_WALL;
      }

      // outside edges are always wals
      if (y == 0 || y == h - 1 || x == 0 || x == w - 1) {
        levelData[index] = TILE_WALL;
      }
    }
  }

  // FIXME: Player won't respwan at PLAYER_START TILE
  // one of each important tile
  //   x = 1 + Math.floor(Math.random() * (w - 2));
  //   y = 1 + Math.floor(Math.random() * (h - 2));
  //   levelData[x * y] = TILE_PLAYERSTART;

  // FIXME: TILE_GOAL isn't properly mapped to an image and won't render
  //   x = 1 + Math.floor(Math.random() * (w - 2));
  //   y = 1 + Math.floor(Math.random() * (h - 2));
  //   levelData[x * y] = TILE_GOAL;

  // FIXME: Window tiles cause an error in level generation
  // select a gameplay tile in range
  var valid_tiles = Object.keys(OBJECT_MAP).map((obj) => OBJECT_MAP[obj]);

  t = valid_tiles[Math.floor(Math.random() * valid_tiles.length)];
  x = 1 + Math.floor(Math.random() * (w - 2));
  y = 1 + Math.floor(Math.random() * (h - 2));
  levelData[x * y] = t;

  t = valid_tiles[Math.floor(Math.random() * valid_tiles.length)];
  x = 1 + Math.floor(Math.random() * (w - 2));
  y = 1 + Math.floor(Math.random() * (h - 2));
  levelData[x * y] = t;

  t = valid_tiles[Math.floor(Math.random() * valid_tiles.length)];
  x = 1 + Math.floor(Math.random() * (w - 2));
  y = 1 + Math.floor(Math.random() * (h - 2));
  levelData[x * y] = t;

  t = valid_tiles[Math.floor(Math.random() * valid_tiles.length)];
  x = 1 + Math.floor(Math.random() * (w - 2));
  y = 1 + Math.floor(Math.random() * (h - 2));
  levelData[x * y] = t;

  return levelData;
}
