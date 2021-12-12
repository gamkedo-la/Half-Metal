LeaperClass.prototype = new enemyClass();

function LeaperClass() {
  this.image = leaperSheet;
  this.type = LEAPER;
  this.width = 16;
  this.height = 16;
  this.animations = {
    "walk-right": [
      { x: 0, y: 0, w: this.width, h: this.height },
      { x: this.width, y: 0, w: this.width, h: this.height },
    ],
    "walk-left": [
      { x: this.width * 2, y: 0, w: this.width, h: this.height },
      { x: this.width * 3, y: 0, w: this.width, h: this.height },
    ],
    "walk-down": [
      { x: this.width * 4, y: 0, w: this.width, h: this.height },
      { x: this.width * 5, y: 0, w: this.width, h: this.height },
    ],
    "walk-up": [
      { x: this.width * 6, y: 0, w: this.width, h: this.height },
      { x: this.width * 7, y: 0, w: this.width, h: this.height },
    ],
  };
  this.currentAnimation = "walk-right";

  this.animator = new SpriteSheetAnimatorClass(this);
  this.hitbox_x = this.x;
  this.hitbox_y = this.y;
  this.hitbox_width = this.width;
  this.hitbox_height = this.height;

  this.update = function () {
    this.updateHitBox();
    if (this.state === ALERT) this.speed = 6;
  };

  this.alerted = function () {
    this.state = ALERT;
    playSound(sounds.leap);
  };
}
