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

    this.checkIfOutofBounds();
    this.checkForCollisionWithEnemy(this);
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
          EXPLOSION
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
          { x: enemy.x, y: enemy.y, w: enemy.width, h: enemy.height },
          { x: bullet.x, y: bullet.y, w: bullet.width, h: bullet.height }
        )
      ) {
        bullet.checkEnemyType(enemy);
      }
    });
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
  }
  bullet.x = x;
  bullet.y = y;
  bullet.direction = direction;
  // bullet.rotation_angle = direction;
  bullets.push(bullet);
}
