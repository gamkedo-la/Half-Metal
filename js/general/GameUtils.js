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
      if (world_grid[arrayIndex] == OBJECT_MAP[object.type]) {
        world_grid[arrayIndex] = TILE_GROUND;
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

Used to create a deep copy of a class instance.
Copies properties and methods, but does not share 
the same reference as the original object.

*/
function copyInstance(original) {
  var copied = Object.assign(
    Object.create(Object.getPrototypeOf(original)),
    original
  );

  return copied;
}

/*

  Returns a string (up, right, down, or left) 
  corresponding with the given object's current direction

*/
function getDirectionConstantOfObject(object) {
  return DIRECTION_MAP[object.direction];
}

/*
  Push a Game Object with a given vector
*/
function pushObject(object, vector) {
  object.push_vector = vector;

  object.state = PUSHED;
}

function turnObject(object, degrees) {
  switch (object.type) {
    case LEAPER:
    case FLYER:
    case HUNTER:
    case BLOCKER:
      object.direction += degrees;
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
}

// Check for collision against game object collection object
function checkForCollision(self, collection, on_collision) {
  // Get main hitbox for collisions
  const hitbox = self.hitboxes.find((box) => box.name === "main");

  // Check across game objects for collisions
  collection.forEach((object) => {
    // Enemy won't collide with itself
    if (object === self) {
      return;
    }

    // Get hitboxes of potentially colliding objects
    let object_hitbox = object?.hitboxes?.find((box) => box.name === "main");
    if (!object_hitbox) {
      object_hitbox = {
        x: object.hitbox_x,
        y: object.hitbox_y,
        w: object.hitbox_width,
        h: object.hitbox_height,
      };
    }

    //   If collided with an object (based on main hitbox),
    //   perform collision event
    if (
      object.solid &&
      collisionDetected(object_hitbox, {
        x: hitbox.x,
        y: hitbox.y,
        w: hitbox.w,
        h: hitbox.h,
      })
    ) {
      on_collision(object);
    }
  });
}
