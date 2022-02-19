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
  song: "processing_music",
};

const PROCESSING_LEVELS = [
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
          0,
          21,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          3,
          0,
          21,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          2,
          0,
          21,
          21,
          0,
          11,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          21,
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
          0,
          21,
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
          0,
          21,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          1,
          1,
          0,
          21,
          0,
          0,
          0,
          0,
          21,
          0,
          1,
          1,
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
          0,
          21,
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
          1,
          0,
          1,
          1,
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
          0,
          0,
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
              "type": "hunter",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 52
              },
              "array_index": 50
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
                  "x": 89,
                  "y": 25
              },
              "array_index": 21
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 39
              },
              "array_index": 37
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 87,
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
                  "x": 88,
                  "y": 131
              },
              "array_index": 133
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
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
                  "x": 90,
                  "y": 105
              },
              "array_index": 101
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 90,
                  "y": 93
              },
              "array_index": 85
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 90,
                  "y": 73
              },
              "array_index": 69
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 134
              },
              "array_index": 138
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 156,
                  "y": 135
              },
              "array_index": 137
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 135
              },
              "array_index": 136
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 99,
                  "y": 133
              },
              "array_index": 134
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 118,
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
                  "x": 167,
                  "y": 119
              },
              "array_index": 122
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 39
              },
              "array_index": 42
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 58
              },
              "array_index": 58
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 80
              },
              "array_index": 90
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 101
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 75
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 167
              },
              "array_index": 165
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 167
              },
              "array_index": 170
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 127,
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
                  "x": 137,
                  "y": 168
              },
              "array_index": 168
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 47,
                  "y": 109
              },
              "array_index": 98
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 102
              },
              "array_index": 99
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
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
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 104
              },
              "array_index": 109
          }
      ],
      "shots": [],
      "name": "3-1",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          21,
          11,
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
          1,
          1,
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
          0,
          0,
          1,
          1,
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
          0,
          0,
          2,
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
          1,
          1,
          0,
          0,
          1,
          1,
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
          1,
          1,
          0,
          0,
          1,
          1,
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
          0,
          1,
          1,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          4,
          4,
          0,
          1,
          1,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          0,
          21,
          21,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          0,
          3,
          0,
          21,
          21,
          0,
          4,
          4,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
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
              "type": "hunter",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 23
              },
              "array_index": 21
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
                  "x": 24,
                  "y": 136
              },
              "array_index": 129
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 39,
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
                  "y": 136
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
                  "y": 136
              },
              "array_index": 132
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 232,
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
                  "x": 219,
                  "y": 134
              },
              "array_index": 141
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 200,
                  "y": 135
              },
              "array_index": 140
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 186,
                  "y": 133
              },
              "array_index": 139
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 118
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 100
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
                  "y": 75
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 25
              },
              "array_index": 27
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 45
              },
              "array_index": 43
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 187,
                  "y": 87
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 123
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 26
              },
              "array_index": 20
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 40
              },
              "array_index": 36
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 75,
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
                  "x": 70,
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
                  "x": 188,
                  "y": 61
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 69,
                  "y": 107
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
                  "y": 83
              },
              "array_index": 84
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 55
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
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
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 88
              },
              "array_index": 85
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 86
              },
              "array_index": 86
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
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
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 90,
                  "y": 102
              },
              "array_index": 101
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 87
              },
              "array_index": 90
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 87
              },
              "array_index": 89
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 153,
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
                  "x": 167,
                  "y": 104
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 133
              },
              "array_index": 135
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 136
              },
              "array_index": 136
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 169,
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
                  "x": 86,
                  "y": 150
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 168
              },
              "array_index": 170
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 183
              },
              "array_index": 186
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 183
              },
              "array_index": 187
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 189,
                  "y": 149
              },
              "array_index": 155
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 151
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 168
              },
              "array_index": 171
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 40
              },
              "array_index": 37
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 37
              },
              "array_index": 38
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 32,
                  "y": 161
              },
              "array_index": 162
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 51,
                  "y": 157
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 169
              },
              "array_index": 163
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 40,
                  "y": 153
              },
              "array_index": 146
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 182
              },
              "array_index": 178
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 185
              },
              "array_index": 179
          }
      ],
      "name": "3-2",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          21,
          21,
          0,
          3,
          21,
          21,
          0,
          0,
          1,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
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
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          21,
          0,
          21,
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
          21,
          0,
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
          1,
          1,
          21,
          21,
          11,
          21,
          21,
          4,
          1,
          4,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          21,
          0,
          21,
          21,
          0,
          0,
          1,
          1,
          1,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          21,
          0,
          21,
          21,
          0,
          0,
          1,
          1,
          1,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          21,
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
          21,
          21,
          1,
          1,
          21,
          21,
          0,
          21,
          21,
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
          0,
          21,
          21,
          0,
          21,
          21,
          0,
          0,
          0,
          4,
          4,
          1,
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
              "type": "hunter",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 101
              },
              "array_index": 97
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
                  "x": 63,
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
                  "x": 55,
                  "y": 105
              },
              "array_index": 99
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 57,
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
                  "x": 55,
                  "y": 184
              },
              "array_index": 179
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 58,
                  "y": 169
              },
              "array_index": 163
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 156
              },
              "array_index": 147
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 86
              },
              "array_index": 84
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 86
              },
              "array_index": 85
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 112,
                  "y": 89
              },
              "array_index": 87
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 86
              },
              "array_index": 88
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 106,
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
                  "x": 185,
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
                  "x": 201,
                  "y": 24
              },
              "array_index": 28
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
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
                  "x": 181,
                  "y": 68
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 52
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 37
              },
              "array_index": 43
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 20
              },
              "array_index": 27
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 200,
                  "y": 71
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 87
              },
              "array_index": 92
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 101
              },
              "array_index": 107
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 186,
                  "y": 122
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 153
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
                  "y": 151
              },
              "array_index": 156
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 101
              },
              "array_index": 108
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 120
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 200,
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
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 121
              },
              "array_index": 118
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 106,
                  "y": 136
              },
              "array_index": 134
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 120
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 137
              },
              "array_index": 135
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 167
              },
              "array_index": 166
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 122,
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
                  "x": 215,
                  "y": 87
              },
              "array_index": 93
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 233,
                  "y": 87
              },
              "array_index": 94
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
                  "x": 230,
                  "y": 148
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 134,
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
                  "x": 60,
                  "y": 53
              },
              "array_index": 51
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 79,
                  "y": 54
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 99,
                  "y": 54
              },
              "array_index": 54
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 55
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 54
              },
              "array_index": 53
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 63,
                  "y": 37
              },
              "array_index": 35
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 120
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 139,
                  "y": 136
              },
              "array_index": 136
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 102
              },
              "array_index": 101
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 183
              },
              "array_index": 185
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 37,
                  "y": 56
              },
              "array_index": 50
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 40,
                  "y": 74
              },
              "array_index": 66
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 89
              },
              "array_index": 82
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 40,
                  "y": 111
              },
              "array_index": 98
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 121
              },
              "array_index": 114
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 42,
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
                  "x": 41,
                  "y": 156
              },
              "array_index": 146
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 170
              },
              "array_index": 162
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 188
              },
              "array_index": 178
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 107,
                  "y": 103
              },
              "array_index": 102
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 103
              },
              "array_index": 100
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 133,
                  "y": 183
              },
              "array_index": 184
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 185
              },
              "array_index": 183
          }
      ],
      "name": "3-3",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          6,
          1,
          6,
          0,
          0,
          6,
          1,
          6,
          0,
          11,
          0,
          21,
          21,
          0,
          0,
          0,
          6,
          1,
          6,
          0,
          3,
          6,
          1,
          6,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          6,
          1,
          6,
          6,
          6,
          6,
          1,
          6,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          6,
          1,
          1,
          1,
          1,
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
          6,
          6,
          6,
          6,
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
          21,
          21,
          21,
          0,
          0,
          0,
          0,
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
          0,
          0,
          0,
          0,
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
          0,
          0,
          0,
          0,
          21,
          21,
          21,
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
              "type": "hunter",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 19
              },
              "array_index": 29
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
                  "x": 89,
                  "y": 24
              },
              "array_index": 21
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 38
              },
              "array_index": 37
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 56
              },
              "array_index": 53
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 73
              },
              "array_index": 70
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 71
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 72
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 24
              },
              "array_index": 26
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 39
              },
              "array_index": 42
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 52
              },
              "array_index": 58
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
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 150,
                  "y": 23
              },
              "array_index": 25
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 34
              },
              "array_index": 41
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 150,
                  "y": 56
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 132,
                  "y": 54
              },
              "array_index": 56
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 55
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
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
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 37
              },
              "array_index": 38
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 22
              },
              "array_index": 22
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 71
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 72
              },
              "array_index": 69
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 101,
                  "y": 84
              },
              "array_index": 86
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 86
              },
              "array_index": 87
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 134,
                  "y": 87
              },
              "array_index": 88
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 87
              },
              "array_index": 89
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 54
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 43
              },
              "array_index": 36
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 70,
                  "y": 23
              },
              "array_index": 20
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 187,
                  "y": 24
              },
              "array_index": 27
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 187,
                  "y": 38
              },
              "array_index": 43
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 53
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 63,
                  "y": 127
              },
              "array_index": 115
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 118
              },
              "array_index": 117
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 134
              },
              "array_index": 133
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 75,
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
                  "x": 60,
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
                  "x": 55,
                  "y": 147
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 150
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 148
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 173,
                  "y": 121
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
                  "x": 199,
                  "y": 120
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 133
              },
              "array_index": 138
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 179,
                  "y": 134
              },
              "array_index": 139
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 134
              },
              "array_index": 140
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 150
              },
              "array_index": 156
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 186,
                  "y": 153
              },
              "array_index": 155
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 152
              },
              "array_index": 154
          }
      ],
      "shots": [],
      "name": "3-4",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          3,
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
          4,
          21,
          21,
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
          0,
          4,
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
          21,
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
          0,
          21,
          1,
          18,
          1,
          18,
          1,
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
          21,
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
          0,
          21,
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
          0,
          0,
          0,
          0,
          0,
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
      "enemies": [],
      "hazards": [
          {
              "direction": 0,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 120,
                  "y": 102
              },
              "array_index": 103
          },
          {
              "direction": 0,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 104
              },
              "array_index": 105
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
                  "x": 24,
                  "y": 153
              },
              "array_index": 145
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 36,
                  "y": 152
              },
              "array_index": 146
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 56,
                  "y": 151
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 75,
                  "y": 151
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 151
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 233,
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
                  "x": 224,
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
                  "x": 209,
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
                  "x": 200,
                  "y": 153
              },
              "array_index": 156
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 177,
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
                  "x": 104,
                  "y": 96
              },
              "array_index": 102
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 138,
                  "y": 103
              },
              "array_index": 104
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 104
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 136
              },
              "array_index": 139
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 113
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 102
              },
              "array_index": 101
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 116
              },
              "array_index": 117
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 135
              },
              "array_index": 133
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 90,
                  "y": 84
              },
              "array_index": 85
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 69
              },
              "array_index": 69
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
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
                  "x": 71,
                  "y": 52
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 51,
                  "y": 53
              },
              "array_index": 51
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 34,
                  "y": 54
              },
              "array_index": 50
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 21,
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
                  "x": 182,
                  "y": 55
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 213,
                  "y": 57
              },
              "array_index": 61
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 235,
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
                  "x": 185,
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
                  "x": 185,
                  "y": 84
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 22
              },
              "array_index": 21
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 37
              },
              "array_index": 37
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 224,
                  "y": 25
              },
              "array_index": 30
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 226,
                  "y": 36
              },
              "array_index": 46
          }
      ],
      "name": "3-5",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          4,
          4,
          0,
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
          0,
          21,
          21,
          4,
          4,
          0,
          21,
          21,
          21,
          0,
          0,
          0,
          0,
          2,
          21,
          0,
          0,
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
          21,
          0,
          0,
          21,
          21,
          1,
          1,
          1,
          21,
          21,
          21,
          21,
          21,
          21,
          18,
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
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          21,
          0,
          21,
          21,
          0,
          0,
          0,
          1,
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
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          21,
          1,
          1,
          0,
          0,
          0,
          21,
          21,
          0,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          1,
          1,
          1,
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
          21,
          21,
          21,
          21,
          21,
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
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 71
              },
              "array_index": 74
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
                  "x": 119,
                  "y": 55
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 56
              },
              "array_index": 54
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
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
                  "x": 71,
                  "y": 56
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 77,
                  "y": 74
              },
              "array_index": 68
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
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
                  "x": 111,
                  "y": 73
              },
              "array_index": 70
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 127,
                  "y": 71
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 139,
                  "y": 72
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 70
              },
              "array_index": 73
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 183,
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
                  "x": 200,
                  "y": 71
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 52
              },
              "array_index": 60
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 202,
                  "y": 43
              },
              "array_index": 44
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 27
              },
              "array_index": 28
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 69
              },
              "array_index": 77
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 71
              },
              "array_index": 78
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 87
              },
              "array_index": 92
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 87
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 100
              },
              "array_index": 107
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 198,
                  "y": 102
              },
              "array_index": 108
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 117
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 113
              },
              "array_index": 115
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 119
              },
              "array_index": 114
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 42,
                  "y": 132
              },
              "array_index": 130
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 58,
                  "y": 138
              },
              "array_index": 131
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 44,
                  "y": 148
              },
              "array_index": 146
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 153
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 153
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 73,
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
                  "x": 91,
                  "y": 138
              },
              "array_index": 133
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 151
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 106,
                  "y": 156
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 135
              },
              "array_index": 134
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 117
              },
              "array_index": 122
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 149,
                  "y": 118
              },
              "array_index": 121
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 159,
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
                  "x": 137,
                  "y": 118
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 166
              },
              "array_index": 170
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 166
              },
              "array_index": 171
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 166
              },
              "array_index": 172
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 222,
                  "y": 167
              },
              "array_index": 173
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 182
              },
              "array_index": 188
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 182
              },
              "array_index": 187
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 181
              },
              "array_index": 189
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 228,
                  "y": 167
              },
              "array_index": 174
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 235,
                  "y": 183
              },
              "array_index": 190
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 97,
                  "y": 40
              },
              "array_index": 38
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 93,
                  "y": 23
              },
              "array_index": 21
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 75,
                  "y": 22
              },
              "array_index": 20
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 42
              },
              "array_index": 36
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 85,
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
                  "x": 105,
                  "y": 18
              },
              "array_index": 22
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 152
              },
              "array_index": 153
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 119
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 71
              },
              "array_index": 67
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 71
              },
              "array_index": 66
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
                  "x": 169,
                  "y": 135
              },
              "array_index": 138
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 150
              },
              "array_index": 154
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 152,
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
                  "x": 153,
                  "y": 69
              },
              "array_index": 73
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 186,
                  "y": 73
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 186,
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
                  "x": 189,
                  "y": 148
              },
              "array_index": 155
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 180
              },
              "array_index": 177
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 184
              },
              "array_index": 186
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 26,
                  "y": 28
              },
              "array_index": 17
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 40,
                  "y": 26
              },
              "array_index": 18
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 26,
                  "y": 41
              },
              "array_index": 33
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 38,
                  "y": 41
              },
              "array_index": 34
          }
      ],
      "name": "3-6",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          6,
          0,
          3,
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
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          1,
          18,
          1,
          0,
          0,
          1,
          18,
          1,
          21,
          21,
          21,
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
          19,
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
          0,
          21,
          21,
          0,
          0,
          0,
          0,
          19,
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
          0,
          0,
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
          1,
          18,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          18,
          1,
          21,
          21,
          0,
          0,
          18,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          18,
          0,
          0,
          21,
          21,
          4,
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
          1,
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
      "enemies": [],
      "hazards": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 72
              },
              "array_index": 67
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 71
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 102
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 101
              },
              "array_index": 101
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 56
              },
              "array_index": 53
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 56
              },
              "array_index": 58
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 40,
                  "y": 152
              },
              "array_index": 146
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 218,
                  "y": 151
              },
              "array_index": 157
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 168
              },
              "array_index": 163
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 200,
                  "y": 168
              },
              "array_index": 172
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
                  "y": 43
              },
              "array_index": 33
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 41
              },
              "array_index": 34
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 41
              },
              "array_index": 35
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 55
              },
              "array_index": 51
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 37,
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
                  "x": 231,
                  "y": 40
              },
              "array_index": 46
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 40
              },
              "array_index": 45
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 41
              },
              "array_index": 44
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 202,
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
                  "x": 215,
                  "y": 57
              },
              "array_index": 61
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 54
              },
              "array_index": 62
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 200,
                  "y": 22
              },
              "array_index": 28
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
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
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 103,
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
                  "x": 184,
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
                  "x": 151,
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
                  "x": 23,
                  "y": 145
              },
              "array_index": 145
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 58,
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
                  "x": 56,
                  "y": 187
              },
              "array_index": 179
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
                  "x": 200,
                  "y": 152
              },
              "array_index": 156
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 180
              },
              "array_index": 188
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 71,
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
                  "x": 72,
                  "y": 118
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 184,
                  "y": 88
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 120
              },
              "array_index": 123
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 26,
                  "y": 183
              },
              "array_index": 177
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 184
              },
              "array_index": 190
          }
      ],
      "name": "3-7",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          4,
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
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          1,
          18,
          1,
          1,
          18,
          1,
          18,
          1,
          21,
          21,
          21,
          21,
          21,
          0,
          0,
          21,
          4,
          0,
          18,
          4,
          0,
          0,
          0,
          5,
          21,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          1,
          18,
          1,
          18,
          1,
          1,
          18,
          1,
          21,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          5,
          0,
          0,
          0,
          0,
          18,
          0,
          4,
          21,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          1,
          18,
          1,
          1,
          18,
          1,
          18,
          1,
          21,
          0,
          0,
          21,
          21,
          0,
          0,
          21,
          4,
          0,
          18,
          0,
          0,
          0,
          0,
          5,
          21,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          1,
          18,
          1,
          18,
          1,
          1,
          18,
          1,
          21,
          21,
          21,
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
          1,
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
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 71
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 103
              },
              "array_index": 100
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 133
              },
              "array_index": 139
          }
      ],
      "hazards": [
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 57
              },
              "array_index": 53
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 136,
                  "y": 57
              },
              "array_index": 56
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 57
              },
              "array_index": 58
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 118,
                  "y": 87
              },
              "array_index": 87
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 88
              },
              "array_index": 85
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 87
              },
              "array_index": 90
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 118
              },
              "array_index": 120
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 118
              },
              "array_index": 122
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 84,
                  "y": 123
              },
              "array_index": 117
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 153
              },
              "array_index": 149
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 152
              },
              "array_index": 151
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 150
              },
              "array_index": 154
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 69
              },
              "array_index": 70
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 103
              },
              "array_index": 105
          },
          {
              "direction": 180,
              "orientation": "vertical",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 134
              },
              "array_index": 134
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
                  "y": 56
              },
              "array_index": 49
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 56
              },
              "array_index": 50
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 54
              },
              "array_index": 51
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 52,
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
                  "x": 52,
                  "y": 91
              },
              "array_index": 83
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 105
              },
              "array_index": 99
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 128
              },
              "array_index": 131
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 52,
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
                  "x": 53,
                  "y": 152
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 37,
                  "y": 154
              },
              "array_index": 146
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 21,
                  "y": 149
              },
              "array_index": 145
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 54,
                  "y": 165
              },
              "array_index": 163
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 56,
                  "y": 179
              },
              "array_index": 179
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 149
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 151
              },
              "array_index": 157
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 198,
                  "y": 150
              },
              "array_index": 156
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 135
              },
              "array_index": 140
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 116
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 198,
                  "y": 98
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
                  "y": 85
              },
              "array_index": 92
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 199,
                  "y": 71
              },
              "array_index": 76
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 214,
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
                  "x": 231,
                  "y": 55
              },
              "array_index": 62
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 57
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 185,
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
                  "x": 120,
                  "y": 55
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 134,
                  "y": 88
              },
              "array_index": 88
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 89
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 75,
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
                  "x": 158,
                  "y": 88
              },
              "array_index": 89
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 154,
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
                  "x": 102,
                  "y": 52
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
                  "y": 118
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 99,
                  "y": 119
              },
              "array_index": 118
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 119
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 120
              },
              "array_index": 121
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 121
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 153,
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
                  "x": 130,
                  "y": 147
              },
              "array_index": 152
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 149
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 186,
                  "y": 154
              },
              "array_index": 155
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 76,
                  "y": 149
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 163
              },
              "array_index": 172
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 200,
                  "y": 183
              },
              "array_index": 188
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 23
              },
              "array_index": 28
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 205,
                  "y": 38
              },
              "array_index": 44
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 77,
                  "y": 72
              },
              "array_index": 68
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
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
              "type": "normal_shot",
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
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 71
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 26
              },
              "array_index": 22
          }
      ],
      "name": "3-8",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          0,
          10,
          10,
          10,
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
          21,
          0,
          0,
          2,
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
                  "x": 28,
                  "y": 105
              },
              "array_index": 97
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
                  "x": 232,
                  "y": 88
              },
              "array_index": 94
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 88
              },
              "array_index": 93
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 197,
                  "y": 87
              },
              "array_index": 92
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 87
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 172,
                  "y": 87
              },
              "array_index": 90
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
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
                  "x": 133,
                  "y": 88
              },
              "array_index": 88
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 106,
                  "y": 88
              },
              "array_index": 86
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 115,
                  "y": 87
              },
              "array_index": 87
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 81,
                  "y": 86
              },
              "array_index": 85
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 66,
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
                  "x": 54,
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
                  "x": 37,
                  "y": 87
              },
              "array_index": 82
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 23,
                  "y": 85
              },
              "array_index": 81
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 226,
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
                  "x": 212,
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
                  "x": 197,
                  "y": 120
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 180,
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
                  "x": 161,
                  "y": 119
              },
              "array_index": 122
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 143,
                  "y": 118
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 155,
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
                  "x": 115,
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
                  "x": 99,
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
                  "x": 108,
                  "y": 139
              },
              "array_index": 134
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 153
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 165
              },
              "array_index": 166
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 180
              },
              "array_index": 182
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 164
              },
              "array_index": 164
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 55,
                  "y": 161
              },
              "array_index": 163
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 168
              },
              "array_index": 162
          }
      ],
      "name": "3-9",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          2,
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
          21,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          6,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          10,
          10,
          0,
          0,
          5,
          0,
          0,
          0,
          4,
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
          21,
          21,
          21,
          21,
          21,
          4,
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
          21,
          21,
          21,
          21,
          21,
          6,
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
          6,
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
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 81,
                  "y": 80
              },
              "array_index": 85
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
                  "x": 230,
                  "y": 167
              },
              "array_index": 174
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 182
              },
              "array_index": 189
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 87
              },
              "array_index": 90
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 101
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 71
              },
              "array_index": 73
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 70
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 122,
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
                  "x": 102,
                  "y": 69
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
                  "y": 68
              },
              "array_index": 69
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 88,
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
                  "y": 56
              },
              "array_index": 54
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 57
              },
              "array_index": 55
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
                  "x": 72,
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
                  "x": 71,
                  "y": 54
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 152,
                  "y": 120
              },
              "array_index": 121
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 135,
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
                  "x": 120,
                  "y": 122
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 121
              },
              "array_index": 118
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 86,
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
                  "x": 72,
                  "y": 119
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 101
              },
              "array_index": 104
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 98,
                  "y": 104
              },
              "array_index": 102
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 104
              },
              "array_index": 101
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 104
              },
              "array_index": 100
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 88
              },
              "array_index": 89
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 152,
                  "y": 104
              },
              "array_index": 105
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 29,
                  "y": 90
              },
              "array_index": 81
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 37,
                  "y": 89
              },
              "array_index": 82
          }
      ],
      "name": "3-10",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          21,
          0,
          21,
          0,
          21,
          0,
          21,
          0,
          21,
          0,
          21,
          0,
          21,
          21,
          21,
          21,
          21,
          21,
          4,
          21,
          21,
          21,
          0,
          21,
          21,
          21,
          4,
          21,
          21,
          21,
          21,
          5,
          0,
          0,
          0,
          21,
          21,
          21,
          21,
          21,
          5,
          0,
          0,
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
          6,
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
          6,
          6,
          6,
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
          6,
          6,
          3,
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
          6,
          6,
          6,
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
          6,
          0,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          5,
          0,
          0,
          0,
          0,
          0,
          21,
          5,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          2,
          21,
          21,
          21,
          10,
          21,
          21,
          21,
          21,
          21,
          10,
          21,
          21,
          21,
          21,
          21,
          21,
          0,
          21,
          0,
          21,
          0,
          21,
          0,
          21,
          0,
          21,
          0,
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
                  "x": 154,
                  "y": 150
              },
              "array_index": 153
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 42,
                  "y": 151
              },
              "array_index": 146
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 56
              },
              "array_index": 49
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 55
              },
              "array_index": 58
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
                  "x": 25,
                  "y": 47
              },
              "array_index": 33
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 42,
                  "y": 30
              },
              "array_index": 18
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 58,
                  "y": 40
              },
              "array_index": 35
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 75,
                  "y": 25
              },
              "array_index": 20
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 38
              },
              "array_index": 37
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 22
              },
              "array_index": 22
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 43
              },
              "array_index": 39
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 24
              },
              "array_index": 24
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 157,
                  "y": 43
              },
              "array_index": 41
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 170,
                  "y": 24
              },
              "array_index": 26
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 42
              },
              "array_index": 43
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 202,
                  "y": 23
              },
              "array_index": 28
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 214,
                  "y": 39
              },
              "array_index": 45
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 24
              },
              "array_index": 30
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 55
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 54
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 168
              },
              "array_index": 162
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 183
              },
              "array_index": 177
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 54,
                  "y": 186
              },
              "array_index": 179
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 74,
                  "y": 169
              },
              "array_index": 164
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 90,
                  "y": 183
              },
              "array_index": 181
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 169
              },
              "array_index": 166
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 182
              },
              "array_index": 183
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 138,
                  "y": 167
              },
              "array_index": 168
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 184
              },
              "array_index": 185
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 168
              },
              "array_index": 170
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 184
              },
              "array_index": 187
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 200,
                  "y": 168
              },
              "array_index": 172
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 213,
                  "y": 185
              },
              "array_index": 189
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 233,
                  "y": 167
              },
              "array_index": 174
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 147
              },
              "array_index": 152
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 86
              },
              "array_index": 88
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 157,
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
                  "x": 120,
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
                  "x": 137,
                  "y": 119
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 103
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 154,
                  "y": 85
              },
              "array_index": 89
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 104
              },
              "array_index": 102
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 114
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 159,
                  "y": 116
              },
              "array_index": 121
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 87
              },
              "array_index": 87
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 133,
                  "y": 54
              },
              "array_index": 56
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 140,
                  "y": 71
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 133,
                  "y": 131
              },
              "array_index": 136
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 59,
                  "y": 164
              },
              "array_index": 163
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 167
              },
              "array_index": 167
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 169
              },
              "array_index": 173
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 171
              },
              "array_index": 169
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 107,
                  "y": 42
              },
              "array_index": 38
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 45,
                  "y": 40
              },
              "array_index": 34
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 41
              },
              "array_index": 42
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 102,
                  "y": 57
              },
              "array_index": 54
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 86,
                  "y": 56
              },
              "array_index": 53
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 233,
                  "y": 56
              },
              "array_index": 62
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
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 40
              },
              "array_index": 36
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 42
              },
              "array_index": 44
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 167
              },
              "array_index": 171
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 167
              },
              "array_index": 165
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 166
              },
              "array_index": 171
          }
      ],
      "name": "3-11",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          21,
          0,
          0,
          21,
          0,
          4,
          1,
          0,
          1,
          4,
          21,
          21,
          0,
          0,
          0,
          0,
          21,
          0,
          0,
          21,
          0,
          1,
          4,
          1,
          0,
          1,
          21,
          21,
          21,
          21,
          21,
          18,
          21,
          21,
          21,
          21,
          1,
          10,
          1,
          4,
          1,
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
          1,
          4,
          1,
          10,
          1,
          4,
          1,
          21,
          21,
          0,
          0,
          21,
          10,
          0,
          0,
          4,
          0,
          1,
          4,
          1,
          0,
          1,
          4,
          21,
          21,
          21,
          21,
          21,
          1,
          0,
          1,
          0,
          1,
          0,
          1,
          1,
          1,
          0,
          1,
          21,
          21,
          1,
          0,
          1,
          4,
          1,
          0,
          1,
          4,
          1,
          0,
          1,
          4,
          1,
          0,
          21,
          21,
          4,
          1,
          10,
          1,
          1,
          1,
          0,
          1,
          4,
          1,
          0,
          1,
          1,
          1,
          21,
          21,
          1,
          4,
          1,
          10,
          1,
          4,
          1,
          10,
          1,
          1,
          1,
          0,
          1,
          4,
          21,
          21,
          0,
          1,
          4,
          1,
          0,
          1,
          4,
          1,
          0,
          1,
          4,
          1,
          0,
          1,
          21,
          21,
          1,
          0,
          1,
          4,
          1,
          0,
          1,
          4,
          1,
          0,
          1,
          0,
          1,
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
      "enemies": [],
      "hazards": [
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 69,
                  "y": 56
              },
              "array_index": 52
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
                  "y": 55
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
                  "x": 58,
                  "y": 57
              },
              "array_index": 51
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 57,
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
                  "x": 59,
                  "y": 102
              },
              "array_index": 99
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 90,
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
                  "x": 89,
                  "y": 26
              },
              "array_index": 21
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 109,
                  "y": 61
              },
              "array_index": 54
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
                  "y": 55
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 132,
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
                  "x": 137,
                  "y": 42
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
                  "y": 27
              },
              "array_index": 24
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 103
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
                  "y": 119
              },
              "array_index": 115
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 119
              },
              "array_index": 117
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 135
              },
              "array_index": 132
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 137
              },
              "array_index": 134
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 102
              },
              "array_index": 102
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 119,
                  "y": 118
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 139,
                  "y": 104
              },
              "array_index": 104
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
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
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 134,
                  "y": 136
              },
              "array_index": 136
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 104
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 138
              },
              "array_index": 138
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 187,
                  "y": 119
              },
              "array_index": 123
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
                  "x": 201,
                  "y": 139
              },
              "array_index": 140
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 219,
                  "y": 115
              },
              "array_index": 125
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 233,
                  "y": 139
              },
              "array_index": 142
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 87,
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
                  "x": 121,
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
                  "x": 153,
                  "y": 154
              },
              "array_index": 153
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 186,
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
                  "x": 220,
                  "y": 153
              },
              "array_index": 157
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 196,
                  "y": 170
              },
              "array_index": 172
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 168
              },
              "array_index": 170
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 135,
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
                  "x": 102,
                  "y": 167
              },
              "array_index": 166
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 73,
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
                  "x": 54,
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
                  "x": 37,
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
                  "x": 37,
                  "y": 167
              },
              "array_index": 162
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 56,
                  "y": 182
              },
              "array_index": 179
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 182
              },
              "array_index": 181
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 118,
                  "y": 180
              },
              "array_index": 183
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 149,
                  "y": 186
              },
              "array_index": 185
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 183
              },
              "array_index": 187
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 221,
                  "y": 184
              },
              "array_index": 189
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 169
              },
              "array_index": 174
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 86
              },
              "array_index": 89
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 70
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 188,
                  "y": 85
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 217,
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
                  "x": 200,
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
                  "x": 229,
                  "y": 69
              },
              "array_index": 78
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 214,
                  "y": 54
              },
              "array_index": 61
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 183,
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
                  "x": 152,
                  "y": 53
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 70
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 173,
                  "y": 38
              },
              "array_index": 42
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 187,
                  "y": 25
              },
              "array_index": 27
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 199,
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
                  "x": 232,
                  "y": 40
              },
              "array_index": 46
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 23
              },
              "array_index": 29
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 42,
                  "y": 105
              },
              "array_index": 98
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 23,
                  "y": 103
              },
              "array_index": 97
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 22,
                  "y": 122
              },
              "array_index": 113
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 21,
                  "y": 153
              },
              "array_index": 145
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 17,
                  "y": 184
              },
              "array_index": 177
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
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
              "type": "normal_wall",
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
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 213,
                  "y": 134
              },
              "array_index": 141
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 135
              },
              "array_index": 133
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_wall",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 151
              },
              "array_index": 154
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 81
              },
              "array_index": 84
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 117
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 136,
                  "y": 118
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 121
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 137
              },
              "array_index": 137
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 138
              },
              "array_index": 133
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 217,
                  "y": 135
              },
              "array_index": 141
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 150
              },
              "array_index": 154
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 189,
                  "y": 171
              },
              "array_index": 171
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 168
              },
              "array_index": 167
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 106,
                  "y": 149
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 139,
                  "y": 185
              },
              "array_index": 184
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 235,
                  "y": 152
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 24,
                  "y": 135
              },
              "array_index": 129
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 153
              },
              "array_index": 146
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 62,
                  "y": 167
              },
              "array_index": 163
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 185
              },
              "array_index": 180
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 186,
                  "y": 101
              },
              "array_index": 107
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 85
              },
              "array_index": 90
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
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
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 172,
                  "y": 27
              },
              "array_index": 26
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 39
              },
              "array_index": 43
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 54
              },
              "array_index": 60
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 216,
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
                  "x": 233,
                  "y": 87
              },
              "array_index": 94
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 23
              },
              "array_index": 30
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 61,
                  "y": 139
              },
              "array_index": 131
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 152
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
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
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 74
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
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
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 75,
                  "y": 89
              },
              "array_index": 84
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "normal_shot",
              "state": "moving",
              "position": {
                  "x": 118,
                  "y": 88
              },
              "array_index": 87
          }
      ],
      "name": "3-12",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          5,
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
          0,
          0,
          0,
          0,
          0,
          21,
          10,
          10,
          10,
          21,
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
          0,
          0,
          21,
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
          13,
          0,
          21,
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
          0,
          0,
          21,
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
              "orientation": "horizontal",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 25
              },
              "array_index": 24
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
                  "y": 71
              },
              "array_index": 66
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 57,
                  "y": 73
              },
              "array_index": 67
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 73,
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
                  "x": 83,
                  "y": 71
              },
              "array_index": 69
          },
          {
              "direction": 180,
              "orientation": "horizontal",
              "type": "electric",
              "state": "moving",
              "position": {
                  "x": 129,
                  "y": 112
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 109,
                  "y": 116
              },
              "array_index": 118
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 106,
                  "y": 101
              },
              "array_index": 102
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 106,
                  "y": 92
              },
              "array_index": 86
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 106,
                  "y": 73
              },
              "array_index": 70
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
                  "y": 119
              },
              "array_index": 122
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 101
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 87
              },
              "array_index": 90
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 76
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
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
                  "x": 231,
                  "y": 73
              },
              "array_index": 78
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
                  "x": 205,
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
                  "x": 170,
                  "y": 139
              },
              "array_index": 138
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 173,
                  "y": 152
              },
              "array_index": 154
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 187,
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
                  "x": 205,
                  "y": 151
              },
              "array_index": 156
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 223,
                  "y": 151
              },
              "array_index": 157
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 230,
                  "y": 151
              },
              "array_index": 158
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 105,
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
                  "x": 103,
                  "y": 151
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 88,
                  "y": 150
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 68,
                  "y": 150
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 151
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 28,
                  "y": 151
              },
              "array_index": 145
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 151
              },
              "array_index": 146
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 141,
                  "y": 95
              },
              "array_index": 88
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 154,
                  "y": 90
              },
              "array_index": 89
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 125,
                  "y": 87
              },
              "array_index": 87
          }
      ],
      "name": "3-13",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          10,
          10,
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
          21,
          13,
          5,
          5,
          5,
          13,
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
          0,
          0,
          0,
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
          21,
          21,
          0,
          10,
          0,
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
          13,
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
          5,
          0,
          21,
          21,
          0,
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
                  "x": 121,
                  "y": 79
              },
              "array_index": 71
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 139,
                  "y": 73
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 156,
                  "y": 72
              },
              "array_index": 73
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 104
              },
              "array_index": 109
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 119
              },
              "array_index": 125
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 153
              },
              "array_index": 157
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 215,
                  "y": 167
              },
              "array_index": 173
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
                  "x": 25,
                  "y": 59
              },
              "array_index": 49
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 57
              },
              "array_index": 50
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 56,
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
                  "x": 71,
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
                  "x": 89,
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
                  "x": 185,
                  "y": 54
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 68
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 185,
                  "y": 86
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 85,
                  "y": 69
              },
              "array_index": 69
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 86,
                  "y": 85
              },
              "array_index": 85
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "electric",
              "state": "open",
              "position": {
                  "x": 105,
                  "y": 70
              },
              "array_index": 70
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "electric",
              "state": "open",
              "position": {
                  "x": 166,
                  "y": 71
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 69,
                  "y": 91
              },
              "array_index": 84
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 91
              },
              "array_index": 83
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 29,
                  "y": 90
              },
              "array_index": 81
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 205,
                  "y": 90
              },
              "array_index": 92
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 214,
                  "y": 87
              },
              "array_index": 93
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 88
              },
              "array_index": 94
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 35,
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
                  "x": 199,
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
                  "x": 216,
                  "y": 56
              },
              "array_index": 61
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 236,
                  "y": 54
              },
              "array_index": 62
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 27,
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
                  "x": 45,
                  "y": 137
              },
              "array_index": 130
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 27,
                  "y": 152
              },
              "array_index": 145
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 43,
                  "y": 154
              },
              "array_index": 146
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 63,
                  "y": 151
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 64,
                  "y": 138
              },
              "array_index": 132
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 59,
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
                  "x": 95,
                  "y": 138
              },
              "array_index": 133
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 113,
                  "y": 136
              },
              "array_index": 135
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 138
              },
              "array_index": 139
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
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
                  "y": 136
              },
              "array_index": 137
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 136
              },
              "array_index": 136
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 106,
                  "y": 139
              },
              "array_index": 134
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 77,
                  "y": 151
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 152
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 133,
                  "y": 153
              },
              "array_index": 152
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 147,
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
                  "x": 162,
                  "y": 150
              },
              "array_index": 154
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 150
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 154
              },
              "array_index": 151
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 151
              },
              "array_index": 155
          },
          {
              "direction": 0,
              "orientation": "horizontal",
              "type": "electric",
              "state": "open",
              "position": {
                  "x": 217,
                  "y": 142
              },
              "array_index": 141
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 141,
                  "y": 34
              },
              "array_index": 40
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 155,
                  "y": 41
              },
              "array_index": 41
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 127
              },
              "array_index": 114
          }
      ],
      "name": "3-14",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          13,
          0,
          13,
          0,
          13,
          0,
          13,
          0,
          13,
          0,
          13,
          0,
          21,
          21,
          19,
          19,
          0,
          0,
          0,
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
          5,
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
          5,
          21,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          10,
          10,
          10,
          0,
          0,
          0,
          0,
          0,
          21,
          21,
          5,
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
          5,
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
          19,
          19,
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
          15,
          15,
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
          15,
          15,
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
                  "x": 27,
                  "y": 119
              },
              "array_index": 113
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 87
              },
              "array_index": 94
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 128,
                  "y": 119
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 229,
                  "y": 119
              },
              "array_index": 126
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 85
              },
              "array_index": 88
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "leaper",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 87
              },
              "array_index": 81
          }
      ],
      "hazards": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 214,
                  "y": 136
              },
              "array_index": 141
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
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
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 231,
                  "y": 136
              },
              "array_index": 142
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turret",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 72
              },
              "array_index": 65
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
              "type": "electric",
              "state": "moving",
              "position": {
                  "x": 223,
                  "y": 48
              },
              "array_index": 61
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "electric",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 56
              },
              "array_index": 59
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "electric",
              "state": "moving",
              "position": {
                  "x": 151,
                  "y": 55
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "electric",
              "state": "moving",
              "position": {
                  "x": 120,
                  "y": 56
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "electric",
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
              "type": "electric",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 54
              },
              "array_index": 51
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 105
              },
              "array_index": 104
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 106
              },
              "array_index": 103
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 216,
                  "y": 181
              },
              "array_index": 189
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 233,
                  "y": 184
              },
              "array_index": 190
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 27,
                  "y": 182
              },
              "array_index": 177
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "turn",
              "state": "moving",
              "position": {
                  "x": 40,
                  "y": 182
              },
              "array_index": 178
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 154,
                  "y": 101
              },
              "array_index": 105
          }
      ],
      "name": "3-15",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          2,
          0,
          0,
          0,
          0,
          0,
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
          6,
          6,
          0,
          0,
          0,
          0,
          21,
          21,
          6,
          6,
          6,
          6,
          6,
          6,
          6,
          18,
          6,
          6,
          0,
          6,
          0,
          0,
          21,
          21,
          0,
          3,
          6,
          0,
          0,
          0,
          0,
          0,
          6,
          6,
          0,
          6,
          0,
          0,
          21,
          21,
          13,
          0,
          6,
          0,
          0,
          0,
          0,
          6,
          6,
          6,
          0,
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
          6,
          6,
          6,
          0,
          6,
          0,
          0,
          21,
          21,
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
          0,
          6,
          0,
          0,
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
          0,
          0,
          0,
          21,
          21,
          10,
          10,
          0,
          0,
          0,
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
          10,
          10,
          0,
          0,
          0,
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
      "enemies": [],
      "hazards": [
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 137,
                  "y": 54
              },
              "array_index": 56
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
                  "x": 30,
                  "y": 55
              },
              "array_index": 49
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 44,
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
                  "x": 65,
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
                  "x": 82,
                  "y": 54
              },
              "array_index": 53
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 61,
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
                  "x": 108,
                  "y": 57
              },
              "array_index": 54
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 57
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 160,
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
                  "x": 161,
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
                  "x": 169,
                  "y": 104
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 89
              },
              "array_index": 90
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
                  "x": 135,
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
                  "x": 111,
                  "y": 120
              },
              "array_index": 118
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 96,
                  "y": 119
              },
              "array_index": 118
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 117,
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
                  "x": 87,
                  "y": 119
              },
              "array_index": 117
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 69,
                  "y": 118
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 119
              },
              "array_index": 115
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 56
              },
              "array_index": 49
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 39,
                  "y": 53
              },
              "array_index": 50
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 53,
                  "y": 54
              },
              "array_index": 51
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 67,
                  "y": 55
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 81,
                  "y": 56
              },
              "array_index": 53
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 103,
                  "y": 57
              },
              "array_index": 54
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 122,
                  "y": 59
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 56
              },
              "array_index": 58
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 168,
                  "y": 67
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 165,
                  "y": 86
              },
              "array_index": 90
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 101
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 149,
                  "y": 120
              },
              "array_index": 121
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 131,
                  "y": 119
              },
              "array_index": 120
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 118,
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
                  "x": 54,
                  "y": 117
              },
              "array_index": 115
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 94,
                  "y": 118
              },
              "array_index": 117
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 114,
                  "y": 118
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 97,
                  "y": 120
              },
              "array_index": 118
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 77,
                  "y": 121
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 149,
                  "y": 101
              },
              "array_index": 105
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 143,
                  "y": 87
              },
              "array_index": 88
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 134,
                  "y": 98
              },
              "array_index": 104
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 149,
                  "y": 84
              },
              "array_index": 89
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 56,
                  "y": 150
              },
              "array_index": 147
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 79,
                  "y": 151
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 95,
                  "y": 151
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 118,
                  "y": 151
              },
              "array_index": 151
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 107,
                  "y": 151
              },
              "array_index": 150
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 141,
                  "y": 150
              },
              "array_index": 152
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 157,
                  "y": 150
              },
              "array_index": 153
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 176,
                  "y": 150
              },
              "array_index": 155
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 149
              },
              "array_index": 154
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 133
              },
              "array_index": 140
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 201,
                  "y": 123
              },
              "array_index": 124
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 202,
                  "y": 107
              },
              "array_index": 108
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 96
              },
              "array_index": 108
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 203,
                  "y": 88
              },
              "array_index": 92
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 199,
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
                  "x": 199,
                  "y": 54
              },
              "array_index": 60
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 41,
                  "y": 149
              },
              "array_index": 146
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 27,
                  "y": 150
              },
              "array_index": 145
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 54
              },
              "array_index": 57
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 151,
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
                  "x": 57,
                  "y": 84
              },
              "array_index": 83
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 60,
                  "y": 72
              },
              "array_index": 67
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 154,
                  "y": 23
              },
              "array_index": 25
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 155,
                  "y": 41
              },
              "array_index": 41
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 172,
                  "y": 38
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
                  "y": 23
              },
              "array_index": 26
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "electric",
              "state": "open",
              "position": {
                  "x": 31,
                  "y": 88
              },
              "array_index": 81
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 34,
                  "y": 174
              },
              "array_index": 162
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 42,
                  "y": 184
              },
              "array_index": 178
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 32,
                  "y": 173
              },
              "array_index": 162
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 30,
                  "y": 185
              },
              "array_index": 177
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 25,
                  "y": 168
              },
              "array_index": 161
          }
      ],
      "name": "3-16",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          21,
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
          21,
          21,
          0,
          0,
          0,
          21,
          0,
          0,
          2,
          0,
          0,
          21,
          0,
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
          10,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          21,
          6,
          6,
          18,
          6,
          6,
          21,
          0,
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
          21,
          0,
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
          10,
          0,
          0,
          21,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          21,
          6,
          0,
          13,
          0,
          6,
          21,
          0,
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
          21,
          0,
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
          10,
          0,
          0,
          21,
          0,
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
          6,
          6,
          6,
          0,
          21,
          0,
          0,
          0,
          0,
          21,
          21,
          0,
          0,
          0,
          21,
          6,
          0,
          3,
          0,
          6,
          21,
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
              "direction": 90,
              "orientation": "horizontal",
              "type": "laser",
              "state": "moving",
              "position": {
                  "x": 120,
                  "y": 72
              },
              "array_index": 71
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
                  "x": 79,
                  "y": 25
              },
              "array_index": 20
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 74,
                  "y": 41
              },
              "array_index": 36
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 62
              },
              "array_index": 52
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 85
              },
              "array_index": 84
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 67,
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
                  "x": 69,
                  "y": 101
              },
              "array_index": 100
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 123
              },
              "array_index": 116
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 71,
                  "y": 154
              },
              "array_index": 148
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 182
              },
              "array_index": 180
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 72,
                  "y": 174
              },
              "array_index": 164
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 73,
                  "y": 141
              },
              "array_index": 132
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 171,
                  "y": 25
              },
              "array_index": 26
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
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
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 167,
                  "y": 59
              },
              "array_index": 58
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 76
              },
              "array_index": 74
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 161,
                  "y": 95
              },
              "array_index": 90
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 166,
                  "y": 109
              },
              "array_index": 106
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 127
              },
              "array_index": 122
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 168,
                  "y": 139
              },
              "array_index": 138
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 156
              },
              "array_index": 154
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 169,
                  "y": 171
              },
              "array_index": 170
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 171,
                  "y": 184
              },
              "array_index": 186
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 65
              },
              "array_index": 69
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 105,
                  "y": 70
              },
              "array_index": 70
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 139,
                  "y": 72
              },
              "array_index": 72
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 151,
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
                  "x": 89,
                  "y": 121
              },
              "array_index": 117
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 152,
                  "y": 118
              },
              "array_index": 121
          },
          {
              "direction": 90,
              "orientation": "horizontal",
              "type": "electric",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 121
              },
              "array_index": 119
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 87,
                  "y": 183
              },
              "array_index": 181
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 153,
                  "y": 183
              },
              "array_index": 185
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 135,
                  "y": 166
              },
              "array_index": 168
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 121,
                  "y": 165
              },
              "array_index": 167
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "sturdy",
              "state": "moving",
              "position": {
                  "x": 104,
                  "y": 165
              },
              "array_index": 166
          }
      ],
      "shots": [
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 59
              },
              "array_index": 55
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 147
              },
              "array_index": 151
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "stun",
              "state": "moving",
              "position": {
                  "x": 123,
                  "y": 99
              },
              "array_index": 103
          }
      ],
      "name": "3-17",
      "tileset": processing_tileset,
      "song": "processing_music"
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
          21,
          0,
          0,
          2,
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
          21,
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
          0,
          21,
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
          0,
          21,
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
          0,
          21,
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
          0,
          21,
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
          0,
          21,
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
          0,
          21,
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
          0,
          21,
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
          0,
          21,
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
          9,
          9,
          9,
          9,
          9,
          9,
          23,
          0,
          0,
          0,
          22,
          9,
          9,
          9,
          9,
          9
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
                  "x": 186,
                  "y": 184
              },
              "array_index": 187
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 169
              },
              "array_index": 171
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 184,
                  "y": 155
              },
              "array_index": 155
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 136
              },
              "array_index": 139
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 181,
                  "y": 112
              },
              "array_index": 123
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 182,
                  "y": 90
              },
              "array_index": 91
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 96
              },
              "array_index": 107
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 179,
                  "y": 72
              },
              "array_index": 75
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 183,
                  "y": 60
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
                  "y": 42
              },
              "array_index": 43
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 184,
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
                  "x": 92,
                  "y": 22
              },
              "array_index": 21
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 42
              },
              "array_index": 37
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 92,
                  "y": 63
              },
              "array_index": 53
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 81
              },
              "array_index": 85
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
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
                  "x": 90,
                  "y": 111
              },
              "array_index": 101
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 89,
                  "y": 123
              },
              "array_index": 117
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 145
              },
              "array_index": 149
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
                  "y": 178
              },
              "array_index": 181
          },
          {
              "direction": 0,
              "orientation": "vertical",
              "type": "collider",
              "state": "moving",
              "position": {
                  "x": 91,
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
                  "x": 89,
                  "y": 166
              },
              "array_index": 165
          }
      ],
      "shots": [],
      "name": "3-18",
      "tileset": processing_tileset,
      "song": "processing_music"
  }
];
