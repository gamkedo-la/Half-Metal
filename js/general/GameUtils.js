/* 

Check for collision between two objects
if their x and y positions overlap within 
height and width boundaries 

*/
function collisionDetected(
  obj_a = { x: 0, y: 0, w: 0, h: 0 },
  obj_b = { x: 0, y: 0, w: 0, h: 0 }
) {
  return (
    obj_a.x < obj_b.x + obj_b.w &&
    obj_a.x + obj_a.w > obj_b.x &&
    obj_a.y < obj_b.y + obj_b.h &&
    obj_a.y + obj_a.h > obj_b.y
  );
}

/*

Set a Game Object back to its initial position in the level

*/
this.resetGameObject = function (object) {
  for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
    for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
      var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
      if (worldGrid[arrayIndex] == OBJECT_MAP[object.type]) {
        worldGrid[arrayIndex] = TILE_GROUND;
        object.x = eachCol * WORLD_W + WORLD_W / 2;
        object.y = eachRow * WORLD_H + WORLD_H / 2;
        return;
      }
    }
  }
};

/*

Spawn a bullet of a given type, used for
enemies, hazards, player, etc.

*/
function spawnBullet(x, y, direction, shot_type = NORMAL) {
  var bullet;

  switch (shot_type) {
    case NORMAL:
      bullet = new ShotClass();
      break;

    case STUN:
      bullet = new StunShotClass();
      break;

    case PUSH:
      bullet = new PushShotClass();
      break;

    case TURN:
      bullet = new TurnShotClass();
      break;

    default:
      bullet = new ShotClass();
      break;
  }

  bullet.x = x;
  bullet.y = y;
  bullet.direction = direction;
  bullets.push(bullet);
}

/*

*/
function copyInstance(original) {
  var copied = Object.assign(
    Object.create(Object.getPrototypeOf(original)),
    original
  );

  return copied;
}
