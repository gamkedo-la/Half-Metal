SturdyWallClass.prototype = new WallClass();

function SturdyWallClass() {
  this.invincible = false;
  this.damageable = true;
  this.pushable = true;
  this.type = STURDY_WALL;
}
