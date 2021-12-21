TurnShotClass.prototype = new bulletClass();

function TurnShotClass() {
  this.bulletPic = turn_shot_pic;

  this.checkForCollisionWithEnemy = function (bullet) {
    enemies.forEach(function (enemy) {
      if (
        enemy.x < bullet.x + bullet.width &&
        enemy.x + enemy.width > bullet.x &&
        enemy.y < bullet.y + bullet.height &&
        enemy.y + enemy.height > bullet.y
      ) {
        bullet.turnObject(enemy);
        bullet.removeSelf();
        playSound(sounds.stun);
      }
    });
  };

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

  this.checkWallType = function (wall) {
    switch (wall.type) {
      case ELECTRIC:
      case NORMAL_WALL:
        this.turnObject(wall);
        break;

      default:
        break;
    }
  };

  this.turnObject = function (object) {
    switch (object.type) {
      case LEAPER:
      case FLYER:
      case HUNTER:
      case BLOCKER:
        object.direction += 90;
        break;

      case NORMAL_WALL:
      case ELECTRIC:
      case LASER:
      case TURRET:
        object.orientation =
          object.orientation === HORIZONTAL ? VERTICAL : HORIZONTAL;
        break;

      default:
        break;
    }
  };
}
