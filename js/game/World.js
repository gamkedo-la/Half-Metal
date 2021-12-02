const WORLD_W = 16;
const WORLD_H = 16;
const WORLD_GAP = 1;
const WORLD_COLS = 16;
const WORLD_ROWS = 15;

var worldGrid = [];

const TILE_GROUND = 0;
const TILE_WALL = 1;
const TILE_PLAYERSTART = 2;
const TILE_GOAL = 3;
const TILE_AMMO = 4;
const TILE_DOOR = 5;
const TILE_ENEMY = 6;
const TILE_STURDY_WALL = 7;
const TILE_WARP = 8;
const TILE_WINDOW_V = 9;
const TILE_WINDOW_H = 10;

function returnTileTypeAtColRow(col, row) {
  if (col >= 0 && col < WORLD_COLS && row >= 0 && row < WORLD_ROWS) {
    var worldIndexUnderCoord = rowColToArrayIndex(col, row);
    return worldGrid[worldIndexUnderCoord];
  } else {
    return WORLD_WALL;
  }
}

function getTileIndexAtPixelCoord(atX, atY) {
  var warriorWorldCol = Math.floor(atX / WORLD_W);
  var warriorWorldRow = Math.floor(atY / WORLD_H);
  var worldIndexUnderWarrior = rowColToArrayIndex(
    warriorWorldCol,
    warriorWorldRow
  );

  if (
    warriorWorldCol >= 0 &&
    warriorWorldCol < WORLD_COLS &&
    warriorWorldRow >= 0 &&
    warriorWorldRow < WORLD_ROWS
  ) {
    return worldIndexUnderWarrior;
  } // end of valid col and row

  return undefined;
} // end of warriorWorldHandling func

function getPixelCoordAtTileIndex(col, row) {
  // col = x / WORLD_W, x = col * WORLD_W
  // row = y / WORLD_H, y = row * WORLD_H
  var x = col * WORLD_W;
  var y = row * WORLD_H;
  return { x: x, y: y };
}

function rowColToArrayIndex(col, row) {
  return col + WORLD_COLS * row;
}

function tileTypeHasTransparency(checkTileType) {
  return (
    checkTileType == TILE_GOAL ||
    checkTileType == TILE_AMMO ||
    checkTileType == TILE_DOOR ||
    checkTileType == TILE_ENEMY ||
    checkTileType == TILE_WINDOW_H ||
    checkTileType == TILE_WINDOW_V
  );
}

function drawWorld() {
  var arrayIndex = 0;
  var drawTileX = 0;
  var drawTileY = 0;
  for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
    for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
      var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
      var tileKindHere = worldGrid[arrayIndex];
      var useImg = worldPics[tileKindHere];

      if (tileTypeHasTransparency(tileKindHere)) {
        canvasContext.drawImage(worldPics[TILE_GROUND], drawTileX, drawTileY);
      }
      if (tileKindHere !== TILE_WARP) {
        canvasContext.drawImage(useImg, drawTileX, drawTileY);
      }

      drawTileX += WORLD_W;
      arrayIndex++;
    } // end of for each col
    drawTileY += WORLD_H;
    drawTileX = 0;
  } // end of for each row
} // end of drawWorld func
