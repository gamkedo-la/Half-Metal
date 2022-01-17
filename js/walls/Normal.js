NormalWallClass.prototype = new WallClass();

function NormalWallClass() {
  this.damageable = true;
  this.invincible = false;
  this.pushable = true;
}
