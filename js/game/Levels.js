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
    array_index: 0,
  };
  this.enemies = [];
  this.hazards = [];
  this.walls = [];
  this.shots = [];
  this.name = "";
  this.song = "";
  this.tileset = cell_tileset;
}

const baseLevel = {
  level_map: [
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
  ],
  tile_map: [
    10, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 8, 27, 4, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    26, 28, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 29,
  ],
  starting_ammo: 0,
  default_object_config: {
    direction: 0,
    orientation: VERTICAL,
    type: "",
    state: MOVING,
    position: { x: 0, y: 0 },
    array_index: 0,
  },
  enemies: [],
  hazards: [],
  walls: [
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 6,
        y: 7,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 10,
        y: 25,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 8,
        y: 39,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 11,
        y: 51,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 7,
        y: 68,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 7,
        y: 85,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 2,
        y: 109,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 12,
        y: 119,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 10,
        y: 133,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 3,
        y: 153,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 2,
        y: 175,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 7,
        y: 188,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 9,
        y: 199,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 24,
        y: 200,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 43,
        y: 199,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 62,
        y: 199,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 104,
        y: 199,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 82,
        y: 201,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 70,
        y: 201,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 131,
        y: 200,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 170,
        y: 201,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 219,
        y: 205,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 112,
        y: 200,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 151,
        y: 201,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 231,
        y: 202,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 246,
        y: 203,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 197,
        y: 200,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 182,
        y: 200,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 246,
        y: 188,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 250,
        y: 168,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 251,
        y: 148,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 250,
        y: 122,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 249,
        y: 134,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 250,
        y: 109,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 247,
        y: 86,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 248,
        y: 69,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 248,
        y: 50,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 249,
        y: 36,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 249,
        y: 18,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 245,
        y: 5,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 229,
        y: 4,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 215,
        y: 6,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 201,
        y: 5,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 180,
        y: 6,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 160,
        y: 7,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 147,
        y: 6,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 129,
        y: 8,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 117,
        y: 9,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 104,
        y: 9,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 91,
        y: 9,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 80,
        y: 10,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 65,
        y: 10,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 49,
        y: 8,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 33,
        y: 8,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 24,
        y: 8,
      },
    },
    {
      direction: 0,
      orientation: "vertical",
      type: "collider",
      state: "moving",
      position: {
        x: 71,
        y: 199,
      },
    },
  ],
  shots: [],
  name: "",
  tileset: cell_tileset,
  song: "prison_music",
};

// Level names will use an x-y scheme where x is the current section of the game (1 = cells, 2 = armory, 3 = processing, and 4 = courtyard)
// and y is the current level within that section (e.g., the first level is 1-1)

const levels = [
  // CELL LEVELS
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      0, 0, 0, 21, 0, 21, 0, 0, 0, 0, 0, 0, 21, 21, 0, 1, 1, 1, 0, 21, 0, 21, 0,
      0, 21, 21, 21, 0, 21, 21, 0, 1, 1, 1, 0, 21, 0, 21, 0, 0, 21, 21, 21, 0,
      21, 21, 0, 1, 1, 1, 0, 21, 21, 21, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0,
      0, 5, 0, 0, 0, 0, 0, 1, 0, 0, 21, 21, 0, 0, 21, 21, 21, 1, 1, 1, 0, 0, 1,
      1, 0, 0, 21, 21, 0, 0, 21, 0, 21, 0, 0, 0, 0, 0, 1, 5, 0, 0, 21, 21, 0, 0,
      21, 0, 21, 0, 0, 0, 0, 0, 1, 0, 0, 0, 21, 21, 0, 0, 21, 0, 21, 0, 0, 0, 0,
      21, 21, 0, 21, 21, 21, 21, 0, 0, 21, 0, 21, 0, 0, 0, 0, 21, 0, 0, 0, 0,
      21, 21, 21, 21, 21, 21, 21, 2, 0, 0, 0, 21, 0, 0, 0, 0, 21, 21, 21, 21,
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
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
    starting_ammo: 0,
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
        type: "leaper",
        state: "moving",
        position: {
          x: 105,
          y: 87,
        },
        array_index: 86,
      },
      {
        direction: 90,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 200,
          y: 105,
        },
        array_index: 124,
      },
    ],
    hazards: [],
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 182,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 41,
          y: 182,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 56,
          y: 183,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 183,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 88,
          y: 183,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 88,
          y: 112,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 86,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 88,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 85,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 88,
          y: 105,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 101,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 59,
          y: 102,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 54,
          y: 121,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 56,
          y: 137,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 55,
          y: 151,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 55,
          y: 167,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 72,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 53,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 38,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 26,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 136,
          y: 71,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 136,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 135,
          y: 42,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 135,
          y: 29,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 104,
          y: 104,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 118,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 136,
          y: 105,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 164,
          y: 183,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 171,
          y: 167,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 152,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 185,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 203,
          y: 151,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 218,
          y: 152,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 234,
          y: 151,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 185,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 184,
          y: 121,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 183,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 201,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 201,
          y: 40,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 47,
          y: 47,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 58,
          y: 40,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 72,
          y: 41,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 73,
          y: 57,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 56,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 41,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 42,
          y: 73,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 59,
          y: 73,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 71,
          y: 73,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 200,
          y: 104,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 200,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 186,
          y: 40,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 185,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 200,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 214,
          y: 54,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 42,
        },
      },
    ],
    shots: [],
    name: "1-9",
    tileset: cell_tileset,
    song: "prison_music",
  },
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21,
      21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 2, 0,
      0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 21,
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
    starting_ammo: 0,
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
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
    ],
    shots: [],
    name: "1-9",
    tileset: cell_tileset,
    song: "prison_music",
  },
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
      1, 1, 0, 0, 21, 21, 0, 1, 5, 4, 1, 5, 0, 0, 0, 1, 4, 5, 1, 0, 21, 21, 0,
      1, 5, 5, 1, 0, 0, 0, 0, 1, 5, 5, 1, 0, 21, 21, 0, 0, 1, 1, 0, 0, 0, 0, 0,
      0, 1, 1, 0, 0, 21, 21, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 21, 21,
      0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 21, 21, 0, 0, 0, 1, 1, 5, 4, 4,
      5, 1, 1, 0, 0, 0, 21, 21, 0, 0, 0, 1, 1, 5, 4, 4, 5, 1, 1, 0, 0, 0, 21,
      21, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 21, 21, 0, 0, 2, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 21,
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
    starting_ammo: 0,
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
        type: "leaper",
        state: "moving",
        position: {
          x: 57,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 69,
          y: 54,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 72,
          y: 67,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 61,
          y: 70,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 185,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 196,
          y: 57,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 198,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 183,
          y: 71,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 105,
          y: 135,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 151,
          y: 137,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 152,
          y: 151,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 104,
          y: 150,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 111,
          y: 55,
        },
      },
    ],
    hazards: [],
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 43,
          y: 49,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 42,
          y: 72,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 58,
          y: 40,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 74,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 53,
          y: 89,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 72,
          y: 88,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 89,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 87,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 216,
          y: 72,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 216,
          y: 58,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 201,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 189,
          y: 38,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 170,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 162,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 183,
          y: 87,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 200,
          y: 89,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 111,
          y: 112,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 121,
          y: 121,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 152,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 133,
          y: 120,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 86,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 86,
          y: 149,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 105,
          y: 167,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 122,
          y: 169,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 138,
          y: 169,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 154,
          y: 166,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 168,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 170,
          y: 156,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 103,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 120,
          y: 102,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 140,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 156,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 188,
          y: 137,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 186,
          y: 152,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 169,
          y: 167,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 167,
          y: 121,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 92,
          y: 120,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 72,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 72,
          y: 150,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 86,
          y: 169,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 120,
          y: 184,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 134,
          y: 184,
        },
      },
    ],
    shots: [
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 67,
          y: 63,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 186,
          y: 61,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 126,
          y: 142,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 123,
          y: 152,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 135,
          y: 150,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 134,
          y: 140,
        },
      },
    ],
    name: "1-8",
    tileset: cell_tileset,
    song: "prison_music",
  },
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 21, 21, 0,
      4, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 0, 0, 0, 21, 21,
      0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 21,
      21, 1, 1, 1, 1, 1, 1, 21, 21, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
      21, 21, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0,
      0, 21, 21, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0,
      0, 0, 21, 21, 0, 0, 5, 5, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 21, 21, 5, 0, 0,
      0, 0, 5, 21, 21, 0, 0, 0, 2, 0, 0, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 21, 21, 21, 21,
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
    starting_ammo: 0,
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
        direction: 90,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 23,
          y: 183,
        },
      },
      {
        direction: 90,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 65,
          y: 164,
        },
      },
      {
        direction: 90,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 101,
          y: 184,
        },
      },
      {
        direction: 90,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 52,
          y: 166,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 176,
          y: 54,
        },
      },
    ],
    hazards: [],
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 114,
          y: 182,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 135,
          y: 184,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 135,
          y: 164,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 123,
          y: 165,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 122,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 140,
          y: 22,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 140,
          y: 38,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 119,
          y: 42,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 115,
          y: 147,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 139,
          y: 154,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 136,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 119,
          y: 58,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 120,
          y: 75,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 134,
          y: 72,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 139,
          y: 90,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 121,
          y: 87,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 135,
          y: 108,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 115,
          y: 102,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 140,
          y: 123,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 122,
          y: 118,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 101,
          y: 120,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 82,
          y: 118,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 67,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 57,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 33,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 22,
          y: 120,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 155,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 170,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 190,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 198,
          y: 104,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 217,
          y: 106,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 234,
          y: 104,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 158,
          y: 87,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 171,
          y: 88,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 184,
          y: 87,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 203,
          y: 88,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 217,
          y: 87,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 235,
          y: 87,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 123,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 135,
          y: 134,
        },
      },
    ],
    shots: [
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 170,
          y: 32,
        },
      },
    ],
    name: "1-7",
    tileset: cell_tileset,
    song: "prison_music",
  },
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      0, 0, 4, 0, 4, 0, 4, 0, 4, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 21, 21, 21, 21, 21, 5, 0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21,
      21, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 21, 21, 0, 0, 21, 5, 0, 0,
      0, 0, 0, 0, 0, 21, 0, 0, 21, 21, 0, 0, 21, 5, 0, 0, 0, 0, 0, 0, 0, 21, 0,
      0, 21, 21, 0, 0, 21, 5, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 21, 21, 0, 0, 21,
      0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 21, 21, 21, 21, 21, 5, 0, 0, 0, 0, 0, 0,
      0, 21, 21, 21, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 21, 21,
      0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 21, 21, 21, 21, 21, 21,
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
    starting_ammo: 0,
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
        type: "leaper",
        state: "moving",
        position: {
          x: 73,
          y: 53,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 71,
          y: 149,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 72,
          y: 104,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 75,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 73,
          y: 123,
        },
      },
    ],
    hazards: [],
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 63,
          y: 64,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 57,
          y: 89,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 55,
          y: 106,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 55,
          y: 142,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 54,
          y: 126,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 55,
          y: 61,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 58,
          y: 152,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 199,
          y: 57,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 199,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 196,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 199,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 198,
          y: 116,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 200,
          y: 139,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 202,
          y: 154,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 215,
          y: 182,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 232,
          y: 166,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 218,
          y: 147,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 230,
          y: 150,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 40,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 21,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 37,
          y: 156,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 26,
          y: 151,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 218,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 54,
        },
      },
    ],
    shots: [
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 188,
          y: 28,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 145,
          y: 28,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 113,
          y: 24,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 87,
          y: 24,
        },
      },
    ],
    name: "1-6",
    tileset: cell_tileset,
    song: "prison_music",
  },
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21, 21, 1, 5, 0, 0, 1, 0,
      0, 5, 1, 0, 0, 21, 21, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 21, 21,
      0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 5, 21, 21, 0, 0, 0, 0, 0, 1, 1, 1,
      1, 0, 0, 1, 1, 0, 21, 21, 5, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 21,
      21, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 21, 21, 21, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0,
      21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 21, 21, 0, 0, 2, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 0, 0, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 21, 21, 21,
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
    starting_ammo: 0,
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
        direction: 90,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 90,
          y: 40,
        },
      },
      {
        direction: 90,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 184,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 22,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 231,
          y: 71,
        },
      },
    ],
    hazards: [],
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 61,
          y: 117,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 76,
          y: 118,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 93,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 119,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 137,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 158,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 169,
          y: 120,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 185,
          y: 118,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 204,
          y: 120,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 151,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 99,
          y: 91,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 38,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 199,
          y: 88,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 219,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 131,
          y: 32,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 136,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 71,
          y: 45,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 71,
          y: 62,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 206,
          y: 40,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 202,
          y: 53,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 135,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 212,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 213,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 233,
          y: 137,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 198,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 155,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 171,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 200,
          y: 182,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 57,
          y: 38,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 55,
          y: 23,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 38,
          y: 40,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 27,
          y: 41,
        },
      },
    ],
    shots: [
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 134,
          y: 103,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 136,
          y: 70,
        },
      },
    ],
    name: "1-5",
    tileset: cell_tileset,
    song: "prison_music",
  },
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21,
      21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 2, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 21,
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
    starting_ammo: 0,
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
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
    ],
    shots: [],
    name: "",
    tileset: cell_tileset,
    song: "prison_music",
  },
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 21,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 21, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 5, 0, 21, 0, 0, 0, 0, 21,
      21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 0,
      0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 21, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 21, 21, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0,
      0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 21, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 21, 21, 21, 21, 21,
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
    starting_ammo: 0,
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
        type: "leaper",
        state: "moving",
        position: {
          x: 142,
          y: 100,
        },
      },
    ],
    hazards: [],
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 228,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 202,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 185,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 171,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 230,
          y: 63,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 211,
          y: 59,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 196,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 165,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 185,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 168,
          y: 66,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 169,
          y: 87,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 167,
          y: 100,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 168,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 26,
          y: 142,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 39,
          y: 135,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 60,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 72,
          y: 138,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 72,
          y: 152,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 73,
          y: 156,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 74,
          y: 161,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 78,
          y: 185,
        },
      },
    ],
    shots: [],
    name: "1-2",
    tileset: cell_tileset,
    song: "prison_music",
  },
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 21, 21, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      21, 0, 0, 0, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0, 0, 0, 21, 21, 21, 21,
      21, 21, 0, 0, 0, 0, 0, 21, 5, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0,
      21, 0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0,
      21, 0, 0, 0, 21, 21, 0, 0, 0, 21, 0, 0, 0, 0, 0, 5, 21, 0, 0, 0, 21, 21,
      0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 0, 0, 0, 0, 0, 21,
      0, 0, 0, 0, 0, 0, 0, 1, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0, 0, 0, 0, 0,
      1, 0, 21, 21, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 21, 21, 21, 21,
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    ],
    tile_map: [
      10, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 8, 27, 4, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27,
      3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 14, 3, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 26, 14, 28, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26,
      27, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 3, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 26, 28, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
      14, 14, 14, 29,
    ],
    starting_ammo: 0,
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
        type: "leaper",
        state: "moving",
        position: {
          x: 169,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 119,
          y: 70,
        },
      },
    ],
    hazards: [],
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 204,
          y: 183,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 215,
          y: 166,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 232,
          y: 151,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 184,
          y: 90,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 185,
          y: 106,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 185,
          y: 120,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 183,
          y: 135,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 216,
          y: 135,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 235,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 200,
          y: 87,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 88,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 233,
          y: 90,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 120,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 137,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 101,
          y: 136,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 152,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 107,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 89,
          y: 170,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 66,
          y: 166,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 53,
          y: 170,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 38,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 21,
          y: 169,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 85,
          y: 104,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 100,
          y: 102,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 99,
          y: 88,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 101,
          y: 71,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 103,
          y: 54,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 87,
          y: 53,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 72,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 52,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 36,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 21,
          y: 55,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 185,
          y: 23,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 181,
          y: 38,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 185,
          y: 57,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 199,
          y: 54,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 213,
          y: 54,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 232,
          y: 56,
        },
      },
    ],
    shots: [
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_shot",
        state: "moving",
        position: {
          x: 29,
          y: 35,
        },
      },
    ],
    name: "1-2",
    tileset: cell_tileset,
    song: "prison_music",
  },
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21,
      21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 2, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 21,
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
    starting_ammo: 0,
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
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
    ],
    shots: [],
    name: "",
    tileset: cell_tileset,
    song: "prison_music",
  },
  {
    level_map: [
      21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 0, 0,
      0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 0, 21, 21, 0, 5, 0, 0, 0, 0, 0, 0, 1, 1,
      0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 21, 21, 0,
      0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 21, 21,
      1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 21,
      21, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 5, 0, 0, 21, 21, 4, 0, 2, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
      21, 21, 21, 21,
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
    starting_ammo: 0,
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
        type: "leaper",
        state: "moving",
        position: {
          x: 185,
          y: 58,
        },
      },
      {
        direction: 270,
        orientation: "vertical",
        type: "leaper",
        state: "moving",
        position: {
          x: 44,
          y: 40,
        },
      },
    ],
    hazards: [],
    walls: [
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 25,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 42,
          y: 120,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 57,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 77,
          y: 123,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 90,
          y: 120,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 104,
          y: 118,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 106,
          y: 135,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 101,
          y: 151,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 102,
          y: 170,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 103,
          y: 183,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 169,
          y: 23,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 154,
          y: 24,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 151,
          y: 38,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 169,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 169,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 154,
          y: 56,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 150,
          y: 70,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 169,
          y: 72,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 154,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 167,
          y: 89,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 147,
          y: 105,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 169,
          y: 105,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 185,
          y: 106,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 184,
          y: 88,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 200,
          y: 88,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 199,
          y: 102,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 217,
          y: 105,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 219,
          y: 90,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 231,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "normal_wall",
        state: "moving",
        position: {
          x: 233,
          y: 104,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 6,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 25,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 8,
          y: 39,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 11,
          y: 51,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 68,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 85,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 12,
          y: 119,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 10,
          y: 133,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 3,
          y: 153,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 2,
          y: 175,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 7,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 9,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 43,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 62,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 199,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 82,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 70,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 131,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 170,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 219,
          y: 205,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 112,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 151,
          y: 201,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 231,
          y: 202,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 203,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 197,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 182,
          y: 200,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 246,
          y: 188,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 168,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 251,
          y: 148,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 122,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 134,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 250,
          y: 109,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 247,
          y: 86,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 69,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 248,
          y: 50,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 36,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 249,
          y: 18,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 245,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 229,
          y: 4,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 215,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 201,
          y: 5,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 180,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 160,
          y: 7,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 147,
          y: 6,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 129,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 117,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 104,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 91,
          y: 9,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 80,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 65,
          y: 10,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 49,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 33,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 24,
          y: 8,
        },
      },
      {
        direction: 0,
        orientation: "vertical",
        type: "collider",
        state: "moving",
        position: {
          x: 71,
          y: 199,
        },
      },
    ],
    shots: [],
    name: "1-3",
    tileset: cell_tileset,
    song: "prison_music",
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
