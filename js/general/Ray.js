function RayClass(x, y, direction) {
  this.x = x;
  this.y = y;
  this.height = 3;
  this.width = 3;
  this.direction = direction;
  this.speed = 10;
  this.destroyed = false;
  this.found_player = false;
  this.color = "red";
  this.parent = undefined;
  this.render_hitbox = false;

  this.move = function () {
    nextX = this.x + this.speed * Math.cos((this.direction * Math.PI) / 180);
    nextY = this.y + this.speed * Math.sin((this.direction * Math.PI) / 180);

    var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    walkIntoTileType = TILE_GROUND;
    if (walkIntoTileIndex != undefined) {
      walkIntoTileType = world_grid[walkIntoTileIndex];
    }

    switch (walkIntoTileType) {
      case TILE_GROUND:
      case TILE_GOAL:
      case TILE_AMMO:
        this.x += this.speed * Math.cos((this.direction * Math.PI) / 180);
        this.y += this.speed * Math.sin((this.direction * Math.PI) / 180);
        break;
      case TILE_WALL:
      case TILE_WINDOW_H:
      case TILE_WINDOW_V:
      case TILE_STURDY_WALL:
        this.destroyed = true;
      default:
        break;
    }

    this.checkIfOutofBounds();
    this.checkForCollisionWithPlayer(this);
    this.checkForCollisionWithObject();
  };

  this.draw = function () {
    if (this.render_hitbox) {
      canvasContext.fillStyle = this.color;
      canvasContext.fillRect(this.x, this.y, this.width, this.height);
    }
  };

  this.checkIfOutofBounds = function () {
    if (this.x < 0 || this.x > canvas.width) {
      this.destroyed = true;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.destroyed = true;
    }
  };

  this.checkForCollisionWithPlayer = function () {
    const hitbox = player.hitboxes.find(
      (hitbox) => hitbox.name === "detection"
    );

    if (
      hitbox.x < this.x + this.width &&
      hitbox.x + hitbox.w > this.x &&
      hitbox.y < this.y + this.height &&
      hitbox.y + hitbox.h > this.y
    ) {
      this.found_player = true;
    }
  };

  this.checkForCollisionWithObject = function () {
    game_objects.forEach((object) => {
      // Ray won't collide with itself
      if (object === self || object === this.parent) {
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

      var ray_hitbox = {
        x: this.x,
        y: this.y,
        w: this.width,
        h: this.height,
      };

      if (collisionDetected(ray_hitbox, object_hitbox)) {
        this.destroyed = true;
      }
    });
  };
}
