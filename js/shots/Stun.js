StunShotClass.prototype = new ShotClass();

function StunShotClass() {
  this.image = stunShotPic;

  // Collision Events
  this.onCollideWithTile = function (tile_type, tile_index) {
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

  this.onCollideWithEnemy = function (enemy) {
    enemy.state = STUNNED;
    this.removeSelf();
    playSound(sounds.stun);
  };

  this.onCollideWithWall = function (wall) {
    switch (wall.type) {
      case ELECTRIC:
        wall.state = OPEN;
        this.removeSelf();
        break;

      case NORMAL_WALL:
        break;

      default:
        break;
    }
  };
}
