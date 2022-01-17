InvisibleWall.prototype = new WallClass();

function InvisibleWall() {
  this.invincible = false;
  this.pushable = false;
  this.damageable = false;
  this.turnable = false;
  this.solid = true;
}
