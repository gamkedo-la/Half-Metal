InvisibleWall.prototype = new WallClass();

function InvisibleWall() {
  this.invincible = false;
  this.pushable = false;
  this.damageable = false;
  this.turnable = false;
  this.solid = true;
  this.type = INVISIBLE;
  this.tile_type = TILE_INVISIBLE;
  this.image = invisible_wall;
  this.show_in_play_mode = false;
  this.render_hitbox = false;
  this.hitboxes = [
    {
      name: "shot_detection",
      x: this.x,
      x: this.y,
      w: this.width,
      h: this.height,
      color: "blue",
    },
  ];

  this.draw = function () {
    if (currentMode === EDIT_MODE || this.show_in_play_mode) {
      this.animator.animate();
    }

    if (this.render_hitbox) {
      // canvasContext.fillStyle = "red";
      // canvasContext.fillRect(
      //   this.hitbox_x,
      //   this.hitbox_y,
      //   this.hitbox_width,
      //   this.hitbox_height
      // );

      this.hitboxes.forEach((hitbox) => {
        canvasContext.fillStyle = hitbox.color;
        canvasContext.fillRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
      });
    }
  };

  this.updateHitBoxes = function () {
    var buffer = 4;
    this.hitbox_x = buffer / 2 + this.x - this.width / 2;
    this.hitbox_y = buffer / 2 + this.y - this.height / 2;
    this.hitbox_height = this.height - buffer;
    this.hitbox_width = this.width - buffer;

    this.hitboxes.forEach((hitbox) => {
      hitbox.x = buffer / 2 + this.x - this.width / 2 + 1;
      hitbox.y = buffer / 2 + this.y - this.height / 2 + 1;
      hitbox.h = this.height / 2;
      hitbox.w = this.width / 2;
    });
  };
}
