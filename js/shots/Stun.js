StunShotClass.prototype = new bulletClass();

function StunShotClass() {
  this.bulletPic = stunShotPic;

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
        enemy.state = STUNNED;
        bullet.removeSelf();
        // playSound(sounds.destroy);
      }
    });
  };
}
