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
    idle: [{ x: 0, y: 0, w: this.width, h: this.height }],
  };
  this.currentAnimation = "idle";
  this.render_hitbox = false;

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
