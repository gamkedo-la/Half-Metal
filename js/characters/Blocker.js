const BLOCKER_BOT_MOVEMENT_SPEED = 0.5;
const SHOOT_COUNTDOWN_MAX = 40;

function BlockerClass() {
  EnemyClass.call(this);
  this.type = BLOCKER;
  this.hitboxes = [
    {
      name: "main",
      x: 0,
      y: 0,
      w: 26,
      h: 26,
      offset_x: 0,
      offset_y: 0,
      color: "red",
    },
  ];
  this.width = 34;
  this.height = 34;
  this.image = blockerSheet;
  this.health = 3;
  this.speed = BLOCKER_BOT_MOVEMENT_SPEED;
  this.animations = FRAME_DATA[BLOCKER];
  this.currentAnimation = "idle-right";
  this.shoot_timer = SHOOT_COUNTDOWN_MAX;
  this.render_hitbox = false;

  this.whileAlerted = function () {
    // Override in subclasses
    this.alert_timer.update();
    this.shoot_timer -= 1;
    if (this.shoot_timer <= 0) {
      this.shoot();
      this.shoot_timer = SHOOT_COUNTDOWN_MAX;
    }
  };

  this.onCollision = function (other) {
    if (other.type === ELECTRIC && other.state === CLOSED) {
      this.destroyed = true;
      return;
    }

    if (this.state === ALERT) {
      this.onCollisionWhileAlert(other);
      return;
    }

    // reverseDirection(this);
    this.speed = this.speed * -1;
  };

  this.drawShadow = function () {
    // NO DRAW
  };

  this.move = function () {
    if (this.state === ALERT) {
      return;
    }

    if (this.stun_timer <= 0) {
      this.stun_timer = STUN_COUNTDOWN_MAX;
      this.state = NORMAL;
    }

    if (this.state === STUNNED) {
      this.rays.length = 0;
      this.stun_timer -= 1;
      this.x += Math.cos(this.stun_timer);
      return;
    }

    strafe(this);
    this.updateHitBoxes();
  };

  // Class Specialties
  this.shoot = function () {
    // this.currentAnimation = `idle-${getDirectionConstantOfObject(this)}`;
    var spawn_x = 18 * Math.cos((this.direction * Math.PI) / 180);
    var spawn_y = 18 * Math.sin((this.direction * Math.PI) / 180);

    spawnBullet(this.x + spawn_x, this.y + spawn_y, this.direction, NORMAL);
    playSound(sounds.shoot);

    this.shield_up = false;
  };
}
