LeaperClass.prototype = new enemyClass();

function LeaperClass() {
  this.image = leaperSheet;
  this.type = LEAPER;
  this.width = 16;
  this.height = 16;
  this.animations = FRAME_DATA[LEAPER];
  this.currentAnimation = "walk-right";

  // Collision
  this.onCollideWithDestructible = function (tile_index) {
    if (this.state === ALERT) {
      world_grid[tile_index] = TILE_GROUND;
    } else {
      reverseDirection(this);
    }

    moveInOwnDirection(this);
  };

  // State
  this.alerted = function () {
    if (this.state === ALERT) this.speed = 6;
    playSound(sounds.leap);
  };
}
