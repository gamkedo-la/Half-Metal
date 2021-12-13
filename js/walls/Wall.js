function WallClass() {
  this.x = 0;
  this.y = 0;
  this.height = WORLD_H;
  this.width = WORLD_W;
  this.tile_type = TILE_WALL;
  this.direction = 0;
  this.state = NORMAL;
  this.animations = { normal: [{ x: 0, y: 0, h: this.height, w: this.width }] };
  this.currentAnimation = "normal";
  this.animator = new SpriteSheetAnimatorClass(this);

  this.draw = function () {};
  this.update = function () {};
  this.reset = function () {};
  this.move = function () {};
  this.checkTileType = function () {};
  this.checkIfOutofBounds = function () {};
  this.removeSelf = function () {};
}
