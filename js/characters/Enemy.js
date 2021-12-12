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
  this.rotation = 0;
  this.hitbox_x = this.x;
  this.hitbox_y = this.y;
  this.hitbox_width = this.width;
  this.hitbox_height = this.height;

  this.animator = new SpriteSheetAnimatorClass(this);

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

    this.animator.animate();
  };

  this.updateHitBoxes = function () {
    this.hitbox_x = this.x;
    this.hitbox_y = this.y;
    this.hitbox_x = this.x - this.width / 2;
    this.hitbox_y = this.y - this.height / 2;
  };

  this.update = function () {
    this.updateHitBoxes();

    switch (this.state) {
      case ALERT:
        this.alerted();
        break;
      case STUNNED:
        console.log("STUNNED");
        break;
      default:
        break;
    }

    if (this.health <= 0) {
      this.removeSelf();
    }

    this.checkIfOutofBounds();
  };

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

    var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    walkIntoTileType = TILE_GROUND;
    if (walkIntoTileIndex != undefined) {
      walkIntoTileType = worldGrid[walkIntoTileIndex];
    }

    this.checkTileType(walkIntoTileType, walkIntoTileIndex);

    for (var i = 0; i < this.rays.length; i++) {
      if (this.rays[i].destroyed) {
        this.removeRaycast(this.rays[i]);
      } else if (this.rays[i].found_player) {
        this.state = ALERT;
      }
      this.rays[i].move();
    }
  };

  this.checkTileType = function (tile_type, tile_index) {
    switch (tile_type) {
      case TILE_AMMO:
      case TILE_GROUND:
      case TILE_GOAL:
        moveInOwnDirection(this);
        break;
      case TILE_DOOR:
        worldGrid[tile_index] = TILE_GROUND;
        self.removeSelf();
        break;
      case TILE_WALL:
      case TILE_WINDOW_H:
      case TILE_WINDOW_V:
        if (this.state === ALERT) {
          worldGrid[tile_index] = TILE_GROUND;
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
  }

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
