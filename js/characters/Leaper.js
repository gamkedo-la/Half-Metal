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
