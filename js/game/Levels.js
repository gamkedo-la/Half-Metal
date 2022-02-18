function BaseLevelClass() {
  this.level_map = [];
  this.tile_map = [];
  this.starting_ammo = 0;
  this.default_object_config = {
    direction: 0,
    orientation: HORIZONTAL,
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

// Level names will use an x-y scheme where x is the current section of the game (1 = cells, 2 = armory, 3 = processing, and 4 = courtyard)
// and y is the current level within that section (e.g., the first level is 1-1)

const levels = [...COURTYARD_LEVELS];

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
