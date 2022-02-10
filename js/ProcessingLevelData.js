const base_processing_level = {
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
    10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 8, 27, 4, 2, 2,
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
    orientation: "vertical",
    type: "",
    state: "moving",
    position: {
      x: 0,
      y: 0,
    },
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
  tileset: processing_tileset,
  song: "armory_music",
};

const PROCESSING_LEVELS = [];