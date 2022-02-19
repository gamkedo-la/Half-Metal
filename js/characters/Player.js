const PLAYER_MOVE_SPEED = 1;
const MOVEMENT_PROGRESS = 2;

function playerClass() {
  this.x = 75;
  this.y = 75;
  this.width = 16;
  this.height = 16;
  this.image = playerSheet;
  this.name = "Player";
  this.type = PLAYER;
  this.ammo = 0;
  this.max_ammo = 4;
  this.selected_ammo = NORMAL;
  this.ammo_types = [NORMAL, TURN, STUN];
  this.currentAmmoIndex = 0;
  this.damageable = true;

  this.MAX_DELAY = 15;
  this.shootDelay = this.MAX_DELAY;
  this.didShoot = false;

  this.justBumpedWall = false;
  this.bumpDelay = 30;

  this.keyHeld_North = false;
  this.keyHeld_South = false;
  this.keyHeld_West = false;
  this.keyHeld_East = false;
  this.keyHeld_Shoot = false;
  this.keyHeld_Switch_Ammo = false;

  this.keyPressed_Shoot = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;
  this.controlKeyShoot;
  this.controlKeySwitchAmmo;

  this.direction = 0;
  this.state = IDLE;

  this.hitbox_x = this.x;
  this.hitbox_y = this.y;
  this.hitbox_width = this.width;
  this.hitbox_height = this.height;
  this.render_hitbox = false;
  this.hitboxes = [
    {
      name: "main",
      x: this.x,
      y: this.y,
      w: this.hitbox_width,
      h: this.hitbox_height,
      offset_x: 0,
      offset_y: 0,
      color: "blue",
    },
    {
      name: "detection",
      x: this.x,
      y: this.y,
      w: this.hitbox_width,
      h: this.hitbox_height,
      offset_x: 0,
      offset_y: 0,
      color: "red",
    },
  ];

  this.nextX = this.x;
  this.nextY = this.y;
  this.prevX = this.x;
  this.prevY = this.y;
  this.start_x = 0;
  this.start_y = 0;

  this.touched_goal = false;

  this.directionUpdate = {
    [UP]: ["y", PLAYER_MOVE_SPEED * -1],
    [DOWN]: ["y", PLAYER_MOVE_SPEED],
    [LEFT]: ["x", PLAYER_MOVE_SPEED * -1],
    [RIGHT]: ["x", PLAYER_MOVE_SPEED],
  };

  this.movingProgressRemaining = MOVEMENT_PROGRESS;

  this.animations = {
    "idle-down": [{ x: 0, y: 0, w: 16, h: 16 }],
    "idle-up": [{ x: 0, y: 16, w: 16, h: 16 }],
    "idle-right": [{ x: 0, y: 32, w: 16, h: 16 }],
    "idle-left": [{ x: 0, y: 48, w: 16, h: 16 }],
    "walk-down": [
      { x: 16, y: 0, w: 16, h: 16 },
      { x: 32, y: 0, w: 16, h: 16 },
    ],
    "walk-right": [
      { x: 16, y: 32, w: 16, h: 16 },
      { x: 32, y: 32, w: 16, h: 16 },
    ],
    "walk-up": [
      { x: 16, y: 16, w: 16, h: 16 },
      { x: 32, y: 16, w: 16, h: 16 },
    ],
    "walk-left": [
      { x: 16, y: 48, w: 16, h: 16 },
      { x: 32, y: 48, w: 16, h: 16 },
    ],
    "shoot-down": [{ x: 0, y: 64, w: 16, h: 16 }],
    "shoot-up": [{ x: 16, y: 64, w: 16, h: 16 }],
    "shoot-right": [{ x: 32, y: 64, w: 16, h: 16 }],
    "shoot-left": [{ x: 48, y: 64, w: 16, h: 16 }],
  };

  this.animator = new SpriteSheetAnimatorClass(this);
  this.animator.animationFrameLimit = 16;
  this.currentAnimation = "walk-down";

  this.setupInput = function (
    upKey,
    rightKey,
    downKey,
    leftKey,
    shootKey,
    switchKey,
    upKey2,
    rightKey2,
    downKey2,
    leftKey2
  ) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
    this.controlKeyShoot = shootKey;
    this.controlKeySwitchAmmo = switchKey;
    this.controlKeyUp2 = upKey2;
    this.controlKeyRight2 = rightKey2;
    this.controlKeyDown2 = downKey2;
    this.controlKeyLeft2 = leftKey2;
  };

  this.reset = function (whichImage, name) {
    this.name = name;
    this.image = whichImage;
    this.currentAmmoIndex = 0;
    this.selected_ammo = NORMAL;

    // For clearing out any remaining intervals at the time of a restart
    const interval_id = window.setInterval(function () {},
    Number.MAX_SAFE_INTEGER);

    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (level.level_map[arrayIndex] == TILE_PLAYERSTART) {
          console.log("NEW INDEX");
          console.log(arrayIndex);
          world_grid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          console.log("NEW POSITION");
          console.log(this.x, this.y);
          this.start_x = this.x;
          this.start_y = this.y;
          return;
        } // end of player start if
      } // end of col for
    } // end of row for
    console.log("NO PLAYER START FOUND!");
  };

  this.updateHitbox = function () {
    // Old hitbox code, still expected by some other game objects
    this.hitbox_x = this.x - this.width / 4;
    this.hitbox_y = this.y - 2;
    this.hitbox_width = 12;
    this.hitbox_height = 6;

    // New hitbox code - for multiple hitboxes in an array
    this.hitboxes.forEach((hitbox) => {
      if (hitbox.name === "main") {
        hitbox.x = this.x - this.width / 4 + 1;
        hitbox.y = this.y - 2;
        hitbox.w = 6;
        hitbox.h = 6;
      }

      if (hitbox.name === "detection") {
        hitbox.x = this.x - this.width / 2 + 2;
        hitbox.y = this.y - this.height / 2 + 2;
        hitbox.w = 12;
        hitbox.h = 12;
      }
    });
  };

  this.move = function () {
    // Get previous X and Y values
    this.prevX = this.x;
    this.prevY = this.y;
    this.nextX = this.x;
    this.nextY = this.y;

    // Get direction of movement and future position
    if (this.keyHeld_North) {
      this.nextY -= PLAYER_MOVE_SPEED;
      this.direction = 270;
      this.movingProgressRemaining = MOVEMENT_PROGRESS;
    }
    if (this.keyHeld_East) {
      this.nextX += PLAYER_MOVE_SPEED;
      this.direction = 0;
      this.movingProgressRemaining = MOVEMENT_PROGRESS;
    }
    if (this.keyHeld_South) {
      this.nextY += PLAYER_MOVE_SPEED;
      this.direction = 90;
      this.movingProgressRemaining = MOVEMENT_PROGRESS;
    }
    if (this.keyHeld_West) {
      this.nextX -= PLAYER_MOVE_SPEED;
      this.direction = 180;
      this.movingProgressRemaining = MOVEMENT_PROGRESS;
    }

    // Get expected X and Y of hitbox
    const player_collider = this.hitboxes.find(
      (hitbox) => hitbox.name === "main"
    );
    player_collider.x = this.nextX - this.width / 4 + 1;
    player_collider.y = this.nextY - 2;
    this.hitbox_x = this.nextX - this.width / 4;
    this.hitbox_y = this.nextY - 2;

    // If hitbox at expected X,Y collides with a solid, set X and Y to prev
    this.checkForCollisionWithWall(this);
    this.checkForCollisionWithEnemy(this);
    this.checkForCollisionWithEntity(this);
    this.checkForCollisionWithHazard(this);

    // Else, move to expected X and Y
    if (!this.keyHeld_Shoot) {
      if (this.movingProgressRemaining > 0) {
        const [prop, change] =
          this.directionUpdate[DIRECTION_MAP[this.direction]];

        this[prop] += change;

        this.movingProgressRemaining--;
      }
    }

    if (
      this.x <= 0 ||
      this.x >= canvas.width - 4 ||
      this.y <= 0 ||
      this.y >= canvas.height - 4
    ) {
      loadLevel(levels[currentLevel].level_map);
      playSound(sounds.lose);
    }

    var walkIntoTileIndex = getTileIndexAtPixelCoord(this.nextX, this.nextY);
    var walkIntoTileType = TILE_WALL;

    if (walkIntoTileIndex != undefined) {
      walkIntoTileType = world_grid[walkIntoTileIndex];
    }

    switch (walkIntoTileType) {
      case TILE_AMMO:
      case TILE_STUN_SHOT:
      case TILE_PUSH_SHOT:
      case TILE_TURN_SHOT:
        if (this.ammo < this.max_ammo) {
          this.ammo++;
          world_grid[walkIntoTileIndex] = TILE_GROUND;
          playSound(sounds.get_ammo);
        }
        break;
      case TILE_GOAL:
        if (!this.touched_goal) {
          finished_level = true;
          this.touched_goal = true;
        }
        break;
      default:
        break;
    }
  };

  this.onCollideWithEnemy = function (enemy) {
    if (enemy.type === FLYER && enemy.flight_state === ASCENDED) {
      return;
    }

    player.ammo = 0;
    loadLevel(levels[currentLevel].level_map);
    playSound(sounds.lose);
  };

  this.checkForCollisionWithEnemy = function (player) {
    checkForCollision(player, enemies, this.onCollideWithEnemy);
  };

  this.checkForCollisionWithWall = function (player) {
    const player_collider = this.hitboxes.find(
      (hitbox) => hitbox.name === "main"
    );
    walls.forEach(function (wall) {
      if (
        collisionDetected(
          {
            x: wall.hitbox_x,
            y: wall.hitbox_y,
            w: wall.hitbox_width,
            h: wall.hitbox_height,
          },
          {
            x: player_collider.x,
            y: player_collider.y,
            w: player_collider.w,
            h: player_collider.h,
          }
        )
      ) {
        if (wall.type === ELECTRIC && wall.state === CLOSED) {
          player.onCollideWithEnemy();
          return;
        }

        if (wall.type === ELECTRIC && wall.state === OPEN) {
          return;
        }

        if (wall.solid) {
          // Incorrect but it does make a cool warp effect, save for later
          //   player.x =
          //   player.prevX + dist * Math.cos((player.direction * Math.PI) / 180);
          // player.y =
          //   player.prevY + dist * Math.sin((player.direction * Math.PI) / 180);
          player.x = player.prevX;
          player.y = player.prevY;
          player.movingProgressRemaining = 0;
        }
      }
    });
  };

  this.checkForCollisionWithEntity = function (player) {
    entities.forEach(function (entity) {
      if (
        entity.x < player.x + player.width &&
        entity.x + entity.width > player.x &&
        entity.y < player.y + player.height &&
        entity.y + entity.height > player.y
      ) {
        // entity.teleport(player);
        console.log("COL WITH ENT");
      }
    });
  };

  this.checkForCollisionWithHazard = function (player) {
    hazards.forEach(function (hazard) {
      const hitbox = hazard.hitboxes.find((box) => box.name === "main");
      if (
        collisionDetected(
          {
            x: hitbox.x,
            y: hitbox.y,
            w: hitbox.w,
            h: hitbox.h,
          },
          {
            x: player.hitbox_x,
            y: player.hitbox_y,
            w: player.hitbox_width,
            h: player.hitbox_height,
          }
        )
      ) {
        if (hazard.solid) {
          player.x = player.prevX;
          player.y = player.prevY;
          player.movingProgressRemaining = 0;
        }

        if (hazard.type === LASER) {
          hazard.alertEnemies();
        }
      }
    });
  };

  this.onCollideWithHazard = function (hazard) {
    if (hazard.solid) {
      player.x = player.prevX;
      player.y = player.prevY;
      player.movingProgressRemaining = 0;
    }
  };

  this.shoot = function () {
    if (this.keyHeld_Shoot && !this.didShoot && this.ammo > 0) {
      var shot_buffer = 1;

      var spawn_x =
        (this.width + shot_buffer) * Math.cos((this.direction * Math.PI) / 180);
      var spawn_y =
        (this.height + shot_buffer) *
        Math.sin((this.direction * Math.PI) / 180);

      spawnBullet(
        this.x + spawn_x,
        this.y + spawn_y,
        this.direction,
        this.selected_ammo
      );

      playSound(sounds.shoot);

      this.didShoot = true;
      this.ammo -= 1;
    }

    if (this.ammo === 0 && this.keyPressed_Shoot) {
      playSound(sounds.no_ammo);
      this.keyPressed_Shoot = false;
    }

    if (this.didShoot) {
      this.shootDelay -= 1;
    }

    if (this.shootDelay <= 0) {
      this.shootDelay = this.MAX_DELAY;
      this.didShoot = false;
    }
  };

  this.update = function () {
    this.updateHitbox();
    this.shoot();

    if (this.keyHeld_Switch_Ammo) {
      this.currentAmmoIndex++;
      if (this.currentAmmoIndex > this.ammo_types.length - 1) {
        this.currentAmmoIndex = 0;
      }
      this.selected_ammo = this.ammo_types[this.currentAmmoIndex];

      switch (this.selected_ammo) {
        case NORMAL:
          this.image = playerSheet;
          break;
        case STUN:
          this.image = playerSheet_Stun;
          break;
        case PUSH:
          this.image = playerSheet_Push;
          break;
        case TURN:
          this.image = playerSheet_Turn;
          break;
      }

      this.keyHeld_Switch_Ammo = false;
    }

    if (
      !this.keyHeld_Shoot &&
      !this.keyHeld_East &&
      !this.keyHeld_West &&
      !this.keyHeld_North &&
      !this.keyHeld_South
    ) {
      this.state = IDLE;
      this.animator.currentAnimationFrame = 0;
    } else if (this.keyHeld_Shoot) {
      this.state = SHOOTING;
      this.animator.currentAnimationFrame = 0;
    } else {
      this.state = MOVING;
    }
  };

  this.draw = function () {
    // Animations
    switch (this.state) {
      case MOVING:
        this.currentAnimation = `walk-${DIRECTION_MAP[this.direction]}`;
        break;
      case IDLE:
        this.currentAnimation = `idle-${DIRECTION_MAP[this.direction]}`;
        break;
      case SHOOTING:
        this.currentAnimation = `shoot-${DIRECTION_MAP[this.direction]}`;
        break;
    }
    this.animator.animate();

    // Hitboxes
    if (this.render_hitbox) {
      this.hitboxes.forEach((hitbox) => {
        if (hitbox.name === "main") {
          canvasContext.fillStyle = hitbox.color;
          canvasContext.fillRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
        }
      });
    }
  };
}
