ElectricWallClass.prototype = new WallClass();

function ElectricWallClass(orientation = HORIZONTAL) {
  this.tile_type = TILE_ELEC_WALL;
  this.type = ELECTRIC;
  this.orientation = orientation;
  this.width = this.orientation === HORIZONTAL ? WORLD_W * 2 : WORLD_W;
  this.height = this.orientation === VERTICAL ? WORLD_H * 2 : WORLD_H;
  this.state = CLOSED;
  this.image = this.orientation === VERTICAL ? elec_wall_v : elec_wall_h;
  this.animations = {
    closed_h: [
      { x: 0, y: 0, h: this.height, w: this.width },
      { x: this.width, y: 0, h: this.height, w: this.width },
      { x: this.width * 2, y: 0, h: this.height, w: this.width },
      { x: this.width, y: 0, h: this.height, w: this.width },
    ],
    closed_v: [
      { x: 0, y: 0, h: this.height, w: this.width },
      { x: 0, y: this.height, h: this.height, w: this.width },
      { x: 0, y: this.height * 2, h: this.height, w: this.width },
      { x: 0, y: this.height, h: this.height, w: this.width },
    ],
    open_h: [{ x: 0, y: 0, h: this.height, w: this.width }],
    open_v: [{ x: 0, y: 0, h: this.height, w: this.width }],
  };
  this.currentAnimation =
    this.orientation === HORIZONTAL ? "closed_h" : "closed_v";
  this.animator = new SpriteSheetAnimatorClass(this);
  this.turnable = true;


  this.reset = function () {
    this.animator = new SpriteSheetAnimatorClass(this);
    resetGameObject(this);
  };

  this.update = function () {
    this.updateHitBoxes();
    switch (this.state) {
      case OPEN:
        this.image =
          this.orientation === VERTICAL ? elec_wall_v_open : elec_wall_h_open;
        this.animator.setAnimation(
          this.orientation === VERTICAL ? "open_v" : "open_h"
        );
        break;

      case CLOSED:
        this.image = this.orientation === VERTICAL ? elec_wall_v : elec_wall_h;
        this.animator.setAnimation(
          this.orientation === VERTICAL ? "closed_v" : "closed_h"
        );
        this.checkForCollisionWithEnemy(this);
        break;
    }
  };

  this.checkEnemyType = function (enemy) {
        enemy.removeSelf();
        playSound(sounds.destroy);
  };
}
