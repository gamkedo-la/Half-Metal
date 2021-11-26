function warpClass(x, y) {
  this.x = x;
  this.y = y;
  this.height = 32;
  this.width = 32;
  this.link = undefined;

  this.draw = function () {
    canvasContext.fillRect(this.x, this.y, this.width, this.height);
  };

  this.reset = function () {
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == TILE_WARP) {
          worldGrid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } // end of warp start if
      } // end of col for
    } // end of row for
    console.log("NO WARP START FOUND!");
  };

  this.teleport = function (subject) {
    if (this.link !== undefined) {
      subject.x = this.link.x + subject.width;
      subject.y = this.link.y + subject.height;
    }
  };
}
