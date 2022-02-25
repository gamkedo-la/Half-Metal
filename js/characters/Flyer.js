function FlyerClass() {
  // --- PROPERTIES ---
  // -Super Constructor-
  EnemyClass.call(this);

  // -General-
  this.name = "Flyer";
  this.type = FLYER;
  this.speed = 0.5;

  // -Collision-
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

  // -Rendering-
  this.image = flyer_sheet;
  this.death_anim = FLYER_DIE;
  this.currentAnimation = "walk-down";
  this.animations = FRAME_DATA[FLYER];
  this.tile = TILE_FLYER;
  this.render_hitbox = false;
  this.render_raycasts = true;

  // -Combat
  this.shoot_timer = 30;

  // -State-
  this.flight_state = ASCENDED;
  this.flight_dist = this.height;
  this.flight_time = 0;
  this.flight_speed = 0.04;
  this.flight_delay = 11;
  this.flight_amplitude = 15;
  this.alert_timer = new TimerClass(
    () => {
      this.stopAlert();
    },
    4500,
    1,
    true
  );

  // --- METHODS ---
  // -Life cycle methods-
  this.reset = function () {
    this.animator = new SpriteSheetAnimatorClass(this, 4);
    resetGameObject(this);
  };

  this.draw = function () {
    // Draw shadow underneath main image
    canvasContext.drawImage(
      shadow,
      this.x - this.width / 2,
      this.y + this.height
    );

    //   Set animation frame to render
    this.animationHandler();

    // Setup drawing for line of sight
    if (this.render_raycasts) {
      this.drawSightLine("black", this.x - 1, this.y - this.flight_dist - 1,  0, 0, 2);
    this.drawSightLine("black", this.x + 1, this.y - this.flight_dist + 1, 2, 2, 2);
    this.drawSightLine("#db4161", this.x, this.y - this.flight_dist, 1, 1, 2);
      // canvasContext.lineWidth = 1;
      // canvasContext.strokeStyle = "red";
      // canvasContext.beginPath();
      // canvasContext.moveTo(this.x, this.y - this.flight_dist);

      // // Draw line of sight to the farthest ray cast (i.e, the earliest in the list)
      // const last_ray = this.rays[0];
      // if (last_ray) {
      //   canvasContext.lineTo(
      //     last_ray.x + last_ray.width / 2,
      //     last_ray.y + last_ray.height / 2
      //   );
      // }
      // canvasContext.stroke();
    }

    // Update sprite animation
    this.animator.animate(0, -1 * this.flight_dist);

    // Render hitbox for debugging
    if (this.render_hitbox) {
      this.hitboxes.forEach(function (hitbox) {
        canvasContext.fillStyle = hitbox.color;
        canvasContext.fillRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
      });
      this.rays.forEach(function (ray) {
        ray.draw();
      });
    }
  };

  // -State-
  this.whileAlerted = function () {
    this.alert_timer.update();
    this.speed = 0;
    this.changeFlightHeight();

    if (this.flight_dist + 14 <= 0) {
      this.shoot_timer -= 1;
      this.flight_state = DESCENDED;
    }

    if (this.shoot_timer <= 0) {
      this.shoot();
      this.shoot_timer = 45;
    }
  };

  this.stopAlert = function () {
    this.alert_timer.stop();
    this.state = MOVING;
    this.speed = 0.5;
  };

  // -Collision-
  this.updateHitBoxes = function () {
    this.hitboxes.forEach((hitbox) => {
      hitbox.offset_y = -1 * this.flight_dist;
      hitbox.x = this.x - hitbox.w / 2 + hitbox.offset_x;
      hitbox.y = this.y - hitbox.h / 2 + hitbox.offset_y;
    });
  };

  // -Combat-
  this.shoot = function () {
    var shot_buffer = 3;

    var spawn_x =
      (this.width + shot_buffer) * Math.cos((this.direction * Math.PI) / 180);
    var spawn_y =
      (this.height + shot_buffer) * Math.sin((this.direction * Math.PI) / 180);

    var flyer_x = this.x;
    var flyer_y = this.y + this.flight_dist * -1;

    spawnBullet(flyer_x + spawn_x, flyer_y + spawn_y, this.direction, NORMAL);

    playSound(sounds.shoot);
  };

  // -Raycasting-
  this.emitRaycast = function () {
    var ray = new RayClass(this.x - 7, this.y + 16, this.direction);
    ray.height = 14;
    ray.width = 14;
    ray.parent = this;
    this.rays.push(ray);
  };

  // -Flight-
  this.changeFlightHeight = function () {
    this.flight_dist = getFlatArc(
      this.flight_time,
      this.flight_delay,
      this.flight_amplitude
    );
    this.flight_time += this.flight_speed;

    // If we land on a wall when descending, destroy crates and bounce off regular colliders
    const hitbox = this.hitboxes.find((hitbox) => (hitbox.name = "main"));
    walls.forEach((wall) => {
      if (
        collisionDetected(hitbox, {
          x: wall.hitbox_x,
          y: wall.hitbox_y,
          w: wall.hitbox_width,
          h: wall.hitbox_height,
        })
      ) {
        if (wall.type !== INVISIBLE && wall.type !== ELECTRIC) {
          wall.removeSelf();
        } else {
          this.stopAlert();
          this.flight_dist += 16;
        }
      }
    });

    if (this.flight_dist >= 8) {
      this.flight_state = ASCENDED;
    }
  };

  // -Animation-
  this.animationHandler = function () {
    const pose = "walk";
    const direction = DIRECTION_MAP[this.direction];
    const animation = `${pose}-${direction}`;
    this.animator.setAnimation(animation);
  };
}
