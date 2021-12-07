HunterClass.prototype = new enemyClass();

function HunterClass() {
  this.myTileKind = TILE_HUNTER_BOT;
  this.x = 75;
  this.y = 75;
  this.width = 35;
  this.height = 54;
  this.image = hunterBotImage;

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

  this.draw = function () {
    drawBitmapCenteredWithRotation(this.image, this.x, this.y, 0);
  };
}
