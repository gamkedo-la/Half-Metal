PushShotClass.prototype = new ShotClass();

function PushShotClass() {
  this.image = push_shot_pic;
  this.push_vector = { magnitude: 3, direction: this.direction };
  this.can_push = true;
  this.can_damage = false;

  // Collision Events
  this.onCollideWithTile = function (tile_type, tile_index) {
    if (PUSHABLE.includes(tile_type)) {
      var object_type = Object.keys(OBJECT_MAP).find((key) => {
        return OBJECT_MAP[key] === tile_type;
      });

      this.pushTile(object_type);
      playSound(sounds.push_alt);
      this.removeSelf();

      worldGrid[tile_index] = TILE_GROUND;

      return;
    }

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

  // this.onCollideWithObject = function (object) {
  //   if (object?.pushable) {
  //     this.pushObject(object);
  //     this.removeSelf();
  //     playSound(sounds.stun);
  //   }
  // };

  // Class Specialties
  this.setPushVector = function (magnitude = 0, direction = 0) {
    this.push_vector = { magnitude, direction };
  };

  this.pushObject = function (object) {
    this.setPushVector(3, this.direction);

    object.push_vector = this.push_vector;

    object.state = PUSHED;
  };

  this.pushTile = function (tile) {
    var tile_object = spawnGameObject(
      {
        orientation: HORIZONTAL,
        direction: this.direction,
        x: this.x,
        y: this.y,
      },
      tile
    );

    this.pushObject(tile_object);
  };
}
