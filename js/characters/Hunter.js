HunterClass.prototype = new enemyClass();

function HunterClass() {
  this.image = hunterBotImage;
  this.width = 34;
  this.height = 34;
  this.myTileKind = TILE_HUNTER;
  this.animations = {
    idle: [{ x: 0, y: 0, w: this.width, h: this.height }],
  };

  this.animator = new SpriteSheetAnimatorClass(this);

  this.reset = function (whichImage) {
    this.image = whichImage;

    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == this.myTileKind) {
          worldGrid[arrayIndex] = TILE_GROUND;
          this.x = eachCol * WORLD_W + WORLD_W / 2;
          this.y = eachRow * WORLD_H + WORLD_H / 2;
          return;
        } // end of hunterBot start if
      } // end of col for
    } // end of row for
    console.log("NO HUNTERBOT START FOUND!");
  };
}
