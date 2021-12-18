function RayClass(x, y, direction) {
  this.x = x;
  this.y = y;
  this.height = 12;
  this.width = 12;
  this.direction = direction;
  this.speed = 10;
  this.destroyed = false;
  this.found_player = false;

  this.move = function () {
    nextX = this.x + this.speed * Math.cos((this.direction * Math.PI) / 180);
    nextY = this.y + this.speed * Math.sin((this.direction * Math.PI) / 180);

    var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    walkIntoTileType = TILE_GROUND;
    if (walkIntoTileIndex != undefined) {
      walkIntoTileType = worldGrid[walkIntoTileIndex];
    }

    switch (walkIntoTileType) {
      case TILE_GROUND:
      case TILE_GOAL:
      case TILE_AMMO:
        this.x += this.speed * Math.cos((this.direction * Math.PI) / 180);
        this.y += this.speed * Math.sin((this.direction * Math.PI) / 180);
        break;
      case TILE_WALL:
      case TILE_WINDOW_H:
      case TILE_WINDOW_V:
      case TILE_STURDY_WALL:
        this.destroyed = true;
      default:
        break;
    }

    this.checkIfOutofBounds();
    this.checkForCollisionWithPlayer(this);
  };

  this.draw = function () {
    // canvasContext.fillRect(this.x, this.y, this.width, this.height);
  };

  this.checkIfOutofBounds = function () {
    if (this.x < 0 || this.x > canvas.width) {
      this.destroyed = true;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.destroyed = true;
    }
  };

  this.checkForCollisionWithPlayer = function () {
    if (
      player.x < this.x + this.width &&
      player.x + player.width > this.x &&
      player.y < this.y + this.height &&
      player.y + player.height > this.y
    ) {
      this.found_player = true;
    }
  };
}
