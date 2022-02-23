SturdyWallClass.prototype = new WallClass();

function SturdyWallClass() {
  this.invincible = false;
  this.damageable = true;
  this.pushable = true;
  this.type = STURDY;
  this.image = sturdy_wall_img;

  this.removeSelf = function () {
    var effect = spawnEffect(this.x, this.y);
    effect.image = sturdyWallDestructionSheet;
    effect.animations = {
      one: [
        { x: 0, y: 0, h: 16, w: 16 },
        { x: 16, y: 0, h: 16, w: 16 },
        { x: 32, y: 0, h: 16, w: 16 },
        { x: 64, y: 0, h: 16, w: 18 },
        { x: 96, y: 0, h: 16, w: 25 },
        { x: 128, y: 0, h: 16, w: 27 },
      ],
    };
    effect.animator = new SpriteSheetAnimatorClass(effect, 3);
    walls.splice(walls.indexOf(this), 1);
    playSound(sounds.destroy);
    delete this;
  };
}
