FlyerClass.prototype = new enemyClass();

function FlyerClass() {
  this.type = FLYER;
  this.hitbox_x = this.x;
  this.hitbox_y = this.y;
  this.hitbox_width = this.width;
  this.hitbox_height = this.height;
}
