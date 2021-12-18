function bulletClass() {
  this.x;
  this.y;
  this.width = 15;
  this.height = 15;
  this.bulletPic = bulletPic;
  this.speed = 7;
  this.direction;
  this.rotation_angle = 0;

  this.move = function () {
    nextX = this.x;
    nextY = this.y;

    var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    walkIntoTileType = TILE_GROUND;
    if (walkIntoTileIndex != undefined) {
      walkIntoTileType = worldGrid[walkIntoTileIndex];
    }

    this.checkTileType(walkIntoTileType, walkIntoTileIndex);
    this.checkForCollisionWithEnemy(this);
    this.checkForCollisionWithWall(this);
    this.checkForCollisionWithSwitch(this);
    this.checkIfOutofBounds();
  };

  this.checkTileType = function (tile_type, tile_index) {
    switch (tile_type) {
      case TILE_GROUND:
      case TILE_AMMO:
      case TILE_STUN_SHOT:
      case TILE_GOAL:
        moveInOwnDirection(this);
        break;
      case TILE_DOOR:
        worldGrid[tile_index] = TILE_GROUND;
        self.removeSelf();
        spawnLoc = snapPixelCoordToTileCoord(this.x, this.y);
        spawnEffect(
          spawnLoc.x + (this.width + 1) / 2,
          spawnLoc.y + (this.height + 1) / 2,
          EXPLOSION
        );
        break;
      case TILE_WALL:
      case TILE_STURDY_WALL:
        worldGrid[tile_index] = TILE_GROUND;
        this.removeSelf();
        spawnLoc = snapPixelCoordToTileCoord(this.x, this.y);
        spawnEffect(
          spawnLoc.x + (this.width + 1) / 2,
          spawnLoc.y + (this.height + 1) / 2,
          tile_type === TILE_WALL ? EXPLOSION : DESTROY_STURDY_WALL
        );
        playSound(sounds.destroy);
        break;
      case TILE_WINDOW_V:
      case TILE_WINDOW_H:
      case TILE_WINDOW_SMASHED_H:
        worldGrid[tile_index] = TILE_GROUND;
        this.removeSelf();
        playSound(sounds.window_break);
        break;
      default:
        break;
    }
  };

  this.checkEnemyType = function (enemy) {
    switch (enemy.type) {
      case LEAPER:
      case FLYER:
      case HUNTER:
        enemy.removeSelf();
        this.removeSelf();
        playSound(sounds.destroy);
        break;
      case BLOCKER:
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
              x: enemy.back_hitbox_x,
              y: enemy.back_hitbox_y,
              w: enemy.back_hitbox_width,
              h: enemy.back_hitbox_height,
            }
          )
        ) {
          enemy.health -= 3;
          this.removeSelf();
          playSound(sounds.destroy);
          break;
        }

        // Check for collision with shield
        if (enemy.shield_up) {
          reverseDirection(this);
          playSound(sounds.bump);
          break;
        }

        // Otherwise, deal normal damage
        enemy.health -= 1;
        this.removeSelf();
        playSound(sounds.destroy);
        break;

      default:
        console.log("NO ENEMY TYPE FOUND: " + enemy.type);
        break;
    }
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

  this.draw = function () {
    drawBitmapCenteredWithRotation(
      this.bulletPic,
      this.x,
      this.y,
      this.rotation_angle
    );
  };

  this.checkForCollisionWithEnemy = function (bullet) {
    enemies.forEach(function (enemy) {
      if (
        collisionDetected(
          {
            x: enemy.hitbox_x,
            y: enemy.hitbox_y,
            w: enemy.hitbox_width,
            h: enemy.hitbox_height,
          },
          { x: bullet.x, y: bullet.y, w: bullet.width, h: bullet.height }
        )
      ) {
        bullet.checkEnemyType(enemy);
      }
    });
  };

  this.checkForCollisionWithSwitch = function (bullet) {
    entities.forEach(function (ent) {
      if (
        collisionDetected(
          { x: ent.x, y: ent.y, w: ent.width, h: ent.height },
          { x: bullet.x, y: bullet.y, w: bullet.width, h: bullet.height }
        ) &&
        ent.type === "switch"
      ) {
        ent.state = ent.state === PRESSED ? UNPRESSED : PRESSED;
        bullet.removeSelf();
      }
    });
  };

  this.checkForCollisionWithWall = function (bullet) {
    walls.forEach(function (wall) {
      if (
        collisionDetected(
          {
            x: wall.x,
            y: wall.y,
            w: wall.width,
            h: wall.height,
          },
          { x: bullet.x, y: bullet.y, w: bullet.width, h: bullet.height }
        )
      ) {
        bullet.checkWallType(wall);
      }
    });
  };

  this.checkWallType = function (wall) {
    switch (wall.type) {
      case NORMAL_WALL:
        break;

      case ELECTRIC:
        this.removeSelf();
        playSound(sounds.bump);
        break;
    }
  };
}

function spawnBullet(x, y, direction, shot_type = NORMAL) {
  var bullet;

  switch (shot_type) {
    case NORMAL:
      bullet = new bulletClass();
      break;

    case STUN:
      bullet = new StunShotClass();
      break;

    case PUSH:
      bullet = new PushShotClass();
      break;

    default:
      bullet = new bulletClass();
      break;
  }

  bullet.x = x;
  bullet.y = y;
  bullet.direction = direction;
  bullets.push(bullet);
}
