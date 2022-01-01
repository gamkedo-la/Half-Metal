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

  // Used for collision checking with other object attributes
  this.can_damage = true;
  this.can_turn = false;
  this.can_push = false;
  this.can_stun = false;

  // Collision Checks
  this.checkForCollisionWithObject = function (bullet) {
    game_objects.forEach(function (object) {
      if (
        collisionDetected(
          {
            x: object.hitbox_x,
            y: object.hitbox_y,
            w: object.hitbox_width,
            h: object.hitbox_height,
          },
          { x: bullet.x, y: bullet.y, w: bullet.width, h: bullet.height }
        )
      ) {
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
      case TILE_GOAL:
        moveInOwnDirection(this);
        break;
      case TILE_WALL:
      case TILE_STURDY_WALL:
        if (this.damage >= 1) {
          worldGrid[tile_index] = TILE_GROUND;
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
        worldGrid[tile_index] = TILE_GROUND;
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

    // ON STUN
    if (object.stunnable && this.can_stun) {
      object.state = STUNNED;
      this.removeSelf();
      playSound(sounds.stun);
      return;
    }

    // OPEN ELECTRIC WALL
    if (object.type === ELECTRIC && this.can_stun) {
      object.state = OPEN;
      this.removeSelf();
      playSound(sounds.stun);
      return;
    }

    // ON PUSH
    if (object.pushable && this.can_push) {
      this.push_vector = { magnitude: 3, direction: this.direction };
      pushObject(object, this.push_vector);
      this.removeSelf();
      playSound(sounds.stun);
      return;
    }

    // ON TURN
    if (object.turnable && this.can_turn) {
      turnObject(object, 90);
      this.removeSelf();
      playSound(sounds.stun);
      return;
    }

    // ON DAMAGE
    if (object?.damageable && this.can_damage && object?.flight_height !== ASCENDED) {
      object.removeSelf();
      this.removeSelf();
      playSound(sounds.destroy);
      return;
    }

    if (object?.type === SWITCH) {
      console.log("SWITCH");
      object.state = object.state === PRESSED ? UNPRESSED : PRESSED;
      this.removeSelf();
      return;
    }

    // REFLECT SHOT
    if (object?.type === BOUNCE) {
      console.log("REFLECT SHOT");
      reverseDirection(this);
      playSound(sounds.bump);
      return;
    }
    
    // PASS FLYING ENEMY
    if (object?.flight_height === ASCENDED) {
      return;
    }

    // DEFAULT
    console.log("NO DAMAGE");
    this.removeSelf();
    playSound(sounds.bump);
    return;
  };

  // General
  this.move = function () {
    next_x = this.x;
    next_y = this.y;

    var walk_into_tile_index = getTileIndexAtPixelCoord(next_x, next_y);
    walk_into_tile_type = TILE_GROUND;
    if (walk_into_tile_index != undefined) {
      walk_into_tile_type = worldGrid[walk_into_tile_index];
    }

    this.onCollideWithTile(walk_into_tile_type, walk_into_tile_index);
    this.checkForCollisionWithObject(this);
    this.checkIfOutofBounds();
  };

  this.draw = function () {
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
