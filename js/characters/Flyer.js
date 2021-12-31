FlyerClass.prototype = new enemyClass();

function FlyerClass() {
  this.type = FLYER;
  this.tile = TILE_FLYER;
  this.hitbox_x = this.x;
  this.hitbox_y = this.y;
  this.hitbox_width = this.width;
  this.hitbox_height = this.height;
  this.image = flyer_sheet;
  this.currentAnimation = "fly-down";
  this.animations = {
    "fly-down": [
      { x: 0, y: 0, w: this.width, h: this.height },
      { x: 16, y: 0, w: this.width, h: this.height },
    ],
    "fly-up": [
      { x: 0, y: 16, w: this.width, h: this.height },
      { x: 16, y: 16, w: this.width, h: this.height },
    ],
    "fly-left": [
      { x: 0, y: 32, w: this.width, h: this.height },
      { x: 16, y: 32, w: this.width, h: this.height },
    ],
    "fly-right": [
      { x: 0, y: 48, w: this.width, h: this.height },
      { x: 16, y: 48, w: this.width, h: this.height },
    ],
  };

  this.reset = function () {
    this.animator = new SpriteSheetAnimatorClass(this, 4);
    resetGameObject(this);
  };

  this.move = function () {};

  this.draw = function () {
    this.animator.animate();
    canvasContext.drawImage(
      shadow,
      this.x - this.width / 2,
      this.y + this.height
    );
  };
}
