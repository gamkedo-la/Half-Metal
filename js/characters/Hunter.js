HunterClass.prototype = new enemyClass();

const HUNTER_BOT_MOVEMENT_SPEED=1.0;

function HunterClass() {
  this.myTileKind = TILE_HUNTER;
  this.type = HUNTER;
  this.x = 75;
  this.y = 75;
  this.speedX = HUNTER_BOT_MOVEMENT_SPEED;
  this.speedY = HUNTER_BOT_MOVEMENT_SPEED;
  this.velX=1;
  this.velY=2;
  this.width = 35;
  this.height = 54;
  this.image = hunterBotImage;
  this.angleMovement = 0;
  this.currentLevel = map;
  this.pathMap = [];
  
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

  
  this.createPath = function () {
    // Make pathmap the same length as the level array
    this.pathMap = [...this.currentLevel];

    // Set all elements in path to 0
    for (var i = 0; i < this.pathMap.length; i++) {
      if (this.currentLevel[i] === 1) {
        this.pathMap[i] = 100;
        continue;
      }
      this.pathMap[i] = 0;
    }

    // get indices
    var goal = getTileIndexAtPixelCoord(player.x, player.y);
    var start = getTileIndexAtPixelCoord(this.x, this.y);

    // build path
    // -- get row and column position
    // -- get current positon value (starting at 0)
    // -- check if adjacent indices exist or if space is available,
    // --   assign (value + 1) to (row[i] and col[i + 1]) and (row[i + 1] and col[i]), etc...
    // -- perform same evaluation to tiles adjacent to those tiles
  };
  
  this.move = function (){
    this.x += this.speedX;
    this.y += this.speedY;

    this.x += this.speedX;
    var hunterPosition; 
    hunterPosition = new HunterClass();
    hunterPosition.x = player.x;
    hunterPosition.y = player.y;

    if(this.x < 0 && this.speedX < 0.0){
      this.speedX *=-1;
    }

    if (this.x > canvas.width *1.2 && this.speedX > 0.0){
      this.speedX *=-1;
    }

    // if (this.x < 20 && this.speedX > 0.0){
    //    this.speedX *= 1;
    // }

     if (this.y > canvas.height && this.speedY > 0.0){
       this.speedY *= -1;
      //  hunterPosition.x += player.x;
    }

    if (this.y > canvas.height * 1.2 && this.speedY > 0.0){
      this.speedY *= 1;
   }

   if (this.y < canvas.height  && this.speedY > 0.0){
     this.speedY *=-1;
   }

    

    
    // hunterPosition.speedX = 6 - Math.random() * 10;
    // hunterPosition.speedY = 10 - Math.random() * 10;
  }

  this.draw = function () {
    
    drawBitmapCenteredWithRotation(this.image,this.x, this.y, this.angleMovement);
    
  };
}
