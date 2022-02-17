function ShotClass() {
  this.x;
  this.y;
  this.width = 15;
  this.height = 15;
  this.image = shot_img;
  this.speed = 4;
  this.direction;
  this.rotation_angle = 0;
  this.damage = 1;

  this.hitbox_height = 8;
  this.hitbox_width = 8;
  this.hitbox_x = this.x;
  this.hitbox_y = this.y;

  // Used for collision checking with other object attributes
  this.can_damage = true;
  this.can_turn = false;
  this.can_push = false;
  this.can_stun = false;

  // Collision Checks
  this.checkForCollisionWithObject = function (bullet) {
    game_objects.forEach(function (object) {
      // Bullet won't collide with itself
      if (object === bullet) {
        return;
      }

      // Get hitboxes of potentially colliding objects
      let object_hitbox = object?.hitboxes?.find((box) => box.name === "main");
      let bullet_hitbox = {
        x: bullet.hitbox_x,
        y: bullet.hitbox_y,
        w: bullet.hitbox_width,
        h: bullet.hitbox_height,
      };

      // If no hitbox for other is found, use a different hitbox contract
      if (!object_hitbox) {
        object_hitbox = {
          x: object.hitbox_x,
          y: object.hitbox_y,
          w: object.hitbox_width,
          h: object.hitbox_height,
        };
      }

      // Compare positions of hitboxes with AABB collision detection
      if (collisionDetected(object_hitbox, bullet_hitbox)) {
        bullet.onCollideWithObject(object);
      }
    });
  };

  // Collision Events
  this.onCollideWithTile = function (tile_type, tile_index) {
    switch (tile_type) {
      case TILE_GROUND:
      case TILE_AMMO:
      case TILE_STUN_SHOT:
      case TILE_TURN_SHOT:
      case TILE_GOAL:
        moveInOwnDirection(this);
        break;
      case TILE_WALL:
      case TILE_STURDY_WALL:
        if (this.damage >= 1) {
          world_grid[tile_index] = TILE_GROUND;
          spawnLoc = snapPixelCoordToTileCoord(this.x, this.y);
          spawnEffect(
            spawnLoc.x + (this.width + 1) / 2,
            spawnLoc.y + (this.height + 1) / 2,
            tile_type === TILE_WALL ? EXPLOSION : DESTROY_STURDY_WALL
          );
          this.removeSelf();
        }
        playSound(sounds.destroy);
        break;
      case TILE_WINDOW_V:
      case TILE_WINDOW_H:
      case TILE_WINDOW_SMASHED_H:
        world_grid[tile_index] = TILE_GROUND;
        this.removeSelf();
        spawnLoc = snapPixelCoordToTileCoord(this.x, this.y);
        spawnEffect(
          spawnLoc.x + (this.width + 1) / 2,
          spawnLoc.y + (this.height + 1) / 2,
          SHATTER
        );
        playSound(sounds.window_break);
        break;
      default:
        break;
    }
  };

  this.onCollideWithObject = function (object) {
    // COLLIDE WITH BLOCKER
    if (object?.type === BLOCKER && this.can_damage) {
      // Check for collision with back hitbox
      if (
        collisionDetected(
          {
            x: this.x,
            y: this.y,
            w: this.width,
            h: this.height,
          },
          {
            x: object.back_hitbox_x,
            y: object.back_hitbox_y,
            w: object.back_hitbox_width,
            h: object.back_hitbox_height,
          }
        )
      ) {
        object.health -= 3;
        this.removeSelf();
        playSound(sounds.destroy);
        return;
      }

      // Check for collision with shield
      if (object?.shield_up) {
        reverseDirection(this);
        playSound(sounds.bump);
        return;
      }

      // Otherwise, deal normal damage
      object.health -= 1;
      this.removeSelf();
      playSound(sounds.destroy);
      return;
    }

    if (object.type === LASER) {
      return;
    }

    // PASS FLYING ENEMY
    if (object?.flight_state === ASCENDED) {
      return;
    }

    // ON STUN
    if (object.stunnable && this.can_stun) {
      object.state = STUNNED;
      this.removeSelf();
      playSound(sounds.stun);
      return;
    }

    // OPEN ELECTRIC WALL
    if (object.type === ELECTRIC && this.can_stun) {
      object.state = object.state === OPEN ? CLOSED : OPEN;
      this.removeSelf();
      playSound(sounds.stun);
      return;
    }

    // ON PUSH
    if (object.pushable && this.can_push) {
      this.push_vector = { magnitude: 3, direction: this.direction };
      pushObject(object, this.push_vector);
      this.removeSelf();
      playSound(sounds.push);
      return;
    }

    // ON TURN
    if (object.turnable && this.can_turn) {
      turnObject(object, 90);
      this.removeSelf();
      playSound(sounds.turn);
      return;
    }

    // ON DAMAGE
    if (
      object?.damageable &&
      this.can_damage &&
      object?.flight_state !== ASCENDED
    ) {
      if (object?.type === PLAYER) {
        loadLevel(levels[currentLevel].level_map);
        playSound(sounds.lose);
        return;
      }

      if (object?.removeSelf) {
        object?.removeSelf();
      }

      this.removeSelf();
      playSound(sounds.destroy);
      return;
    }

    if (object?.type === SWITCH) {
      object.state = object.state === PRESSED ? UNPRESSED : PRESSED;
      this.removeSelf();
      return;
    }

    // REFLECT SHOT
    if (object?.type === BOUNCE) {
      // Bounce off of this material
      reverseDirection(this);

      // Move back a safe distance from the bounce block to avoid infinite collision
      this.x += this.width * Math.cos((this.direction * Math.PI) / 180);
      this.y += this.width * Math.sin((this.direction * Math.PI) / 180);

      // Ricochet sound
      playSound(sounds.bump);

      // Early return to prevent other collision code
      return;
    }

    // DEFAULT
    this.removeSelf();
    playSound(sounds.bump);
    return;
  };

  // General
  this.move = function () {
    next_x = this.x;
    next_y = this.y;

    this.hitbox_x = this.x - this.hitbox_width / 2;
    this.hitbox_y = this.y - this.hitbox_height / 2;

    var walk_into_tile_index = getTileIndexAtPixelCoord(next_x, next_y);
    walk_into_tile_type = TILE_GROUND;
    if (walk_into_tile_index != undefined) {
      walk_into_tile_type = world_grid[walk_into_tile_index];
    }

    this.onCollideWithTile(walk_into_tile_type, walk_into_tile_index);
    this.checkForCollisionWithObject(this);
    this.checkIfOutofBounds();
  };

  this.draw = function () {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(
      this.hitbox_x,
      this.hitbox_y,
      this.hitbox_width,
      this.hitbox_height
    );

    drawBitmapCenteredWithRotation(
      this.image,
      this.x,
      this.y,
      this.rotation_angle
    );
  };

  this.checkIfOutofBounds = function () {
    if (this.x < 0 || this.x > canvas.width) {
      this.removeSelf();
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.removeSelf();
    }
  };

  this.removeSelf = function () {
    bullets.splice(bullets.indexOf(this), 1);
    delete this;
  };
}
