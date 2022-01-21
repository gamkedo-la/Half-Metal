NormalWallClass.prototype = new WallClass();

function NormalWallClass() {
  this.invincible = false;
  this.damageable = true;
  this.pushable = true;
}
