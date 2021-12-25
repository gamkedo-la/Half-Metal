BlockerClass.prototype = new enemyClass();

const BLOCKER_BOT_MOVEMENT_SPEED = 1.0;

function BlockerClass() {
  this.type = BLOCKER;
  this.back_hitbox_width = 0;
  this.back_hitbox_height = 0;
  this.back_hitbox_x = 0;
  this.back_hitbox_y = 0;
  this.width = 34;
  this.height = 34;
  this.image = blockerSheet;
  this.health = 3;
  this.speed = BLOCKER_BOT_MOVEMENT_SPEED;
  this.animations = {
    // Idle
    "idle-up": [{ x: 0, y: 0, w: 38, h: 35 }],
    "idle-down": [{ x: 0, y: 0, w: 36, h: 35 }],
    "idle-left": [{ x: 0, y: 0, w: 36, h: 35 }],
    "idle-right": [{ x: 0, y: 0, w: 36, h: 35 }],

    // Walk
    "walk-left": [
      { x: 0, y: 0, w: 36, h: 35 },
      { x: 49, y: 0, w: 36, h: 35 },
      { x: 105, y: 0, w: 36, h: 35 },
    ],
    "walk-right": [
      { x: 0, y: 35, w: 36, h: 35 },
      { x: 49, y: 35, w: 36, h: 35 },
      { x: 105, y: 35, w: 36, h: 35 },
    ],
    "walk-up": [
      { x: 7, y: 105, w: 36, h: 35 },
      { x: 56, y: 105, w: 36, h: 35 },
      { x: 110, y: 105, w: 36, h: 35 },
    ],
    "walk-down": [
      { x: 6, y: 70, w: 36, h: 35 },
      { x: 55, y: 70, w: 36, h: 35 },
      { x: 108, y: 70, w: 36, h: 35 },
    ],

    // Shield
    "shield-right": [{ x: 156, y: 35, w: 36, h: 35 }],
    "shield-left": [{ x: 155, y: 0, w: 36, h: 35 }],
    "shield-up": [{ x: 160, y: 105, w: 36, h: 35 }],
    "shield-down": [{ x: 160, y: 70, w: 36, h: 35 }],
  };
  this.currentAnimation = "idle-right";
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
        this.animator.setAnimation(
          `walk-${getDirectionConstantOfObject(this)}`
        );
        strafe(this);
        break;
      case TILE_WALL:
      case TILE_WINDOW_H:
      case TILE_WINDOW_V:
      case TILE_STURDY_WALL:
        reverseDirection(this);
        strafe(this);
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
  };

  this.shoot = function () {
    this.currentAnimation = `idle-${getDirectionConstantOfObject(this)}`;
    var spawn_x = this.width * Math.cos((this.direction * Math.PI) / 180);
    var spawn_y = this.height * Math.sin((this.direction * Math.PI) / 180);

    spawnBullet(this.x + spawn_x, this.y + spawn_y, this.direction, NORMAL);
    playSound(sounds.shoot);

    this.shield_up = false;
  };

  this.raiseShield = function () {
    this.animator.setAnimation(
      `shield-${getDirectionConstantOfObject(this)}`
    );
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
