function LeaperClass() {
  EnemyClass.call(this);
  this.name = "Leaper";
  this.type = LEAPER;
  this.width = 16;
  this.height = 16;
  this.image = leaperSheet;
  this.currentAnimation = "walk-right";
  this.animations = FRAME_DATA[LEAPER];
}
