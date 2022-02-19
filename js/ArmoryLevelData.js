var base_armory_level = {
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
  tileset: armory_tileset,
  song: "armory_music",
};


const ARMORY_LEVELS = [
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          3,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          1,
          1,
          20,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          1,
          1,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 74,
                  "y": 39
              },
              "array_index": 36
          },
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 78
              },
              "array_index": 67
          }
      ],
      "hazards": [],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 77
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 120,
                  "y": 93
              },
              "array_index": 87
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 122,
                  "y": 103
              },
              "array_index": 103
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 120,
                  "y": 116
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 120,
                  "y": 130
              },
              "array_index": 135
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 120,
                  "y": 145
              },
              "array_index": 151
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 158
              },
              "array_index": 151
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 141,
                  "y": 152
              },
              "array_index": 152
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 158,
                  "y": 152
              },
              "array_index": 153
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 177,
                  "y": 152
              },
              "array_index": 155
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 152
              },
              "array_index": 156
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 153
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 153
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 153
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 218,
                  "y": 152
              },
              "array_index": 157
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 152
              },
              "array_index": 157
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 148
              },
              "array_index": 154
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 138,
                  "y": 74
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 156,
                  "y": 73
              },
              "array_index": 73
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 175,
                  "y": 73
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 186,
                  "y": 74
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 72
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 73
              },
              "array_index": 77
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 72
              },
              "array_index": 78
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 102,
                  "y": 147
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 90,
                  "y": 151
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 73
              },
              "array_index": 65
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 72
              },
              "array_index": 66
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 125,
                  "y": 53
              },
              "array_index": 55
          }
      ],
      "shots": [],
      "name": "2-1",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          20,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          20,
          0,
          21,
          21,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          21,
          21,
          20,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          20,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 218,
                  "y": 69
              },
              "array_index": 77
          },
          {
              "direction": 270,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 132
              },
              "array_index": 142
          },
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 69
              },
              "array_index": 66
          },
          {
              "direction": 270,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 136
              },
              "array_index": 129
          }
      ],
      "hazards": [],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 71
              },
              "array_index": 67
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 88
              },
              "array_index": 83
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 58,
                  "y": 100
              },
              "array_index": 99
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 56,
                  "y": 119
              },
              "array_index": 115
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 134
              },
              "array_index": 131
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 74,
                  "y": 135
              },
              "array_index": 132
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 90,
                  "y": 137
              },
              "array_index": 133
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 136
              },
              "array_index": 134
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 75,
                  "y": 71
              },
              "array_index": 68
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 72
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 200,
                  "y": 88
              },
              "array_index": 92
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 200,
                  "y": 108
              },
              "array_index": 108
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 122
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 137
              },
              "array_index": 140
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 135
              },
              "array_index": 139
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 179,
                  "y": 70
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 165,
                  "y": 72
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 152,
                  "y": 72
              },
              "array_index": 73
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 139,
                  "y": 71
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 70
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 71
              },
              "array_index": 70
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 86,
                  "y": 70
              },
              "array_index": 69
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 135
              },
              "array_index": 135
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 133,
                  "y": 134
              },
              "array_index": 136
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 155,
                  "y": 137
              },
              "array_index": 137
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 137
              },
              "array_index": 138
          }
      ],
      "shots": [],
      "name": "2-2",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          4,
          4,
          21,
          21,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          4,
          4,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          4,
          4,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          21,
          21,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          3,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 74,
                  "y": 53
              },
              "array_index": 52
          }
      ],
      "hazards": [],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 183
              },
              "array_index": 188
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 166
              },
              "array_index": 173
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 151
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 206,
                  "y": 77
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 86
              },
              "array_index": 93
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 54
              },
              "array_index": 60
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 196,
                  "y": 41
              },
              "array_index": 44
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 24
              },
              "array_index": 30
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 24
              },
              "array_index": 29
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 85
              },
              "array_index": 94
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 239,
                  "y": 91
              },
              "array_index": 94
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 221,
                  "y": 50
              },
              "array_index": 61
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 235,
                  "y": 59
              },
              "array_index": 62
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 220,
                  "y": 72
              },
              "array_index": 77
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 72
              },
              "array_index": 78
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 218,
                  "y": 42
              },
              "array_index": 45
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 39
              },
              "array_index": 46
          }
      ],
      "name": "2-3",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          2,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          20,
          0,
          21,
          0,
          0,
          0,
          21,
          21,
          0,
          20,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          21,
          21,
          4,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          1,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          3,
          0,
          21,
          21,
          4,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 54
              },
              "array_index": 50
          },
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 40
              },
              "array_index": 41
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 79,
                  "y": 145
              },
              "array_index": 148
          }
      ],
      "hazards": [],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 27,
                  "y": 96
              },
              "array_index": 97
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 104
              },
              "array_index": 105
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 105
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 121
              },
              "array_index": 122
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 139
              },
              "array_index": 138
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 154
              },
              "array_index": 154
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 169
              },
              "array_index": 170
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 168,
                  "y": 182
              },
              "array_index": 186
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 187,
                  "y": 145
              },
              "array_index": 155
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 202,
                  "y": 151
              },
              "array_index": 156
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 214,
                  "y": 150
              },
              "array_index": 157
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 151
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 128
              },
              "array_index": 130
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 106
              },
              "array_index": 101
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 25
              },
              "array_index": 23
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 40
              },
              "array_index": 39
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 57
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 72
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 120,
                  "y": 89
              },
              "array_index": 87
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 104
              },
              "array_index": 103
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 106
              },
              "array_index": 102
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 136,
                  "y": 105
              },
              "array_index": 104
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 105
              },
              "array_index": 100
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 104
              },
              "array_index": 99
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 104
              },
              "array_index": 98
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 191,
                  "y": 26
              },
              "array_index": 27
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 187,
                  "y": 46
              },
              "array_index": 43
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 59
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 184,
                  "y": 73
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 200,
                  "y": 72
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 72
              },
              "array_index": 77
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 71
              },
              "array_index": 78
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 40,
                  "y": 150
              },
              "array_index": 146
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 27,
                  "y": 121
              },
              "array_index": 113
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 27,
                  "y": 185
              },
              "array_index": 177
          }
      ],
      "name": "2-4",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          4,
          0,
          0,
          1,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          4,
          0,
          0,
          0,
          0,
          19,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          4,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          2,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          1,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          3,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [],
      "hazards": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 127,
                  "y": 87
              },
              "array_index": 87
          }
      ],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 71
              },
              "array_index": 73
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 103
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 71
              },
              "array_index": 69
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 104
              },
              "array_index": 100
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 27,
                  "y": 54
              },
              "array_index": 49
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 42,
                  "y": 55
              },
              "array_index": 50
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 59,
                  "y": 56
              },
              "array_index": 51
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 55
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 55
              },
              "array_index": 53
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 55
              },
              "array_index": 54
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 55
              },
              "array_index": 56
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 136,
                  "y": 41
              },
              "array_index": 40
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 22
              },
              "array_index": 24
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 101,
                  "y": 38
              },
              "array_index": 38
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 106,
                  "y": 21
              },
              "array_index": 22
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 57
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 53
              },
              "array_index": 58
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 189,
                  "y": 56
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 54
              },
              "array_index": 60
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 222,
                  "y": 58
              },
              "array_index": 61
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 57
              },
              "array_index": 62
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 122
              },
              "array_index": 126
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 214,
                  "y": 121
              },
              "array_index": 125
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 121
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 120
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 120
              },
              "array_index": 122
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 119
              },
              "array_index": 121
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 139,
                  "y": 120
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 138,
                  "y": 138
              },
              "array_index": 136
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 150
              },
              "array_index": 152
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 98,
                  "y": 122
              },
              "array_index": 118
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 79,
                  "y": 120
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 120
              },
              "array_index": 117
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 117
              },
              "array_index": 115
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 32,
                  "y": 118
              },
              "array_index": 114
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 21,
                  "y": 119
              },
              "array_index": 113
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 102,
                  "y": 134
              },
              "array_index": 134
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 101,
                  "y": 154
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 101,
                  "y": 167
              },
              "array_index": 166
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 101,
                  "y": 180
              },
              "array_index": 182
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 134,
                  "y": 184
              },
              "array_index": 184
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 169
              },
              "array_index": 168
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 144
              },
              "array_index": 151
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 74
              },
              "array_index": 66
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 90
              },
              "array_index": 82
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 104
              },
              "array_index": 98
          }
      ],
      "name": "2-5",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          3,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          21,
          21,
          1,
          0,
          0,
          19,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          19,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          21,
          21,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [],
      "hazards": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 72
              },
              "array_index": 68
          },
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 175,
                  "y": 136
              },
              "array_index": 138
          }
      ],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 161,
                  "y": 25
              },
              "array_index": 26
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 65
              },
              "array_index": 78
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 71
              },
              "array_index": 77
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 195,
                  "y": 69
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 97,
                  "y": 87
              },
              "array_index": 86
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 102
              },
              "array_index": 103
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 136,
                  "y": 113
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 72
              },
              "array_index": 65
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 54,
                  "y": 144
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 167
              },
              "array_index": 168
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 183
              },
              "array_index": 184
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 103
              },
              "array_index": 107
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 102
              },
              "array_index": 108
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 88
              },
              "array_index": 93
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 57
              },
              "array_index": 58
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 72
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 149,
                  "y": 56
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 60
              },
              "array_index": 56
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 40
              },
              "array_index": 36
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 152
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 150
              },
              "array_index": 157
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 92,
                  "y": 40
              },
              "array_index": 37
          }
      ],
      "shots": [],
      "name": "2-6",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          3,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          19,
          19,
          19,
          19,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          21,
          5,
          0,
          5,
          5,
          0,
          5,
          21,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          5,
          0,
          0,
          5,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 107,
                  "y": 136
              },
              "array_index": 134
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 146,
                  "y": 136
              },
              "array_index": 137
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 111
              },
              "array_index": 106
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 130,
                  "y": 104
              },
              "array_index": 104
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 104
              },
              "array_index": 101
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 104
              },
              "array_index": 103
          }
      ],
      "hazards": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 71
              },
              "array_index": 70
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 72
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 71
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 152,
                  "y": 72
              },
              "array_index": 73
          }
      ],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 64
              },
              "array_index": 65
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 72
              },
              "array_index": 66
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 61,
                  "y": 72
              },
              "array_index": 67
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 27,
                  "y": 143
              },
              "array_index": 129
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 136
              },
              "array_index": 130
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 135
              },
              "array_index": 131
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 134
              },
              "array_index": 132
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 73
              },
              "array_index": 68
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 136
              },
              "array_index": 142
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 135
              },
              "array_index": 141
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 136
              },
              "array_index": 140
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 135
              },
              "array_index": 139
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 70
              },
              "array_index": 78
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 220,
                  "y": 72
              },
              "array_index": 77
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 207,
                  "y": 74
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 191,
                  "y": 71
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 88
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 184,
                  "y": 104
              },
              "array_index": 107
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 120
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 87
              },
              "array_index": 84
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 74,
                  "y": 103
              },
              "array_index": 100
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 121
              },
              "array_index": 116
          }
      ],
      "shots": [],
      "name": "2-7",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          2,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          21,
          21,
          0,
          1,
          0,
          0,
          19,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          19,
          0,
          21,
          21,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          19,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          20,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          19,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          19,
          0,
          0,
          0,
          0,
          0,
          0,
          19,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          3,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 270,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 111
              },
              "array_index": 99
          },
          {
              "direction": 270,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 120,
                  "y": 104
              },
              "array_index": 103
          },
          {
              "direction": 270,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 102
              },
              "array_index": 107
          }
      ],
      "hazards": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 40,
                  "y": 168
              },
              "array_index": 162
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 41
              },
              "array_index": 37
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 168
              },
              "array_index": 169
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 40
              },
              "array_index": 45
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 158
              },
              "array_index": 150
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 55
              },
              "array_index": 60
          }
      ],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 47,
                  "y": 54
              },
              "array_index": 50
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 182
              },
              "array_index": 178
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 25
              },
              "array_index": 21
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 183
              },
              "array_index": 185
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 23
              },
              "array_index": 29
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 40
              },
              "array_index": 34
          }
      ],
      "shots": [],
      "name": "2-8",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          21,
          3,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          1,
          1,
          1,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          5,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          15,
          15,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          2,
          0,
          0,
          15,
          15,
          0,
          21,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 104
              },
              "array_index": 102
          }
      ],
      "hazards": [],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 84,
                  "y": 40
              },
              "array_index": 37
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 83,
                  "y": 24
              },
              "array_index": 21
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 86,
                  "y": 57
              },
              "array_index": 53
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 90,
                  "y": 72
              },
              "array_index": 69
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 89
              },
              "array_index": 85
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 88
              },
              "array_index": 84
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 56,
                  "y": 87
              },
              "array_index": 83
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 44,
                  "y": 86
              },
              "array_index": 82
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 29,
                  "y": 87
              },
              "array_index": 81
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 145,
                  "y": 87
              },
              "array_index": 89
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 150,
                  "y": 73
              },
              "array_index": 73
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 152,
                  "y": 57
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 42
              },
              "array_index": 41
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 150,
                  "y": 25
              },
              "array_index": 25
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 105
              },
              "array_index": 105
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 123
              },
              "array_index": 121
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 152,
                  "y": 141
              },
              "array_index": 137
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 154
              },
              "array_index": 153
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 152,
                  "y": 170
              },
              "array_index": 169
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 182
              },
              "array_index": 185
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 87
              },
              "array_index": 86
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 118,
                  "y": 87
              },
              "array_index": 87
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 133,
                  "y": 86
              },
              "array_index": 88
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 185
              },
              "array_index": 182
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 184
              },
              "array_index": 183
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 118,
                  "y": 169
              },
              "array_index": 167
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 107,
                  "y": 168
              },
              "array_index": 166
          }
      ],
      "name": "2-9",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          21,
          21,
          0,
          2,
          0,
          0,
          0,
          0,
          15,
          15,
          15,
          15,
          0,
          1,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          5,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          5,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          5,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          0,
          0,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          3,
          0,
          1,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 104
              },
              "array_index": 100
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 73
              },
              "array_index": 76
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 151
              },
              "array_index": 156
          }
      ],
      "hazards": [],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 67,
                  "y": 56
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 72
              },
              "array_index": 68
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 88
              },
              "array_index": 84
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 192,
                  "y": 24
              },
              "array_index": 28
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 39
              },
              "array_index": 44
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 54
              },
              "array_index": 60
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 200,
                  "y": 104
              },
              "array_index": 108
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 118
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 135
              },
              "array_index": 140
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 136
              },
              "array_index": 132
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 150
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 167
              },
              "array_index": 164
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 182
              },
              "array_index": 182
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 167
              },
              "array_index": 167
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 136,
                  "y": 166
              },
              "array_index": 168
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 166
              },
              "array_index": 169
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 183
              },
              "array_index": 186
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 115,
                  "y": 34
              },
              "array_index": 39
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 139,
                  "y": 39
              },
              "array_index": 40
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 161,
                  "y": 39
              },
              "array_index": 42
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 152,
                  "y": 41
              },
              "array_index": 41
          }
      ],
      "name": "2-10",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          3,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          19,
          19,
          19,
          19,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          0,
          0,
          5,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          20,
          20,
          20,
          20,
          0,
          0,
          0,
          0,
          15,
          15,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          15,
          15,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 101,
                  "y": 149
              },
              "array_index": 150
          },
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 87
              },
              "array_index": 91
          },
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 152
              },
              "array_index": 151
          },
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 151
              },
              "array_index": 152
          },
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 150
              },
              "array_index": 149
          }
      ],
      "hazards": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 132,
                  "y": 71
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 73
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 72
              },
              "array_index": 70
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 71
              },
              "array_index": 69
          }
      ],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 136,
                  "y": 87
              },
              "array_index": 88
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 87
              },
              "array_index": 87
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 87
              },
              "array_index": 86
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 186,
                  "y": 69
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 72
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 71
              },
              "array_index": 77
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 70
              },
              "array_index": 78
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 186,
                  "y": 56
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 198,
                  "y": 56
              },
              "array_index": 60
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 213,
                  "y": 55
              },
              "array_index": 61
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 55
              },
              "array_index": 62
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 171,
                  "y": 72
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 155,
                  "y": 72
              },
              "array_index": 73
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 58
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 165,
                  "y": 55
              },
              "array_index": 58
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 88
              },
              "array_index": 85
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 234,
                  "y": 150
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 218,
                  "y": 154
              },
              "array_index": 157
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 213,
                  "y": 165
              },
              "array_index": 173
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 164
              },
              "array_index": 174
          }
      ],
      "name": "2-11",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          2,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          0,
          0,
          0,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          5,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          3,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 39
              },
              "array_index": 39
          }
      ],
      "hazards": [],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 27,
                  "y": 66
              },
              "array_index": 65
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 57
              },
              "array_index": 49
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 37,
                  "y": 58
              },
              "array_index": 50
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 58
              },
              "array_index": 51
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 57
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 58
              },
              "array_index": 53
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 44,
                  "y": 73
              },
              "array_index": 66
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 58
              },
              "array_index": 54
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 26
              },
              "array_index": 30
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 233,
                  "y": 42
              },
              "array_index": 46
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 57
              },
              "array_index": 62
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 74
              },
              "array_index": 78
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 89
              },
              "array_index": 94
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 56
              },
              "array_index": 58
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 154,
                  "y": 56
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 56
              },
              "array_index": 56
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 56
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 52,
                  "y": 74
              },
              "array_index": 67
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 89
              },
              "array_index": 83
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 88
              },
              "array_index": 82
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 26,
                  "y": 88
              },
              "array_index": 81
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 104
              },
              "array_index": 97
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 104
              },
              "array_index": 98
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 58,
                  "y": 103
              },
              "array_index": 99
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 122
              },
              "array_index": 115
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 227,
                  "y": 103
              },
              "array_index": 110
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 121
              },
              "array_index": 126
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 134
              },
              "array_index": 142
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 153
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 172
              },
              "array_index": 174
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 182
              },
              "array_index": 190
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 214,
                  "y": 104
              },
              "array_index": 109
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 105
              },
              "array_index": 108
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 191,
                  "y": 103
              },
              "array_index": 107
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 171,
                  "y": 103
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 111,
                  "y": 103
              },
              "array_index": 102
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 138
              },
              "array_index": 131
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 23,
                  "y": 168
              },
              "array_index": 161
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 42,
                  "y": 183
              },
              "array_index": 178
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 118
              },
              "array_index": 114
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 133
              },
              "array_index": 130
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 137
              },
              "array_index": 129
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 120
              },
              "array_index": 113
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 103
              },
              "array_index": 103
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 118
              },
              "array_index": 118
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 118,
                  "y": 120
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 168,
                  "y": 118
              },
              "array_index": 122
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 186,
                  "y": 121
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 202,
                  "y": 118
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 213,
                  "y": 119
              },
              "array_index": 125
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 28
              },
              "array_index": 22
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 136,
                  "y": 23
              },
              "array_index": 24
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 58,
                  "y": 27
              },
              "array_index": 19
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 26
              },
              "array_index": 23
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 44,
                  "y": 26
              },
              "array_index": 18
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 68,
                  "y": 25
              },
              "array_index": 20
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 24
              },
              "array_index": 21
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 143,
                  "y": 25
              },
              "array_index": 24
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 172,
                  "y": 26
              },
              "array_index": 26
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 155,
                  "y": 26
              },
              "array_index": 25
          }
      ],
      "name": "2-12",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          3,
          6,
          0,
          0,
          5,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          5,
          21,
          21,
          6,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          21,
          21,
          0,
          1,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          1,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          0,
          0,
          2,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          4,
          0,
          1,
          0,
          0,
          0,
          21,
          21,
          0,
          1,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          1,
          0,
          21,
          21,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          4,
          21,
          21,
          5,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          5,
          0,
          4,
          4,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 22
              },
              "array_index": 21
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 191,
                  "y": 183
              },
              "array_index": 187
          },
          {
              "direction": 270,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 183
              },
              "array_index": 177
          },
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 24
              },
              "array_index": 30
          }
      ],
      "hazards": [],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 24
              },
              "array_index": 18
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 26,
                  "y": 44
              },
              "array_index": 33
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 71
              },
              "array_index": 68
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 55
              },
              "array_index": 53
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 168,
                  "y": 56
              },
              "array_index": 58
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 151
              },
              "array_index": 154
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 55
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 136,
                  "y": 55
              },
              "array_index": 56
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 120,
                  "y": 54
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 102,
                  "y": 54
              },
              "array_index": 54
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 90
              },
              "array_index": 84
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 105
              },
              "array_index": 100
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 124
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 136
              },
              "array_index": 132
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 153
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 107,
                  "y": 153
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 153
              },
              "array_index": 151
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 138,
                  "y": 151
              },
              "array_index": 152
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 149,
                  "y": 151
              },
              "array_index": 153
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 72
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 184,
                  "y": 86
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 184,
                  "y": 103
              },
              "array_index": 107
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 184,
                  "y": 120
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 135
              },
              "array_index": 139
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 54
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 189,
                  "y": 55
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 153
              },
              "array_index": 155
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 152
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 166
              },
              "array_index": 164
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 39
              },
              "array_index": 36
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 189,
                  "y": 41
              },
              "array_index": 43
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 53
              },
              "array_index": 51
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 57
              },
              "array_index": 60
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 149
              },
              "array_index": 156
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 59,
                  "y": 151
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 165
              },
              "array_index": 171
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 40,
                  "y": 134
              },
              "array_index": 130
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 72
              },
              "array_index": 66
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 70
              },
              "array_index": 77
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 134
              },
              "array_index": 141
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 185
              },
              "array_index": 190
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 185
              },
              "array_index": 189
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 234,
                  "y": 171
              },
              "array_index": 174
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 150,
                  "y": 120
              },
              "array_index": 121
          }
      ],
      "name": "2-13",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          0,
          0,
          5,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          6,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          4,
          4,
          21,
          21,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          21,
          21,
          0,
          0,
          0,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          21,
          21,
          0,
          0,
          0,
          6,
          5,
          0,
          0,
          0,
          0,
          0,
          6,
          6,
          6,
          6,
          21,
          21,
          0,
          4,
          0,
          6,
          5,
          0,
          0,
          0,
          0,
          0,
          6,
          0,
          0,
          0,
          21,
          21,
          0,
          4,
          0,
          6,
          5,
          0,
          0,
          0,
          0,
          0,
          6,
          0,
          0,
          3,
          21,
          21,
          0,
          4,
          0,
          6,
          5,
          0,
          0,
          0,
          0,
          0,
          6,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 24
              },
              "array_index": 29
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 90,
                  "y": 139
              },
              "array_index": 133
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 90,
                  "y": 155
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 169
              },
              "array_index": 165
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 185
              },
              "array_index": 181
          }
      ],
      "hazards": [],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 25
              },
              "array_index": 26
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 40
              },
              "array_index": 42
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 171,
                  "y": 55
              },
              "array_index": 58
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 74
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 150,
                  "y": 71
              },
              "array_index": 73
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 69
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 68
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 99,
                  "y": 69
              },
              "array_index": 70
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 83,
                  "y": 69
              },
              "array_index": 69
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 70
              },
              "array_index": 68
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 111
              },
              "array_index": 97
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 106
              },
              "array_index": 98
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 61,
                  "y": 104
              },
              "array_index": 99
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 77,
                  "y": 104
              },
              "array_index": 100
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 233,
                  "y": 107
              },
              "array_index": 110
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 214,
                  "y": 105
              },
              "array_index": 109
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 196,
                  "y": 104
              },
              "array_index": 108
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 103
              },
              "array_index": 107
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 164,
                  "y": 104
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 145,
                  "y": 103
              },
              "array_index": 105
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 103
              },
              "array_index": 104
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 115,
                  "y": 103
              },
              "array_index": 103
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 103
              },
              "array_index": 102
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 92,
                  "y": 104
              },
              "array_index": 101
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 119
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 137
              },
              "array_index": 132
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 156
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 170
              },
              "array_index": 164
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 183
              },
              "array_index": 180
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 120
              },
              "array_index": 125
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 120
              },
              "array_index": 126
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 195,
                  "y": 119
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 119
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 189,
                  "y": 138
              },
              "array_index": 139
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 156
              },
              "array_index": 155
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 170
              },
              "array_index": 171
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 184
              },
              "array_index": 187
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 204,
                  "y": 137
              },
              "array_index": 140
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 136
              },
              "array_index": 141
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 139
              },
              "array_index": 142
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 168,
                  "y": 120
              },
              "array_index": 122
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 154,
                  "y": 117
              },
              "array_index": 121
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 134,
                  "y": 118
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 113,
                  "y": 117
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 101,
                  "y": 118
              },
              "array_index": 118
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 116
              },
              "array_index": 117
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 233,
                  "y": 88
              },
              "array_index": 94
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 88
              },
              "array_index": 93
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 42,
                  "y": 156
              },
              "array_index": 146
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 170
              },
              "array_index": 162
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 184
              },
              "array_index": 178
          }
      ],
      "name": "2-14",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          21,
          21,
          0,
          0,
          15,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          6,
          0,
          21,
          21,
          0,
          15,
          15,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          4,
          21,
          21,
          0,
          0,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          4,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          4,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          4,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          21,
          21,
          0,
          6,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          21,
          21,
          6,
          3,
          6,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 90,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 115,
                  "y": 52
              },
              "array_index": 55
          },
          {
              "direction": 270,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 164,
                  "y": 162
              },
              "array_index": 170
          }
      ],
      "hazards": [],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 72
              },
              "array_index": 77
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 92
              },
              "array_index": 93
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 111
              },
              "array_index": 109
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 127
              },
              "array_index": 125
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 213,
                  "y": 142
              },
              "array_index": 141
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 152
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 34
              },
              "array_index": 46
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 53
              },
              "array_index": 61
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 45,
                  "y": 166
              },
              "array_index": 162
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 61,
                  "y": 183
              },
              "array_index": 179
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 23,
                  "y": 184
              },
              "array_index": 177
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 235,
                  "y": 77
              },
              "array_index": 78
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 235,
                  "y": 86
              },
              "array_index": 94
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 235,
                  "y": 101
              },
              "array_index": 110
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 235,
                  "y": 120
              },
              "array_index": 126
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 42,
                  "y": 66
              },
              "array_index": 66
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 66
              },
              "array_index": 67
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 68,
                  "y": 71
              },
              "array_index": 68
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 88
              },
              "array_index": 83
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 59,
                  "y": 56
              },
              "array_index": 51
          }
      ],
      "name": "2-15",
      "tileset": armory_tileset,
      "song": "armory_music"
  },
  {
      "level_map": [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          4,
          0,
          15,
          0,
          0,
          21,
          21,
          0,
          0,
          19,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          6,
          6,
          21,
          21,
          0,
          0,
          0,
          5,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          6,
          6,
          6,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          4,
          0,
          0,
          0,
          6,
          6,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          6,
          0,
          3,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          5,
          6,
          6,
          6,
          6,
          21,
          21,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          19,
          0,
          0,
          6,
          6,
          6,
          21,
          21,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          15,
          0,
          0,
          21,
          21,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          2,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          4,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21
      ],
      "tile_map": [
          10,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          15,
          8,
          27,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          27,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          26,
          28,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          14,
          29
      ],
      "starting_ammo": 0,
      "default_object_config": {
          "direction": 0,
          "orientation": "vertical",
          "type": "",
          "state": "moving",
          "position": {
              "x": 0,
              "y": 0
          },
          "array_index": 0
      },
      "enemies": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 79,
                  "y": 56
              },
              "array_index": 52
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 103
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "flyer",
              "state": "moving",
              "position": {
                  "x": 148,
                  "y": 167
              },
              "array_index": 169
          }
      ],
      "hazards": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 39
              },
              "array_index": 35
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 120
              },
              "array_index": 121
          }
      ],
      "walls": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 6,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 25
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 8,
                  "y": 39
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 11,
                  "y": 51
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 68
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 85
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 12,
                  "y": 119
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 10,
                  "y": 133
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 3,
                  "y": 153
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 2,
                  "y": 175
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 7,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 9,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 82,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 205
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 201
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 202
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 203
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 200
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 246,
                  "y": 188
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 168
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 251,
                  "y": 148
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 122
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 134
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 250,
                  "y": 109
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 86
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 69
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 248,
                  "y": 50
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 36
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 249,
                  "y": 18
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 245,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 4
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 5
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 7
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 6
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 9
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 80,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 65,
                  "y": 10
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 49,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 33,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 8
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 199
              }
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 232,
                  "y": 122
              },
              "array_index": 126
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 213,
                  "y": 121
              },
              "array_index": 125
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 120
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 105
              },
              "array_index": 107
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 187,
                  "y": 88
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 77
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 184,
                  "y": 53
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 40
              },
              "array_index": 46
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 39
              },
              "array_index": 45
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 39
              },
              "array_index": 44
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 202,
                  "y": 59
              },
              "array_index": 60
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 56
              },
              "array_index": 61
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 57
              },
              "array_index": 62
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 71
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 202,
                  "y": 90
              },
              "array_index": 92
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 103
              },
              "array_index": 108
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 101
              },
              "array_index": 109
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 234,
                  "y": 105
              },
              "array_index": 110
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 159
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 136
              },
              "array_index": 130
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 56,
                  "y": 184
              },
              "array_index": 179
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 23,
                  "y": 119
              },
              "array_index": 113
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 247,
                  "y": 73
              },
              "array_index": 79
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 137
              },
              "array_index": 140
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 29
              },
              "array_index": 28
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 73
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 183
              },
              "array_index": 190
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 26
              },
              "array_index": 26
          }
      ],
      "name": "2-16",
      "tileset": armory_tileset,
      "song": "armory_music"
  }
];
