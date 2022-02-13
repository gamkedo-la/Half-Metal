function LaserClass(orientation = HORIZONTAL) {
  this.walls = [];
  this.x = 0;
  this.y = 0;
  this.tile = TILE_LASER;
  this.type = LASER;
  this.orientation = orientation;
  this.width = WORLD_W;
  this.height = WORLD_H;
  this.image = this.orientation === HORIZONTAL ? laser_h : laser_v;
  this.state = ON;
  this.animations = {
    on_h: [
      { x: 0, y: 0, w: this.width, h: this.height },
      { x: 16, y: 0, w: this.width, h: this.height },
      { x: 32, y: 0, w: this.width, h: this.height },
    ],
    on_v: [
      { x: 0, y: 16, w: this.width, h: this.height },
      { x: 16, y: 16, w: this.width, h: this.height },
      { x: 32, y: 16, w: this.width, h: this.height },
    ],
    off_h: [{ x: 0, y: 0, w: this.width, h: this.height }],
    off_v: [{ x: 0, y: 0, w: this.width, h: this.height }],
  };
  this.animator = new SpriteSheetAnimatorClass(this);
  this.currentAnimation = this.orientation === HORIZONTAL ? "on_h" : "on_v";
  this.hitboxes = [
    {
      name: "main",
      x: 0,
      y: 0,
      w: 13,
      h: 13,
      offset_x: 0,
      offset_y: 0,
      color: "red",
    },
  ];

  this.reset = function () {
    resetGameObject(this);
    this.checkForAdjacentWalls();
  };

  this.updateHitBoxes = function () {
    this.hitboxes.forEach((hitbox) => {
      hitbox.x = this.x - hitbox.w / 2 + hitbox.offset_x;
      hitbox.y = this.y - hitbox.h / 2 + hitbox.offset_y;
    });
  };

  this.update = function () {
    this.updateHitBoxes();

    switch (this.state) {
      case ON:
        this.animator.setAnimation(
          this.orientation === HORIZONTAL ? "on_h" : "on_v"
        );
        this.image = this.orientation === HORIZONTAL ? laser_h : laser_v;
        break;

      case OFF:
        this.animator.setAnimation(
          this.orientation === HORIZONTAL ? "off_h" : "off_v"
        );
        this.image =
          this.orientation === HORIZONTAL ? laser_off_h : laser_off_v;
        break;
    }

    this.checkForAdjacentWalls();

    if (this.walls.length < 2 && all_objects_spawned) {
      this.removeSelf();
    }
  };

  this.checkForAdjacentWalls = function () {
    this.walls.length = 0;

    if (this.orientation === HORIZONTAL) {
      var right_wall = walls.find(
        (wall) => wall.x === this.x + this.width && wall.y === this.y
      );
      var left_wall = walls.find(
        (wall) => wall.x === this.x - this.width && wall.y === this.y
      );
      if (right_wall) {
        this.walls.push(right_wall);
      }
      if (left_wall) {
        this.walls.push(left_wall);
      }
    } else {
      var upper_wall = walls.find(
        (wall) => wall.y === this.y - this.height && wall.x === this.x
      );
      var lower_wall = walls.find(
        (wall) => wall.y === this.y + this.height && wall.x === this.x
      );
      if (upper_wall) {
        this.walls.push(upper_wall);
      }
      if (lower_wall) {
        this.walls.push(lower_wall);
      }
    }
  };

  this.alertEnemies = function () {
    console.log("ALERTING ENEMIES");
    enemies.forEach(function (enemy) {
      enemy.state = ALERT;
    });
  };

  this.removeSelf = function () {
    hazards.splice(hazards.indexOf(this), 1);
    delete this;
  };

  this.draw = function () {
    this.animator.animate();
  };
}
