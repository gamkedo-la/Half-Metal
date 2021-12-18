PushShotClass.prototype = new bulletClass();

function PushShotClass() {
  this.bulletPic = push_shot_pic;
  this.push_vector = { magnitude: 0, direction: this.direction };

  this.checkTileType = function (tile_type, tile_index) {
    switch (tile_type) {
      case TILE_GROUND:
      case TILE_AMMO:
      case TILE_STUN_SHOT:
      case TILE_GOAL:
        moveInOwnDirection(this);
        break;

      case TILE_WALL:
      case TILE_STURDY_WALL:
        this.removeSelf();
        playSound(sounds.bump);
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

  this.checkForCollisionWithEnemy = function (bullet) {
    enemies.forEach(function (enemy) {
      if (
        enemy.x < bullet.x + bullet.width &&
        enemy.x + enemy.width > bullet.x &&
        enemy.y < bullet.y + bullet.height &&
        enemy.y + enemy.height > bullet.y
      ) {
        bullet.pushObject(enemy);
        bullet.removeSelf();
        playSound(sounds.stun);
      }
    });
  };

  this.checkWallType = function (wall) {
    switch (wall.type) {
      case ELECTRIC:
        break;

      case NORMAL_WALL:
        break;

      default:
        break;
    }
  };

  this.setPushVector = function (magnitude = 0, direction = 0) {
    this.push_vector = { magnitude, direction };
  };

  this.pushObject = function (object) {
    this.setPushVector(3, this.direction);

    object.push_vector = this.push_vector;

    object.state = PUSHED;
  };
}
