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
      { x: 0, y: 0, h: 32, w: this.width },
      { x: 0, y: 32, h: 32, w: this.width },
      { x: 0, y: 64, h: 32, w: this.width },
      { x: 0, y: 32, h: 32, w: this.width },
    ],
    open_h: [{ x: 0, y: 0, h: this.height, w: this.width }],
    open_v: [{ x: 0, y: 0, h: this.height, w: this.width }],
  };
  this.currentAnimation =
    this.orientation === HORIZONTAL ? "closed_h" : "closed_v";
  this.animator = new SpriteSheetAnimatorClass(this);
  this.turnable = true;
  this.has_opened = false;
  this.prev_state = this.state;
  this.render_hitbox = true;
  this.hitboxes = [
    {
      name: "barrier",
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      color: "blue",
    },
  ];

  this.reset = function () {
    this.start_hum = true;
    this.animator = new SpriteSheetAnimatorClass(this);
    resetGameObject(this);
  };

  this.checkForStateChange = function () {
    if (this.prev_state !== this.state) {
      playSound(sounds.elec_open);
      this.prev_state = this.state;
    }
  };

  this.update = function () {
    // Fixing error regarding state on object spawn
    if (this.state === MOVING) {
      this.state = CLOSED;
    }

    if (this.orientation === VERTICAL) {
      this.height = 32;
      this.width = 16;
    }

    this.checkForStateChange();

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

  this.updateHitBoxes = function () {
    var buffer = 4;
    var displacement = 8;
    this.hitbox_x = buffer / 2 + this.x - this.width / 2;
    this.hitbox_y = buffer / 2 + this.y - this.height / 2;
    this.hitbox_height = this.height - buffer;
    this.hitbox_width = this.width - buffer;

    const barrier = this.hitboxes[0];
    barrier.x = buffer / 2 + this.x - this.width / 2;
    
    if (this.orientation === HORIZONTAL) {
      barrier.x -= 11;
    }

 
    
    barrier.y = buffer / 2 + this.y - this.height / 2;

    if (this.orientation === VERTICAL) {
      barrier.y -= 4;
    }

    barrier.w = this.orientation === HORIZONTAL ? 48 : 16;
    barrier.h = this.orientation === VERTICAL ? 32 : 16;
  };
}
