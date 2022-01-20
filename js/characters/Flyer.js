function FlyerClass() {
  // --- PROPERTIES ---
  // -Super Constructor-
  EnemyClass.call(this);

  // -General-
  this.name = "Flyer";
  this.type = FLYER;

  // -Rendering-
  this.image = flyer_sheet;
  this.death_anim = FLYER_DIE;
  this.currentAnimation = "walk-down";
  this.animations = FRAME_DATA[FLYER];
  this.tile = TILE_FLYER;

  // -State-
  this.flight_state = ASCENDED;
  this.flight_dist = this.height;
  this.flight_time = 0;
  this.flight_speed = 0.02;
  this.flight_delay = 11;
  this.flight_amplitude = 15;
  this.flight_timer = new TimerClass(
    () => {
      this.changeFlightHeight();
    },
    50,
    this.flight_dist,
    true
  );
  this.shot_timer = new TimerClass(
    () => {
      this.shoot();
    },
    1000,
    3,
    false
  );
  this.alert_timer = new TimerClass(
    () => {
      this.stopAlert();
    },
    3000,
    1,
    true
  );

  // --- METHODS ---
  // -Life cycle methods-
  this.reset = function () {
    this.animator = new SpriteSheetAnimatorClass(this, 4);
    resetGameObject(this);
  };

  this.draw = function () {
    canvasContext.drawImage(
      shadow,
      this.x - this.width / 2,
      this.y + this.height
    );

    this.animator.animate(0, -1 * this.flight_dist);
  };

  // -State-
  this.whileAlerted = function () {
    // this.shot_timer.update();
    this.speed = 0;
    this.changeFlightHeight();
  };

  // -Combat-
  this.shoot = function () {
    var shot_buffer = 3;
    var spawn_x =
      (this.width + shot_buffer) * Math.cos((this.direction * Math.PI) / 180);
    var spawn_y =
      (this.height + shot_buffer) * Math.sin((this.direction * Math.PI) / 180);

    spawnBullet(this.x + spawn_x, this.y + spawn_y, this.direction, STUN);
    playSound(sounds.shoot);
  };

  // -Flight-
  this.changeFlightHeight = function () {
    this.flight_dist = getFlatArc(
      this.flight_time,
      this.flight_delay,
      this.flight_amplitude
    );
    this.flight_time += this.flight_speed;
  };

  this.animationHandler = function () {
    const pose = "walk";
    const direction = DIRECTION_MAP[this.direction];
    const animation = `${pose}-${direction}`;
    this.animator.setAnimation(animation);
  };

  this.stopAlert = function () {
    this.shot_timer.stop();
    this.flight_timer.stop();
    this.alert_timer.stop();
    this.state = MOVING;
    this.speed = 1;
  };
}
