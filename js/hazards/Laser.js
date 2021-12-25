function LaserClass(orientation = HORIZONTAL) {
  this.walls = [];
  this.x = 0;
  this.y = 0;
  this.tile = TILE_LASER;
  this.type = LASER;
  this.orientation = orientation;
  this.width = this.orientation === HORIZONTAL ? WORLD_W : WORLD_W;
  this.height = this.orientation === VERTICAL ? WORLD_H : WORLD_H;
  this.image = this.orientation === HORIZONTAL ? laser_h : laser_v;
  this.state = ON;
  this.animations = {
    on_h: [
      { x: 0, y: 0, w: this.width, h: this.height },
      { x: 16, y: 0, w: this.width, h: this.height },
      { x: 32, y: 0, w: this.width, h: this.height },
    ],
    on_v: [{ x: 0, y: 0, w: this.width, h: this.height }],
    off_h: [{ x: 0, y: 0, w: this.width, h: this.height }],
    off_v: [{ x: 0, y: 0, w: this.width, h: this.height }],
  };
  this.animator = new SpriteSheetAnimatorClass(this);
  this.currentAnimation = this.orientation === HORIZONTAL ? "on_h" : "on_v";

  this.reset = function () {
    resetGameObject(this);
    this.checkForAdjacentWalls();
  };

  this.update = function () {
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

    if (this.walls.length < 2) {
      this.removeSelf();
    }
  };

  this.checkForAdjacentWalls = function () {
    // Check for adjacent walls
    var index = getTileIndexAtPixelCoord(this.x, this.y);
    console.log("RESET LASER");
    console.log(index);

    this.walls.length = 0;

    if (this.orientation === HORIZONTAL) {
      var leftCol = index - 1;
      var rightCol = index + 1;

      if (
        worldGrid[leftCol] &&
        worldGrid[rightCol] &&
        worldGrid[leftCol] === TILE_WALL &&
        worldGrid[rightCol] === TILE_WALL
      ) {
        this.walls.push(leftCol);
        this.walls.push(rightCol);
      }
    } else {
      var upperRow = index - WORLD_COLS;
      var lowerRow = index + WORLD_COLS;

      if (
        worldGrid[upperRow] &&
        worldGrid[lowerRow] &&
        worldGrid[upperRow] === TILE_WALL &&
        worldGrid[lowerRow] === TILE_WALL
      ) {
        this.walls.push(upperRow);
        this.walls.push(lowerRow);
      }
    }
  };

  this.alertEnemies = function () {
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
