function CameraClass() {
  this.x = 0;
  this.y = 0;
  this.width = 16;
  this.height = 16;
  this.direction = 0;
  this.speed = 2;
  this.rays = [];
  this.type = CAMERA;
  this.state = MOVING;
  this.image = camera_spritesheet;
  this.animations = {
    "face-right": [{ x: 0, y: 0, w: this.width, h: this.height }],
    "face-left": [{ x: 16, y: 0, w: this.width, h: this.height }],
    "face-up": [{ x: 32, y: 0, w: this.width, h: this.height }],
    "face-down": [{ x: 64, y: 0, w: this.width, h: this.height }],
  };
  this.currentAnimation = "face-left";
  this.animator = new SpriteSheetAnimatorClass(this);
  this.strafe_timer = new TimerClass(
    () => {
      this.speed = this.speed * -1;
    },
    1000,
    2,
    true
  );

  this.reset = function () {
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] === TILE_CAMERA) {
          worldGrid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } // end of start if
      } // end of col for
    } // end of row for

    this.strafe_timer.start();
  };

  this.move = function () {
    if (this.state === MOVING) {
      strafe(this);
    }

    for (var i = 0; i < this.rays.length; i++) {
      if (this.rays[i].destroyed) {
        this.removeRaycast(this.rays[i]);
      } else if (this.rays[i].found_player) {
        this.state = ALERT;
        this.alertEnemies();
      }
      this.rays[i].move();
    }
  };

  this.alertEnemies = function () {
    enemies.forEach(function (enemy) {
      enemy.state = ALERT;
    });
  };

  this.update = function () {
    this.currentAnimation = `face-${DIRECTION_MAP[this.direction]}`;
    this.strafe_timer.start();
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
  };

  this.raycast = function () {
    this.rays.push(new RayClass(this.x, this.y, this.direction));
  };

  this.removeRaycast = function (ray) {
    this.rays.splice(this.rays.indexOf(ray), 1);
  };

  this.removeSelf = function () {
    hazards.splice(hazards.indexOf(this), 1);
    delete this;
  };
}
