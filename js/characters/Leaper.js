LeaperClass.prototype = new enemyClass();

function LeaperClass() {
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

  this.alerted = function () {
    this.state = ALERT;
    playSound(sounds.leap);
  };

  this.draw = function () {
    this.raycast();
    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = "red";
    canvasContext.beginPath();
    canvasContext.moveTo(this.x, this.y);

    this.rays.forEach(function (ray) {
      ray.draw();
      canvasContext.lineTo(ray.x, ray.y);
    });

    canvasContext.stroke();

    this.animator.animate();
  };
}
