const RAY_CAST_COUNTDOWN_MAX = 10;
// Movement - DONE
// Alert state - DONE
// Raycasting - DONE
// Animating - DONE
// Exploding - DONE
// Alert timer - DONE
// Subclasses -

function EnemyClass() {
  // --- PROPERTIES ---
  // -General-
  this.name = "Enemy";
  this.type = LEAPER;

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

  // -Rendering-
  this.image = leaperSheet;
  this.death_anim = LEAPER_DIE;
  this.currentAnimation = "walk-down";
  this.animations = FRAME_DATA[LEAPER];
  this.animator = new SpriteSheetAnimatorClass(this);
  this.render_hitbox = true;

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
    if (this.checkIfDestroyed()) {
      this.speed = 0;
      return;
    }

    this.checkForPlayer();

    if (this.state === ALERT) {
      this.whileAlerted();
    }

    this.checkForCollision();

    this.move();

    this.checkIfOutofBounds();
  };

  this.draw = function () {
    //   Set animation frame to render
    this.animationHandler();

    // Setup drawing for line of sight
    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = "red";
    canvasContext.beginPath();
    canvasContext.moveTo(this.x, this.y);

    //
    this.rays.forEach(function (ray) {
      ray.draw();
    });

    // Draw line of sight to the farthest ray cast (i.e, the earliest in the list)
    const last_ray = this.rays[0];
    if (last_ray) {
      canvasContext.lineTo(
        last_ray.x + last_ray.width / 2,
        last_ray.y + last_ray.height / 2
      );
    }
    canvasContext.stroke();

    // Update sprite animation
    this.animator.animate();

    // Render hitbox for debugging
    if (this.render_hitbox) {
      this.hitboxes.forEach(function (hitbox) {
        canvasContext.fillStyle = hitbox.color;
        canvasContext.fillRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
      });
    }
  };

  this.move = function () {
    moveInOwnDirection(this);
    this.updateHitBoxes();
  };

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
        object.solid &&
        collisionDetected(object_hitbox, {
          x: hitbox.x,
          y: hitbox.y,
          w: hitbox.w,
          h: hitbox.h,
        })
      ) {
        this.onCollision(object);
      }
    });
  };

  this.onCollision = function (other) {
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
    console.log("Alerted");
    this.alert_timer.update();
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
    this.state = ALERT;
    this.alert_timer.start();
  };

  this.removeRaycast = function (ray) {
    this.rays.splice(this.rays.indexOf(ray), 1);
  };

  this.raycast = function () {
    this.rays.push(new RayClass(this.x, this.y, this.direction));
  };

  // -Combat-
  this.checkIfDestroyed = function () {
    if (this.health <= 0) {
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
