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
  this.image = wall_img;
  this.animator = new SpriteSheetAnimatorClass(this);
  this.push_vector = {};

  // TODO: Set collision rules for when wall is pushed

  this.draw = function () {
    this.animator.animate();
  };

  this.update = function () {
    if (this.state === PUSHED) {
      applyVector(this, this.push_vector);
    }
  };

  this.reset = function () {
    this.animator = new SpriteSheetAnimatorClass(this);
    // resetGameObject(this);
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
