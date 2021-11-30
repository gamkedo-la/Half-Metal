const PLAYER_MOVE_SPEED = 4.0;

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
        console.log(this.name + " WINS!");
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

      default:
        break;
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

  this.input = function () {
    if (this.keyHeld_Shoot && !this.keyPressed_Shoot) {
      this.keyPressed_Shoot = true;
    }

    if (!this.keyHeld_Shoot) {
      this.keyPressed_Shoot = false;
    }
  };

  this.update = function () {
    this.shoot();
  };

  this.draw = function () {
    drawBitmapCenteredWithRotation(this.image, this.x, this.y, 0);
    // canvasContext.fillText(this.ammo, this.x - 3, this.y + 3);
  };
}
