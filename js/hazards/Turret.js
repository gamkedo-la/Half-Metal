function TurretClass() {
  this.image = turret_spritesheet;
  this.x = 0;
  this.y = 0;
  this.width = 16;
  this.height = 16;
  this.type = TURRET;
  this.direction = 270;
  this.state = IDLE;
  this.rays = [];
  this.animations = {
    "turn-up": [{ x: 0, y: 0, w: this.width, h: this.height }],
    "turn-right": [{ x: 16, y: 0, w: this.width, h: this.height }],
    "turn-left": [{ x: 0, y: 16, w: this.width, h: this.height }],
    "turn-down": [{ x: 16, y: 16, w: this.width, h: this.height }],
  };
  this.currentAnimation = "turn-right";
  this.animator = new SpriteSheetAnimatorClass(this);
  this.turn_timer = new TimerClass(
    () => {
      this.direction += 90;
      if (this.direction > 270) {
        this.direction = 0;
      }
    },
    1000,
    1,
    true
  );
  this.shot_timer = new TimerClass(
    () => {
      this.shoot();
    },
    1000,
    3,
    false
  );
  this.alert_timer = new TimerClass(
    () => {
      this.stopAlert();
    },
    3000,
    1,
    false
  );

  this.reset = function () {
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] === TILE_TURRET) {
          worldGrid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } // end of start if
      } // end of col for
    } // end of row for
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

  this.update = function () {
    for (var i = 0; i < this.rays.length; i++) {
      if (this.rays[i].destroyed) {
        this.removeRaycast(this.rays[i]);
      } else if (this.rays[i].found_player) {
        this.state = ALERT;
      }
      this.rays[i].move();
    }

    this.currentAnimation = `turn-${DIRECTION_MAP[this.direction]}`;

    if (this.state !== ALERT) {
      this.turn_timer.start();
    }

    if (this.state === ALERT) {
      this.alerted();
    }
  };

  this.alerted = function () {
    this.shot_timer.start();
    this.turn_timer.stop();
    this.alert_timer.start();
  };

  this.shoot = function () {
    spawnBullet(this.x, this.y, this.direction, NORMAL);
  };

  this.stopAlert = function () {
    this.shot_timer.stop();
    this.alert_timer.stop();
    this.state = MOVING;
  };

  this.removeSelf = function () {
    hazards.splice(hazards.indexOf(this), 1);
    delete this;
  };
}
