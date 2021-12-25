function ShotClass() {
  this.x;
  this.y;
  this.width = 15;
  this.height = 15;
  this.image = shot_img;
  this.speed = 7;
  this.direction;
  this.rotation_angle = 0;
  this.damage = 1;

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
    if (object?.type === BLOCKER) {
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

    if (object?.damageable) {
      object.removeSelf();
      this.removeSelf();
      playSound(sounds.destroy);
    }

    if (!object?.damageable) {
      this.removeSelf();
      playSound(sounds.bump);
    }

    if (object?.type === SWITCH) {
      object.state = object.state === PRESSED ? UNPRESSED : PRESSED;
      this.removeSelf();
    }
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
