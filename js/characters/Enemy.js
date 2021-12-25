function enemyClass() {
  this.name = "Enemy";
  this.type = ENEMY;
  this.speed = 2;
  this.health = 1;
  this.damage = 1;
  this.image = leaperSheet;
  this.height = 16;
  this.width = 16;
  this.x = 0;
  this.y = 0;
  this.direction;
  this.rays = [];
  this.state = NORMAL;
  this.currentAnimation = "idle";
  this.animations = {
    idle: [{ x: 0, y: 0, w: this.width, h: this.height }],
  };
  this.rotation = 0;
  this.hitbox_x = this.x;
  this.hitbox_y = this.y;
  this.hitbox_width = this.width;
  this.hitbox_height = this.height;
  this.render_hitbox = false;
  this.alert_timer = new TimerClass();
  this.animator = new SpriteSheetAnimatorClass(this);
  this.push_vector = { magnitude: 0, direction: 0 };
  this.pushable = true;
  this.stunnable = true;
  this.turnable = true;
  this.damageable = true;

  this.draw = function () {
    this.raycast();
    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = "red";
    canvasContext.beginPath();
    canvasContext.moveTo(this.x, this.y);

    this.rays.forEach(function (ray) {
      ray.draw();
      canvasContext.lineTo(ray.x, ray.y);
    });

    canvasContext.stroke();

    this.animator.animate();

    if (this.render_hitbox) {
      colorRect(
        this.hitbox_x,
        this.hitbox_y,
        this.hitbox_width,
        this.hitbox_height,
        "blue"
      );
    }
  };

  this.updateHitBoxes = function () {
    this.hitbox_x = this.x - this.width / 2;
    this.hitbox_y = this.y - this.height / 2;
    this.hitbox_width = this.width;
    this.hitbox_height = this.height;
  };

  this.update = function (dt) {
    this.updateHitBoxes();

    switch (this.state) {
      case ALERT:
        this.alerted(dt);
        break;

      case STUNNED:
        console.log("STUNNED");
        break;

      case PUSHED:
        applyVector(this, this.push_vector);
        this.speed = 0;

      default:
        break;
    }

    if (this.health <= 0) {
      this.removeSelf();
    }

    this.checkIfOutofBounds();
  };

  this.reset = function () {
    resetGameObject(this);
  };

  this.move = function () {
    nextX = this.x;
    nextY = this.y;

    if (this.state === STUNNED) return;

    var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    walkIntoTileType = TILE_GROUND;
    if (walkIntoTileIndex != undefined) {
      walkIntoTileType = worldGrid[walkIntoTileIndex];
    }

    this.checkTileType(walkIntoTileType, walkIntoTileIndex);

    for (var i = 0; i < this.rays.length; i++) {
      if (this.rays[i].destroyed) {
        this.removeRaycast(this.rays[i]);
      } else if (this.rays[i].found_player) {
        this.state = ALERT;
      }
      this.rays[i].move();
    }
  };

  this.checkTileType = function (tile_type, tile_index) {
    switch (tile_type) {
      case TILE_AMMO:
      case TILE_GROUND:
      case TILE_GOAL:
        moveInOwnDirection(this);
        break;
      case TILE_WALL:
      case TILE_WINDOW_H:
      case TILE_WINDOW_V:
        if (this.state === ALERT) {
          worldGrid[tile_index] = TILE_GROUND;
        } else {
          reverseDirection(this);
        }
        moveInOwnDirection(this);
        break;
      case TILE_STURDY_WALL:
        reverseDirection(this);
        moveInOwnDirection(this);
        break;
      default:
        break;
    }
  };

  this.raycast = function () {
    this.rays.push(new RayClass(this.x, this.y, this.direction));
  };

  this.alerted = function (dt) {
    console.log("alerted enemy");
  };

  this.removeRaycast = function (ray) {
    this.rays.splice(this.rays.indexOf(ray), 1);
  };

  this.checkIfOutofBounds = function () {
    if (this.x < 0 || this.x > canvas.width) {
      this.removeSelf();
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.removeSelf();
    }
  };

  this.removeSelf = function () {
    spawnEffect(this.x, this.y, LEAPER_DIE); // FIXME: put in subclass
    enemies.splice(enemies.indexOf(this), 1);
    this.alert_timer.stopAndCall();
    delete this;
  };
}
