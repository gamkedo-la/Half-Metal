FRAME_DATA = {
  [LEAPER]: {
    "walk-right": [
      { x: 0, y: 0, w: 16, h: 16 },
      { x: 16, y: 0, w: 16, h: 16 },
    ],
    "walk-left": [
      { x: 16 * 2, y: 0, w: 16, h: 16 },
      { x: 16 * 3, y: 0, w: 16, h: 16 },
    ],
    "walk-down": [
      { x: 16 * 4, y: 0, w: 16, h: 16 },
      { x: 16 * 5, y: 0, w: 16, h: 16 },
    ],
    "walk-up": [
      { x: 16 * 6, y: 0, w: 16, h: 16 },
      { x: 16 * 7, y: 0, w: 16, h: 16 },
    ],
  },
  [FLYER]: {
    "walk-down": [
      { x: 0, y: 0, w: 16, h: 16 },
      { x: 16, y: 0, w: 16, h: 16 },
    ],
    "walk-up": [
      { x: 0, y: 16, w: 16, h: 16 },
      { x: 16, y: 16, w: 16, h: 16 },
    ],
    "walk-left": [
      { x: 0, y: 32, w: 16, h: 16 },
      { x: 16, y: 32, w: 16, h: 16 },
    ],
    "walk-right": [
      { x: 0, y: 48, w: 16, h: 16 },
      { x: 16, y: 48, w: 16, h: 16 },
    ],
  },
  [HUNTER]: {
    "idle-right": [{ x: 0, y: 30, h: 26, w: 14 }], //location of frame
    "walk-left": [{ x: 0, y: 0, h: 26, w: 14 }],
    "walk-up": [{ x: 0, y: 30, h: 26, w: 14 }],
    "walk-right": [{ x: 0, y: 30, h: 26, w: 14 }],
    "walk-down": [{ x: 0, y: 30, h: 26, w: 14 }],
  },
  [BLOCKER]: {
    // Idle
    "idle-up": [{ x: 0, y: 0, w: 38, h: 35 }],
    "idle-down": [{ x: 0, y: 0, w: 36, h: 35 }],
    "idle-left": [{ x: 0, y: 0, w: 36, h: 35 }],
    "idle-right": [{ x: 0, y: 0, w: 36, h: 35 }],

    // Walk
    "walk-left": [
      { x: 0, y: 0, w: 36, h: 35 },
      { x: 49, y: 0, w: 36, h: 35 },
      { x: 105, y: 0, w: 36, h: 35 },
    ],
    "walk-right": [
      { x: 0, y: 35, w: 36, h: 35 },
      { x: 49, y: 35, w: 36, h: 35 },
      { x: 105, y: 35, w: 36, h: 35 },
    ],
    "walk-up": [
      { x: 7, y: 105, w: 36, h: 35 },
      { x: 56, y: 105, w: 36, h: 35 },
      { x: 110, y: 105, w: 36, h: 35 },
    ],
    "walk-down": [
      { x: 6, y: 70, w: 36, h: 35 },
      { x: 55, y: 70, w: 36, h: 35 },
      { x: 108, y: 70, w: 36, h: 35 },
    ],

    // Shield
    "shield-right": [{ x: 156, y: 35, w: 36, h: 35 }],
    "shield-left": [{ x: 155, y: 0, w: 36, h: 35 }],
    "shield-up": [{ x: 160, y: 105, w: 36, h: 35 }],
    "shield-down": [{ x: 160, y: 70, w: 36, h: 35 }],
  },
};