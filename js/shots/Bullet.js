function bulletClass() {
  this.x;
  this.y;
  this.width = 15;
  this.height = 15;
  this.bulletPic = bulletPic;
  this.speed = 7;
  this.direction;

  this.move = function () {
    nextX = this.x;
    nextY = this.y;

    var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    walkIntoTileType = TILE_GROUND;
    if (walkIntoTileIndex != undefined) {
      walkIntoTileType = worldGrid[walkIntoTileIndex];
    }

    switch (walkIntoTileType) {
      case TILE_GROUND:
      case TILE_AMMO:
      case TILE_GOAL:
        moveInOwnDirection(this);
        break;
      case TILE_DOOR:
        worldGrid[walkIntoTileIndex] = TILE_GROUND;
        self.removeSelf();
        break;
      case TILE_WALL:
      case TILE_STURDY_WALL:
        worldGrid[walkIntoTileIndex] = TILE_GROUND;
        this.removeSelf();
        playSound(sounds.destroy);
      // reverseDirection(this);
      // moveInOwnDirection(this);
      default:
        break;
    }

    this.checkIfOutofBounds();
    this.checkForCollisionWithEnemy(this);
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
    drawBitmapCenteredWithRotation(this.bulletPic, this.x, this.y, 0);
  };

  this.checkForCollisionWithEnemy = function (bullet) {
    enemies.forEach(function (enemy) {
      if (
        enemy.x < bullet.x + bullet.width &&
        enemy.x + enemy.width > bullet.x &&
        enemy.y < bullet.y + bullet.height &&
        enemy.y + enemy.height > bullet.y
      ) {
        enemy.removeSelf();
        bullet.removeSelf();
        playSound(sounds.destroy);
      }
    });
  };
}

function spawnBullet(x, y, direction) {
  var bullet = new bulletClass();
  bullet.x = x;
  bullet.y = y;
  bullet.direction = direction;
  bullets.push(bullet);
}
