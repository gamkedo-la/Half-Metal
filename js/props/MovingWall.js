function movingWallClass() {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = "red";
  this.direction = direction;

  this.draw = function () {
    canvasContext.fillRect(x, y, width, height);
  };

  this.move = function () {
    nextX = this.x;
    nextY = this.x;

    var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    walkIntoTileType = TILE_GROUND;
    if (walkIntoTileIndex != undefined) {
      walkIntoTileType = worldGrid[walkIntoTileIndex];
    }

    switch (walkIntoTileType) {
      case TILE_GROUND:
      case TILE_GOAL:
      case TILE_DOOR:
      case TILE_AMMO:
      case TILE_WALL:
      case TILE_STURDY_WALL:
        reverseDirection(this);
        moveInOwnDirection(this);
        break;
      default:
        break;
    }
  };
}
