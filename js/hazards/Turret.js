function TurretClass() {
  this.image = turret_spritesheet;
  this.x = 0;
  this.y = 0;
  this.width = 16;
  this.height = 16;
  this.type = TURRET;
  this.direction = 270;
  this.state = IDLE;
  this.animations = {
    "turn-up": [{ x: 0, y: 0, w: this.width, h: this.height }],
    "turn-right": [{ x: 16, y: 0, w: this.width, h: this.height }],
    "turn-left": [{ x: 0, y: 16, w: this.width, h: this.height }],
    "turn-down": [{ x: 16, y: 16, w: this.width, h: this.height }],
  };
  this.solid = true;
  this.currentAnimation = "turn-right";
  this.animator = new SpriteSheetAnimatorClass(this);

  // -Raycasting-
  this.rays = [];
  this.raycast_countdown = 5;

  // -Timer-
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
    125,
    3,
    false
  );
  this.alert_timer = new TimerClass(
    () => {
      this.stopAlert();
    },
    1000,
    1,
    false
  );
  this.render_hitbox = false;
  this.hitboxes = [
    {
      name: "main",
      x: 0,
      y: 0,
      w: 13,
      h: 13,
      offset_x: 0,
      offset_y: 0,
      color: "red",
    },
  ];

  this.reset = function () {
    resetGameObject(this);
  };

  this.draw = function () {
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

    // Render hitbox for debugging
    if (this.render_hitbox) {
      this.hitboxes.forEach(function (hitbox) {
        canvasContext.fillStyle = hitbox.color;
        canvasContext.fillRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
      });
    }
  };

  // -Raycasting-
  this.checkForPlayer = function () {
    // Send out rays at regular intervals
    this.raycast_countdown--;
    if (this.raycast_countdown <= 0) {
      this.emitRaycast();
      this.raycast_countdown = 5;
    }

    // Check for a collision with the player and any of these rays
    this.rays.forEach((ray) => {
      ray.move();

      if (ray.found_player) {
        // Remove ray that found the player
        ray.destroyed = true;

        // If the player is found, perform onDetect event
        this.onDetectPlayer();
      }
    });

    //   If ray collides with a wall or is outside of the boundaries, destroy it
    this.rays.forEach((ray) => {
      if (ray.destroyed) {
        this.rays.splice(this.rays.indexOf(ray), 1);
      }
    });
  };

  this.emitRaycast = function () {
    var ray = new RayClass(this.x - 3, this.y - 3, this.direction);
    ray.parent = this;
    this.rays.push(ray);
  };

  this.onDetectPlayer = function () {
    this.state = ALERT;
  };

  this.removeRaycast = function (ray) {
    this.rays.splice(this.rays.indexOf(ray), 1);
  };

  this.raycast = function () {
    this.rays.push(new RayClass(this.x, this.y, this.direction));
  };

  this.updateHitBoxes = function () {
    this.hitboxes.forEach((hitbox) => {
      hitbox.x = this.x - hitbox.w / 2 + hitbox.offset_x;
      hitbox.y = this.y - hitbox.h / 2 + hitbox.offset_y;
    });
  };

  this.update = function () {
    this.updateHitBoxes();

    this.checkForPlayer();

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
    var shot_buffer = 3;

    var spawn_x =
      (this.width + shot_buffer) * Math.cos((this.direction * Math.PI) / 180);
    var spawn_y =
      (this.height + shot_buffer) * Math.sin((this.direction * Math.PI) / 180);

    spawnBullet(this.x + spawn_x, this.y + spawn_y, this.direction, NORMAL);

    playSound(sounds.shoot);
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
