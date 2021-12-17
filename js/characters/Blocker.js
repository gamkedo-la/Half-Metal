BlockerClass.prototype = new enemyClass();

const BLOCKER_BOT_MOVEMENT_SPEED = 1.0;

function BlockerClass() {
  this.myTileKind = TILE_BLOCKER;
  this.type = BLOCKER;
  this.back_hitbox_width = 0;
  this.back_hitbox_height = 0;
  this.back_hitbox_x = 0;
  this.back_hitbox_y = 0;
  this.width = 34;
  this.height = 34;
  this.image = blockerSheet;
  this.health = 3;
  this.animations = {
    idle: [{ x: 0, y: 0, w: 36, h: 35 }],
    "walk-right": [{ x: 0, y: 0, w: 36, h: 35 }],
    "walk-left": [{ x: 0, y: 0, w: 36, h: 35 }],
    "walk-up": [{ x: 0, y: 0, w: 36, h: 35 }],
    "walk-down": [{ x: 0, y: 0, w: 36, h: 35 }],
    "shield-right": [{ x: 160, y: 0, w: 36, h: 35 }],
    "shield-left": [{ x: 160, y: 0, w: 36, h: 35 }],
    "shield-up": [{ x: 160, y: 0, w: 36, h: 35 }],
    "shield-down": [{ x: 160, y: 0, w: 36, h: 35 }],
  };
  this.currentAnimation = "idle";
  this.shot_timer = new TimerClass(
    () => {
      this.shoot();
    },
    1000,
    3,
    false
  );
  this.shield_timer = new TimerClass(
    () => {
      this.raiseShield();
    },
    1000,
    1,
    false
  );
  this.alert_timer = new TimerClass(
    () => {
      this.stopAlert();
    },
    10000,
    1,
    false
  );
  this.shield_up = false;

  this.animator = new SpriteSheetAnimatorClass(this);

  this.reset = function (whichImage) {
    this.image = whichImage;

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == this.myTileKind) {
          worldGrid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } // end of blockerBot start if
      } // end of col for
    } // end of row for
    console.log("NO BLOCKERBOT START FOUND!");
  };

  this.updateHitBoxDimensions = function () {
    switch (DIRECTION_MAP[this.direction]) {
      case UP:
      case DOWN:
        this.back_hitbox_height = this.height / 2;
        this.back_hitbox_width = this.width;
        break;
      case LEFT:
      case RIGHT:
        this.back_hitbox_height = this.height;
        this.back_hitbox_width = this.width / 2;
        break;
    }
  };

  this.updateHitBoxPosition = function () {
    switch (DIRECTION_MAP[this.direction]) {
      case UP:
        this.back_hitbox_x = this.x - this.width / 2;
        this.back_hitbox_y = this.y;
        break;

      case DOWN:
        this.back_hitbox_x = this.x - this.width / 2;
        this.back_hitbox_y = this.y - this.height / 2;
        break;

      case LEFT:
        this.back_hitbox_x = this.x;
        this.back_hitbox_y = this.y - this.height / 2;
        break;

      case RIGHT:
        this.back_hitbox_x = this.x - this.width / 2;
        this.back_hitbox_y = this.y - this.height / 2;
        break;

      default:
        break;
    }
  };

  this.updateHitBoxes = function () {
    this.updateHitBoxDimensions();
    this.updateHitBoxPosition();
    this.hitbox_x = this.x - this.width / 2;
    this.hitbox_y = this.y - this.height / 2;
    this.hitbox_height = this.height;
    this.hitbox_width = this.width;
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
        reverseDirection(this);
        moveInOwnDirection(this);
        break;
      case TILE_STURDY_WALL:
        reverseDirection(this);
        moveInOwnDirection(this);
        break;
      default:
        break;
    }
  };

  this.alerted = function (dt) {
    this.speed = 0;
    this.alert_timer.start();
    this.shot_timer.start();
    this.shot_timer.update();
    this.shield_timer.update();

    if (this.shot_timer.finished) {
      this.shield_timer.start();
    }

    if (this.shield_timer.finished) {
      this.shot_timer.reset();
      this.shield_timer.stop();
    }
  };

  this.stopAlert = function () {
    this.shot_timer.stop();
    this.shield_timer.stop();
    this.alert_timer.stop();
    this.state = MOVING;
    this.speed = BLOCKER_BOT_MOVEMENT_SPEED;
  }

  this.shoot = function () {
    this.currentAnimation = "idle";
    var spawn_x = this.width * Math.cos((this.direction * Math.PI) / 180);
    var spawn_y = this.height * Math.sin((this.direction * Math.PI) / 180);

    spawnBullet(this.x + spawn_x, this.y + spawn_y, this.direction, NORMAL);
    playSound(sounds.shoot);

    this.shield_up = false;
  };

  this.raiseShield = function () {
    this.currentAnimation = "shield-right";
    this.shield_up = true;
  };

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

    if (this.render_hitbox) {
      colorRect(
        this.hitbox_x,
        this.hitbox_y,
        this.hitbox_width,
        this.hitbox_height,
        "blue"
      );
      colorRect(
        this.back_hitbox_x,
        this.back_hitbox_y,
        this.back_hitbox_width,
        this.back_hitbox_height,
        "red"
      );
    }
  };
}
