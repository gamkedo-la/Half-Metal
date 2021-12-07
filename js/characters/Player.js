const PLAYER_MOVE_SPEED = 2.0;

function playerClass() {
  this.x = 75;
  this.y = 75;
  this.width = 18;
  this.height = 26;
  this.image = playerSheet;
  this.name = "Player";
  this.ammo = 0;
  this.selected_ammo = NORMAL;
  this.ammo_types = [NORMAL, STUN];
  this.currentAmmoIndex = 0;

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

  this.directionMap = {
    270: "north",
    90: "south",
    0: "east",
    180: "west",
  };

  this.moveAnimation = new AnimationClass(
    "move",
    [
      new FrameClass(0, 0, this.width, this.height, "south"),
      new FrameClass(16, 0, this.width, this.height, "south"),
      new FrameClass(33, 0, this.width, this.height, "west"),
      new FrameClass(55, 0, this.width, this.height, "west"),
      new FrameClass(76, 0, this.width, this.height, "east"),
      new FrameClass(99, 0, this.width, this.height, "east"),
      new FrameClass(119, 0, this.width, this.height, "north"),
      new FrameClass(136, 0, this.width, this.height, "north"),
    ],
    this.image,
    240
  );

  this.idleAnimation = new AnimationClass(
    "idle",
    [new FrameClass(129, this.height + 9, this.width, this.height)],
    this.image,
    0
  );

  this.shootAnimation = new AnimationClass(
    "shooting",
    [
      new FrameClass(62, this.height + 3, this.width, this.height, "north"),
      new FrameClass(47, this.height + 9, this.width, this.height, "south"),
      new FrameClass(25, this.height + 10, this.width, this.height, "east"),
      new FrameClass(3, this.height + 10, this.width, this.height, "west"),
    ],
    this.image
  );

  this.setupInput = function (
    upKey,
    rightKey,
    downKey,
    leftKey,
    shootKey,
    switchKey
  ) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
    this.controlKeyShoot = shootKey;
    this.controlKeySwitchAmmo = switchKey;
  };

  this.reset = function (whichImage, name) {
    this.name = name;
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
        if (!this.keyHeld_Shoot) {
          this.x = nextX;
          this.y = nextY;
        }
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
      case TILE_STUN_SHOT:
        this.ammo++; // one more bullet
        worldGrid[walkIntoTileIndex] = TILE_GROUND;
        playSound(sounds.get_ammo);
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
      spawnBullet(this.x, this.y, this.direction, this.selected_ammo);
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
      }

      this.idleAnimation.sheet = this.image;
      this.moveAnimation.sheet = this.image;
      this.shootAnimation.sheet = this.image;

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
          this.height,
          this.directionMap[this.direction]
        );
        break;
      case IDLE:
        this.idleAnimation.draw(this.x, this.y, this.width, this.height);
        break;
      case SHOOTING:
        this.shootAnimation.draw(
          this.x,
          this.y,
          this.width,
          this.height,
          this.directionMap[this.direction]
        );
        break;
    }
  };
}
