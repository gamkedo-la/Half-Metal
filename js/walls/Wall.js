function WallClass() {
  // Dimensions
  this.x = 0;
  this.y = 0;
  this.height = WORLD_H;
  this.width = WORLD_W;

  // Typing
  this.tile_type = TILE_WALL;
  this.type = NORMAL_WALL;

  // Sprite props
  this.animations = { idle: [{ x: 0, y: 0, h: this.height, w: this.width }] };
  this.currentAnimation = "idle";
  this.image = wall_img;
  this.animator = new SpriteSheetAnimatorClass(this);
  this.push_vector = {};

  // Collision props
  this.invincible = true;
  this.pushable = false;
  this.damageable = false;
  this.turnable = false;
  this.solid = true;

  // Hitbox props
  this.hitbox_x = this.x;
  this.hitbox_y = this.y;
  this.hitbox_height = this.height;
  this.hitbox_width = this.width;
  this.hitboxes = [];
  this.render_hitbox = false;

  // General
  this.direction = 0;
  this.state = IDLE;

  this.draw = function () {
    this.animator.animate();
    if (this.render_hitbox) {
      canvasContext.fillStyle = "red";
      canvasContext.fillRect(
        this.hitbox_x,
        this.hitbox_y,
        this.hitbox_width,
        this.hitbox_height
      );
      this.hitboxes.forEach((hitbox) => {
        canvasContext.fillStyle = hitbox.color;
        canvasContext.fillRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
      });
    }
  };

  this.update = function () {
    if (this.destroyed) {
      this.removeSelf();
    }

    this.updateHitBoxes();

    if (this.state === PUSHED) {
      applyVector(this, this.push_vector);
    }
  };

  this.reset = function () {
    this.animator = new SpriteSheetAnimatorClass(this);
    resetGameObject(this);
  };

  this.move = function () {};

  this.checkTileType = function () {};

  this.checkIfOutofBounds = function () {};

  this.removeSelf = function () {
    var effect = spawnEffect(this.x, this.y);
    effect.animations = {
      one: [
        { x: 0, y: 0, h: 16, w: 16 },
        { x: 16, y: 0, h: 16, w: 16 },
        { x: 32, y: 0, h: 16, w: 16 },
        { x: 64, y: 0, h: 16, w: 18 },
        { x: 96, y: 0, h: 16, w: 25 },
        { x: 128, y: 0, h: 16, w: 27 },
      ],
    };
    effect.animator = new SpriteSheetAnimatorClass(effect, 3);
    walls.splice(walls.indexOf(this), 1);
    playSound(sounds.destroy);
    delete this;
  };

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

  this.updateHitBoxes = function () {
    var buffer = 4;
    this.hitbox_x = buffer / 2 + this.x - this.width / 2;
    this.hitbox_y = buffer / 2 + this.y - this.height / 2;
    this.hitbox_height = this.height - buffer;
    this.hitbox_width = this.width - buffer;
  };
}
