function LeaperClass() {
  EnemyClass.call(this);
  this.name = "Leaper";
  this.type = LEAPER;
  this.width = 16;
  this.height = 16;
  this.image = leaperSheet;
  this.currentAnimation = "walk-right";
  this.animations = FRAME_DATA[LEAPER];
  this.speed = 0.5;

  this.whileAlerted = function () {
    this.alert_timer.update();
    this.speed = 1;
  };

  this.whileNormal = function () {
    this.speed = 0.5;
  };

  this.onCollisionWhileAlert = function (other) {
    if (other.type === INVISIBLE || other.type === STURDY) {
      reverseDirection(this);
      return;
    }

    if (other.type === HUNTER) {
      return;
    }

    if (other) {
      other.destroyed = true;
      other.health -= 1;
    }
  };
}
