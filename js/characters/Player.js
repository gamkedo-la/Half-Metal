const PLAYER_MOVE_SPEED = 2.0;
const MOVING = "MOVING";
const SHOOTING = "SHOOTING";
const IDLE = "IDLE";

function playerClass() {
  this.x = 75;
  this.y = 75;
  this.width = 18;
  this.height = 26;
  this.image;
  this.name = "Player";
  this.ammo = 0;

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

  this.keyPressed_Shoot = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;
  this.controlKeyShoot;

  this.direction = 0;
  this.state = IDLE;

  this.moveAnimation = new AnimationClass(
    "move",
    [
      new FrameClass(2, 0, this.width, this.height),
      new FrameClass(24, 0, this.width, this.height),
    ],
    playerSheet,
    240
  );

  this.idleAnimation = new AnimationClass(
    "idle",
    [
      new FrameClass(2, 0, this.width, this.height),
      new FrameClass(24, 0, this.width, this.height),
    ],
    playerSheet,
    0
  );

  this.shootAnimation = new AnimationClass(
    "shooting",
    [new FrameClass(2, this.height + 10, this.width, this.height)],
    playerSheet
  );

  this.setupInput = function (upKey, rightKey, downKey, leftKey, shootKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
    this.controlKeyShoot = shootKey;
  };

  this.reset = function (whichImage, warriorName) {
    this.name = warriorName;
    this.image = whichImage;
    this.ammo = 0;

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == TILE_PLAYERSTART) {
          worldGrid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } // end of player start if
      } // end of col for
    } // end of row for
    console.log("NO PLAYER START FOUND!");
  };

  this.move = function () {
    var nextX = this.x;
    var nextY = this.y;

    if (this.keyHeld_North) {
      nextY -= PLAYER_MOVE_SPEED;
      this.direction = 270;
    }
    if (this.keyHeld_East) {
      nextX += PLAYER_MOVE_SPEED;
      this.direction = 0;
    }
    if (this.keyHeld_South) {
      nextY += PLAYER_MOVE_SPEED;
      this.direction = 90;
    }
    if (this.keyHeld_West) {
      nextX -= PLAYER_MOVE_SPEED;
      this.direction = 180;
    }

    var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    var walkIntoTileType = TILE_WALL;

    if (walkIntoTileIndex != undefined) {
      walkIntoTileType = worldGrid[walkIntoTileIndex];
    }

    switch (walkIntoTileType) {
      case TILE_GROUND:
        this.x = nextX;
        this.y = nextY;
        break;
      case TILE_GOAL:
        currentLevel++;
        if (currentLevel <= levels.length - 1) {
          loadLevel(levels[currentLevel].level_map);
        }
        break;
      case TILE_DOOR:
        if (this.ammo > 0) {
          this.ammo--; // one less bullet
          worldGrid[walkIntoTileIndex] = TILE_GROUND;
        }
        break;
      case TILE_AMMO:
        this.ammo++; // one more bullet
        worldGrid[walkIntoTileIndex] = TILE_GROUND;
        break;
      case TILE_WALL:
      case TILE_STURDY_WALL:
        if (this.bumpDelay <= 0) {
          playSound(sounds.bump);
          this.bumpDelay = 30;
        }
        this.bumpDelay -= 1;
        break;

      default:
        break;
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

    this.checkForCollisionWithEnemy(this);
    this.checkForCollisionWithEntity(this);
  };

  this.checkForCollisionWithEnemy = function (player) {
    enemies.forEach(function (enemy) {
      if (
        enemy.x < player.x + player.width &&
        enemy.x + enemy.width > player.x &&
        enemy.y < player.y + player.height &&
        enemy.y + enemy.height > player.y
      ) {
        loadLevel(levels[currentLevel].level_map);
        playSound(sounds.lose);
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
        console.log("Hit warp");
        entity.teleport(player);
      }
    });
  };

  this.shoot = function () {
    if (this.keyHeld_Shoot && !this.didShoot && this.ammo > 0) {
      spawnBullet(this.x, this.y, this.direction);
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
    this.shoot();

    if (
      !this.keyHeld_Shoot &&
      !this.keyHeld_East &&
      !this.keyHeld_West &&
      !this.keyHeld_North &&
      !this.keyHeld_South
    ) {
      this.state = IDLE;
    } else if (this.keyHeld_Shoot) {
      this.state = SHOOTING;
    } else {
      this.state = MOVING;
    }
    console.log(this.state);
  };

  this.draw = function () {
    switch (this.state) {
      case MOVING:
        this.moveAnimation.draw(
          this.x,
          this.y,
          this.width,
          this.height
        );
        break;
      case IDLE:
        this.idleAnimation.draw(
          this.x,
          this.y,
          this.width,
          this.height
        );
        break;
      case SHOOTING:
        this.shootAnimation.draw(
          this.x,
          this.y,
          this.width,
          this.height
        );
        break;
    }
  };
}
