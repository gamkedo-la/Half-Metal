InvisibleWall.prototype = new WallClass();

function InvisibleWall() {
  this.invincible = false;
  this.pushable = false;
  this.damageable = false;
  this.turnable = false;
  this.solid = true;
  this.render_hitbox = false;
  this.type = INVISIBLE;
  this.tile_type = TILE_INVISIBLE;
  this.image = invisible_wall;
  this.show_in_play_mode = false;

  this.draw = function () {
    if (currentMode === EDIT_MODE || this.show_in_play_mode) {
      this.animator.animate();
    }

    if (this.render_hitbox) {
      canvasContext.fillStyle = "red";
      canvasContext.fillRect(
        this.hitbox_x,
        this.hitbox_y,
        this.hitbox_width,
        this.hitbox_height
      );
    }
  };
}
