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
  this.solid = true;
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
  this.render_hitbox = true;
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

    // Render hitbox for debugging
    if (this.render_hitbox) {
      this.hitboxes.forEach(function (hitbox) {
        canvasContext.fillStyle = hitbox.color;
        canvasContext.fillRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
      });
    }
  };

  this.raycast = function () {
    this.rays.push(new RayClass(this.x, this.y, this.direction));
  };

  this.removeRaycast = function (ray) {
    this.rays.splice(this.rays.indexOf(ray), 1);
  };

  this.updateHitBoxes = function () {
    this.hitboxes.forEach((hitbox) => {
      hitbox.x = this.x - hitbox.w / 2 + hitbox.offset_x;
      hitbox.y = this.y - hitbox.h / 2 + hitbox.offset_y;
    });
  };

  this.update = function () {
    this.updateHitBoxes();

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
