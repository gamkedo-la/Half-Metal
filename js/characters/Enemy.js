const RAY_CAST_COUNTDOWN_MAX = 1;
const STUN_COUNTDOWN_MAX = 240;

function EnemyClass() {
  // --- PROPERTIES ---
  // -General-
  this.name = "Enemy";
  this.type = LEAPER;
  this.awake = false;

  // -Stats-
  this.health = 1;
  this.damage = 1;
  this.speed = 1;
  this.ammo = NORMAL;

  // -Position/Dimensions-
  this.x = 0;
  this.y = 0;
  this.width = 16;
  this.height = 16;

  // -Movement-
  this.direction = 0;
  this.push_vector = { magnitude: 0, direction: 0 };

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
  this.pushable = true;
  this.stunnable = true;
  this.turnable = true;
  this.damageable = true;
  this.solid = true;
  this.collisions = [];

  // -Rendering-
  this.image = leaperSheet;
  this.death_anim = LEAPER_DIE;
  this.currentAnimation = "walk-down";
  this.animations = FRAME_DATA[LEAPER];
  this.animator = new SpriteSheetAnimatorClass(this);
  this.render_hitbox = false;

  // -State-
  this.state = NORMAL;
  this.alert_timer = new TimerClass(
    () => {
      this.stopAlert();
    },
    3000,
    1,
    true
  );
  this.stun_timer = STUN_COUNTDOWN_MAX;

  // -Raycasting-
  this.rays = [];
  this.raycast_countdown = RAY_CAST_COUNTDOWN_MAX;

  // --- METHODS ---
  // -Life cycle methods-
  this.reset = function () {
    this.animator = new SpriteSheetAnimatorClass(this);
    resetGameObject(this);
  };

  this.update = function () {
    this.awake();

    if (this.checkIfDestroyed()) {
      this.speed = 0;
      return;
    }

    if (this.state !== STUNNED) {
      this.checkForPlayer();
    }

    if (this.state === NORMAL) {
      this.whileNormal();
    }

    if (this.state === ALERT) {
      this.whileAlerted();
    }

    this.checkForCollision();

    this.move();

    this.checkIfOutofBounds();
  };

  this.drawSightLine = function (
    color,
    start_x,
    start_y,
    end_x_buffer,
    end_y_buffer,
    width = 1
  ) {
    // Setup drawing for line of sight
    canvasContext.lineWidth = width;
    canvasContext.strokeStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(start_x, start_y);

    this.rays.forEach(function (ray) {
      ray.draw();
    });

    // Draw line of sight to the farthest ray cast (i.e, the earliest in the list)
    const last_ray = this.rays[0];
    if (last_ray) {
      canvasContext.lineTo(
        last_ray.x + last_ray.width / 2 + end_x_buffer,
        last_ray.y + last_ray.height / 2 + end_y_buffer
      );
    }
    canvasContext.stroke();
  };

  this.drawShadow = function () {
    canvasContext.drawImage(shadow, this.x - this.width / 2, this.y - 2);
  };

  this.drawFlash = function () {
    if (this.hit_flash_frames) {
      this.hit_flash_frames--;
      canvasContext.globalCompositeOperation = "lighter"; // brighten stuff up
      this.animator.animate();
      this.animator.animate();
      canvasContext.globalCompositeOperation = "source-over"; // restore to default
    }
  };

  this.draw = function () {
    // Draw shadow underneath main image
    this.drawShadow();

    //   Set animation frame to render
    this.animationHandler();

    this.drawSightLine("black", this.x - 1, this.y - 1, 0, 0, 2);
    this.drawSightLine("black", this.x + 1, this.y + 1, 2, 2, 2);
    this.drawSightLine("#db4161", this.x, this.y, 1, 1, 2);

    // Update sprite animation
    this.animator.animate();

    // Draw flash when damaged
    this.drawFlash();

    // Render hitbox for debugging
    if (this.render_hitbox) {
      this.hitboxes.forEach(function (hitbox) {
        canvasContext.fillStyle = hitbox.color;
        canvasContext.fillRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
      });
    }
  };

  this.move = function () {
    if (this.stun_timer <= 0) {
      this.stun_timer = STUN_COUNTDOWN_MAX;
      this.state = NORMAL;
    }

    if (this.state === STUNNED) {
      this.rays.length = 0;
      this.stun_timer -= 1;
      this.x += Math.cos(this.stun_timer);
      return;
    }

    moveInOwnDirection(this);
    this.updateHitBoxes();
  };

  this.awake = function () {
    if (!this.awake) {
      this.onAwake();
      this.awake = true;
    }
  };

  this.onAwake = function () {};

  // -Collision methods-
  this.updateHitBoxes = function () {
    this.hitboxes.forEach((hitbox) => {
      hitbox.x = this.x - hitbox.w / 2 + hitbox.offset_x;
      hitbox.y = this.y - hitbox.h / 2 + hitbox.offset_y;
    });
  };

  this.checkForCollision = function () {
    // Get main hitbox for collisions
    const hitbox = this.hitboxes.find((box) => box.name === "main");
    const self = this;

    // Check across game objects for collisions
    game_objects.forEach((object) => {
      // Enemy won't collide with itself
      if (object === self) {
        return;
      }

      if (
        self.state !== ALERT &&
        (object.type === LEAPER ||
          object.type === FLYER ||
          object.type === BLOCKER)
      ) {
        return;
      }

      // Get hitboxes of potentially colliding objects
      let object_hitbox = object?.hitboxes?.find((box) => box.name === "main");
      if (!object_hitbox) {
        object_hitbox = {
          x: object.hitbox_x,
          y: object.hitbox_y,
          w: object.hitbox_width,
          h: object.hitbox_height,
        };
      }

      //   If collided with an object (based on main hitbox),
      //   perform collision event
      if (
        this.collisions.length < 1 &&
        object.solid &&
        collisionDetected(object_hitbox, {
          x: hitbox.x,
          y: hitbox.y,
          w: hitbox.w,
          h: hitbox.h,
        })
      ) {
        // Let objects pass through open electric gates
        if (object.type === ELECTRIC && object.state === OPEN) {
          return;
        }

        // Prevent flyer from colliding with anything when in air
        if (
          self.type === FLYER &&
          self.flight_state === ASCENDED &&
          object.type !== INVISIBLE
        ) {
          return;
        }

        this.collisions.push("hit");
        this.onCollision(object);
      }
    });

    this.collisions.length = 0;
  };

  this.onCollision = function (other) {
    if (other.type === ELECTRIC && other.state === CLOSED) {
      this.destroyed = true;
      return;
    }

    if (this.state === ALERT) {
      this.onCollisionWhileAlert(other);
      return;
    }

    reverseDirection(this);
  };

  this.onCollisionWhileAlert = function (other) {
    // Override in subclasses
    console.log("Colliding while alert");
  };

  // -State methods-
  this.whileAlerted = function () {
    // Override in subclasses
    this.alert_timer.update();
  };

  this.whileNormal = function () {
    // Override in subclasses
  };

  this.whileStunned = function () {
    // Override in subclasses
  };

  this.stopAlert = function () {
    this.state = NORMAL;
    this.alert_timer.stop();
  };

  // -Raycasting-
  this.checkForPlayer = function () {
    // Send out rays at regular intervals
    this.raycast_countdown--;
    if (this.raycast_countdown <= 0) {
      this.emitRaycast();
      this.raycast_countdown = RAY_CAST_COUNTDOWN_MAX;
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
    if (this.state !== ALERT) {
      this.state = ALERT;
      this.alert_timer.start();
      playSound(sounds.leap);
    }
  };

  this.removeRaycast = function (ray) {
    this.rays.splice(this.rays.indexOf(ray), 1);
  };

  this.raycast = function () {
    this.rays.push(new RayClass(this.x, this.y, this.direction));
  };

  // -Combat-
  this.checkIfDestroyed = function () {
    if (this.health <= 0 || this.destroyed) {
      this.onDestroy();
      return true;
    }
    return false;
  };

  this.onDestroy = function () {
    this.removeSelf();
  };

  this.destroyObject = function (object) {
    const index = game_objects.indexOf(object);
    game_objects.splice(index, 1);
    delete object;
  };

  this.shoot = function () {
    // Override in subclasses
    console.log("Shooting ...");
  };

  // -Animation-
  this.animationHandler = function () {
    //   Override in subclasses
    const pose = this.state === NORMAL ? "walk" : "leap";
    const direction = DIRECTION_MAP[this.direction];
    const animation = `${pose}-${direction}`;
    this.animator.setAnimation(animation);
  };

  // -Cleanup-
  this.removeSelf = function () {
    spawnEffect(this.x, this.y, this.death_anim); // FIXME: put in subclass
    enemies.splice(enemies.indexOf(this), 1);
    this.alert_timer.stopAndCall();
    delete this;
  };

  this.checkIfOutofBounds = function () {
    if (this.x < 0 || this.x > canvas.width) {
      this.removeSelf();
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.removeSelf();
    }
  };
}
