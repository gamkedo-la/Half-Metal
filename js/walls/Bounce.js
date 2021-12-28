BounceWallClass.prototype = new WallClass();

function BounceWallClass() {
  this.tile = TILE_BOUNCE_WALL;
  this.type = BOUNCE;

  this.draw = function () {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(this.x, this.y, this.width, this.height);
    };
    
    this.reset = function () {
        // this.animator = new SpriteSheetAnimatorClass(this);
        resetGameObject(this);
      };
}
