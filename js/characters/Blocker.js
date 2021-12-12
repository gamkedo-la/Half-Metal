BlockerClass.prototype = new enemyClass();

const BLOCKER_BOT_MOVEMENT_SPEED = 1.0;

function BlockerClass() {
  this.myTileKind = TILE_BLOCKER;
  this.type = BLOCKER;
  this.width = 34;
  this.height = 34;
  this.image = blockerSheet;
  this.health = 3;
  this.animations = {
    idle: [{ x: 0, y: 0, w: this.width, h: this.height }],
  };
  this.currentAnimation = "idle";

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
        } // end of blockerBot start if
      } // end of col for
    } // end of row for
    console.log("NO BLOCKERBOT START FOUND!");
  };

  this.update = function () {
    if (this.health <= 0) {
      this.removeSelf();
    }
  };
}
