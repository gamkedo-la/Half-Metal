const BLOCKER_BOT_MOVEMENT_SPEED = 0.3;
const SHOOT_COUNTDOWN_MAX = 40;

function BlockerClass() {
  EnemyClass.call(this);
  this.type = BLOCKER;
  this.back_hitbox_width = 0;
  this.back_hitbox_height = 0;
  this.back_hitbox_x = 0;
  this.back_hitbox_y = 0;
  this.width = 34;
  this.height = 34;
  this.image = blockerSheet;
  this.health = 3;
  this.speed = BLOCKER_BOT_MOVEMENT_SPEED;
  this.animations = FRAME_DATA[BLOCKER];
  this.currentAnimation = "idle-right";
  this.shoot_timer = SHOOT_COUNTDOWN_MAX;

  this.whileAlerted = function () {
    // Override in subclasses
    this.alert_timer.update();
    this.shoot_timer -= 1;
    if (this.shoot_timer <= 0) {
      this.shoot();
      this.shoot_timer = SHOOT_COUNTDOWN_MAX;
    }
  };

  this.move = function () {
    if (this.state === ALERT) {
      return;
    }
    strafe(this);
    this.updateHitBoxes();
  };

  // Class Specialties
  this.shoot = function () {
    // this.currentAnimation = `idle-${getDirectionConstantOfObject(this)}`;
    var spawn_x = this.width * Math.cos((this.direction * Math.PI) / 180);
    var spawn_y = this.height * Math.sin((this.direction * Math.PI) / 180);

    spawnBullet(this.x + spawn_x, this.y + spawn_y, this.direction, NORMAL);
    playSound(sounds.shoot);

    this.shield_up = false;
  };
}
