TurnShotClass.prototype = new ShotClass();

function TurnShotClass() {
  this.image = turn_shot_pic;

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

  this.onCollideWithObject = function (object) {
    if (object?.turnable) {
      this.turnObject(object);
    }

    this.removeSelf();
    playSound(sounds.stun);
  };

  // Class Specialties
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
