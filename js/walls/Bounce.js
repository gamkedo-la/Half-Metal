BounceWallClass.prototype = new WallClass();

function BounceWallClass() {
  this.tile = TILE_BOUNCE_WALL;
  this.type = BOUNCE;
  this.image = bounce_wall;
  this.damageable = false;
  this.pushable = false;
  this.turnable = false;
  this.stunnable = false;
  
  this.reset = function () {
    this.animator = new SpriteSheetAnimatorClass(this);
    resetGameObject(this);
  };
}
