function enemyClass() {
  this.name = "Enemy";
  this.type = "Enemy";
  this.speed = 2;
  this.health = 1;
  this.damage = 1;
  this.image;
  this.height = 16;
  this.width = 16;
  this.moveLeft = false;
  this.moveRight = false;
  this.moveUp = false;
  this.moveDown = false;
  this.x;
  this.y;
  this.direction;
  this.lineEndX = 0;
  this.lineEndY = 0;
  this.alerted = false;
  this.rays = [];
  this.state = "NORMAL";

  this.moveAnimation = new AnimationClass(
    "move",
    [
      new FrameClass(0, 0, this.width, this.height, "east"),
      new FrameClass(this.width, 0, this.width, this.height, "east"),
      new FrameClass(this.width * 2, 0, this.width, this.height, "west"),
      new FrameClass(this.width * 3, 0, this.width, this.height, "west"),
      new FrameClass(this.width * 4, 0, this.width, this.height, "south"),
      new FrameClass(this.width * 5, 0, this.width, this.height, "south"),
      new FrameClass(this.width * 6, 0, this.width, this.height, "north"),
      new FrameClass(this.width * 7, 0, this.width, this.height, "north"),
    ],
    leaperSheet,
    240
  );

  this.idleAnimation = new AnimationClass(
    "idle",
    [new FrameClass(this.width * 8, 0, this.width, this.height)],
    leaperSheet,
    0
  );

  this.draw = function () {
    this.raycast();
    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = "red";
    canvasContext.beginPath();
    canvasContext.moveTo(this.x, this.y);

    this.rays.forEach(function (ray) {
      ray.draw();
      canvasContext.lineTo(ray.x, ray.y);
    });

    canvasContext.stroke();
    this.moveAnimation.draw(
      this.x,
      this.y,
      this.height,
      this.width,
      DIRECTION_MAP[this.direction]
    );
  };

  this.reset = function (whichImage) {
    this.image = whichImage;

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == TILE_ENEMY) {
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

    if (this.alerted) this.speed = 6;

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
        if (this.alerted) {
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
        this.alerted = true;
        playSound(sounds.leap);
      }
      this.rays[i].move();
    }
  };

  this.raycast = function () {
    this.rays.push(new RayClass(this.x, this.y, this.direction));
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
    enemies.splice(enemies.indexOf(this), 1);
    delete this;
  };
}
