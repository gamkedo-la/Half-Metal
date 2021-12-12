function enemyClass() {
  this.name = "Enemy";
  this.type = ENEMY;
  this.speed = 2;
  this.health = 1;
  this.damage = 1;
  this.image = leaperSheet;
  this.height = 0;
  this.width = 0;
  this.x = 0;
  this.y = 0;
  this.direction;
  this.rays = [];
  this.state = NORMAL;
  this.currentAnimation = "idle";
  this.animations = {
    idle: [{ x: 0, y: 0, w: this.width, h: this.height }],
  };

  this.animator = new SpriteSheetAnimatorClass(this);

  this.draw = function () {
    this.animator.animate();
  };

  this.update = function () {};

  this.reset = function (whichImage) {
    this.image = whichImage;

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == TILE_LEAPER) {
          worldGrid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } // end of enemy start if
      } // end of col for
    } // end of row for
    console.log("NO ENEMY START FOUND!");
  };

  this.move = function () {
    nextX = this.x;
    nextY = this.y;

    if (this.state === STUNNED) return;

    if (this.state === ALERT) this.speed = 6;

    var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    walkIntoTileType = TILE_GROUND;
    if (walkIntoTileIndex != undefined) {
      walkIntoTileType = worldGrid[walkIntoTileIndex];
    }

    switch (walkIntoTileType) {
      case TILE_AMMO:
      case TILE_GROUND:
      case TILE_GOAL:
        moveInOwnDirection(this);
        break;
      case TILE_DOOR:
        worldGrid[walkIntoTileIndex] = TILE_GROUND;
        self.removeSelf();
        break;
      case TILE_WALL:
      case TILE_WINDOW_H:
      case TILE_WINDOW_V:
        if (this.state === ALERT) {
          worldGrid[walkIntoTileIndex] = TILE_GROUND;
        } else {
          reverseDirection(this);
        }
        moveInOwnDirection(this);
        break;
      case TILE_STURDY_WALL:
        reverseDirection(this);
        moveInOwnDirection(this);
        break;
      default:
        break;
    }

    for (var i = 0; i < this.rays.length; i++) {
      if (this.rays[i].destroyed) {
        this.removeRaycast(this.rays[i]);
      } else if (this.rays[i].found_player) {
        this.alerted();
      }
      this.rays[i].move();
    }
  };

  this.raycast = function () {
    this.rays.push(new RayClass(this.x, this.y, this.direction));
  };

  this.alerted = function () {
    console.log("alerted enemy");
  };

  this.removeRaycast = function (ray) {
    this.rays.splice(this.rays.indexOf(ray), 1);
  };

  this.checkIfOutofBounds = function () {
    if (this.x < 0 || this.x > canvas.width) {
      this.removeSelf();
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.removeSelf();
    }
  };

  this.removeSelf = function () {
    console.log("removing enemy!");
    spawnEffect(this.x, this.y, LEAPER_DIE); // FIXME: put in subclass
    enemies.splice(enemies.indexOf(this), 1);
    delete this;
  };
}
