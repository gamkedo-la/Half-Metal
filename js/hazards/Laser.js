function LaserClass(orientation = HORIZONTAL) {
  this.walls = [];
  this.x = 0;
  this.y = 0;
  this.orientation = orientation;
  this.width = this.orientation === HORIZONTAL ? WORLD_W * 2 : WORLD_W;
  this.height = this.orientation === VERTICAL ? WORLD_H * 2 : WORLD_H;
  this.state = ON;
  this.animations = {
    on_h: [{ x: 0, y: 0, width: this.width, height: this.height }],
    on_v: [{ x: 0, y: 0, width: this.width, height: this.height }],
    off_h: [{ x: 0, y: 0, width: this.width, height: this.height }],
    off_v: [{ x: 0, y: 0, width: this.width, height: this.height }],
  };
  this.image = this.orientation === HORIZONTAL ? laser_h : laser_v;
  this.currentAnimation = this.orientation === HORIZONTAL ? "on_h" : "on_v";
  this.animator = new SpriteSheetAnimatorClass(this);

  this.reset = function () {
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] === TILE_LASER) {
          worldGrid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } // end of start if
      } // end of col for
    } // end of row for
  };

  this.update = function () {
    switch (this.state) {
      case ON:
        console.log("LASER ON");
        this.animator.setAnimation(
          this.orientation === HORIZONTAL ? "on_h" : "on_v"
        );
        break;

      case OFF:
        console.log("LASER OFF");
        this.animator.setAnimation(
          this.orientation === HORIZONTAL ? "off_h" : "off_v"
        );
        break;
    }
  };

  this.draw = function () {
    console.log("LASER DRAW");
    this.animator.animate();
  };
}
