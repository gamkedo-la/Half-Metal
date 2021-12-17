function WallClass() {
  this.x = 0;
  this.y = 0;
  this.height = WORLD_H;
  this.width = WORLD_W;
  this.tile_type = TILE_WALL;
  this.type = NORMAL_WALL;
  this.direction = 0;
  this.state = IDLE;
  this.animations = { idle: [{ x: 0, y: 0, h: this.height, w: this.width }] };
  this.currentAnimation = "idle";
  this.image = elec_wall_h;
  this.animator = new SpriteSheetAnimatorClass(this);

  this.draw = function () {
    this.animator.animate();
  };

  this.update = function () {};

  this.reset = function () {
    this.animator = new SpriteSheetAnimatorClass(this);
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == this.tile_type) {
          worldGrid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } // end of enemy start if
      } // end of col for
    } // end of row for
  };

  this.move = function () {};

  this.checkTileType = function () {};

  this.checkIfOutofBounds = function () {};

  this.removeSelf = function () {};

  this.checkForCollisionWithEnemy = function (wall) {
    enemies.forEach(function (enemy) {
      if (
        collisionDetected(
          {
            x: enemy.hitbox_x,
            y: enemy.hitbox_y,
            w: enemy.hitbox_width,
            h: enemy.hitbox_height,
          },
          { x: wall.x, y: wall.y, w: wall.width, h: wall.height }
        )
      ) {
        wall.checkEnemyType(enemy);
      }
    });
  };

  this.checkEnemyType = function (enemy) {
    switch (enemy.type) {
      case LEAPER:
      case HUNTER:
      case FLYER:
      case BLOCKER:
        console.log("COLLIDE WITH " + enemy.type);
        break;
    }
  };
}
