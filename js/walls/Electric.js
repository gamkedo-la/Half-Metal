ElectricWallClass.prototype = new WallClass();

function ElectricWallClass(orientation = HORIZONTAL) {
  this.tile_type = TILE_ELEC_WALL;
  this.type = ELECTRIC;
  this.orientation = orientation;
  this.width = this.orientation === HORIZONTAL ? WORLD_W * 2 : WORLD_W;
  this.height = this.orientation === VERTICAL ? WORLD_H * 2 : WORLD_H;
  this.state = CLOSED;
  this.image = this.orientation === VERTICAL ? elec_wall_v : elec_wall_h;
  this.animations = { closed: [{ x: 0, y: 0, h: this.height, w: this.width }] };
  this.currentAnimation = "closed";
  this.animator = new SpriteSheetAnimatorClass(this);
}
