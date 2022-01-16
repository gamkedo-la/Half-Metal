TurnShotClass.prototype = new ShotClass();

function TurnShotClass() {
  this.image = turn_shot_pic;
  this.can_turn = true;
  this.can_damage = false;

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
        world_grid[tile_index] = TILE_GROUND;
        this.removeSelf();
        playSound(sounds.window_break);
        break;
      default:
        break;
    }
  };
}
