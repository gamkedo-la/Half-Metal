FlyerClass.prototype = new enemyClass();

function FlyerClass() {
  this.type = FLYER;
  this.tile = TILE_FLYER;
  this.hitbox_x = this.x;
  this.hitbox_y = this.y;
  this.hitbox_width = this.width;
  this.hitbox_height = this.height;
  this.flight_state = ASCENDED;
  this.flight_dist = this.height;
  this.image = flyer_sheet;
  this.currentAnimation = "walk-down";
  this.animations = {
    "walk-down": [
      { x: 0, y: 0, w: this.width, h: this.height },
      { x: 16, y: 0, w: this.width, h: this.height },
    ],
    "walk-up": [
      { x: 0, y: 16, w: this.width, h: this.height },
      { x: 16, y: 16, w: this.width, h: this.height },
    ],
    "walk-left": [
      { x: 0, y: 32, w: this.width, h: this.height },
      { x: 16, y: 32, w: this.width, h: this.height },
    ],
    "walk-right": [
      { x: 0, y: 48, w: this.width, h: this.height },
      { x: 16, y: 48, w: this.width, h: this.height },
    ],
  };
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

  // Behavior:
  // Player hits raycast - DONE
  // Flyer stops in place - DONE
  // Flyer lowers to ground - DONE
  // Flyer height = DESCENDED - DONE
  // Flyer shoots three shots in current direction - DONE
  // Flyer ASCENDEDs, height = ASCENDED - DONE
  // Check if still alerted, - DONE
  //  If alerted, repeat descent - DONE
  // Else, resume movement

  this.changeFlightHeight = function () {
    console.log("running changeFlightHeight");

    if (this.flight_state === ASCENDED) {
      this.flight_dist -= 1;
    }

    if (this.flight_state === DESCENDED) {
      this.flight_dist += 1;
    }
  };

  this.shoot = function () {
    var shot_buffer = 3;
    var spawn_x =
      (this.width + shot_buffer) * Math.cos((this.direction * Math.PI) / 180);
    var spawn_y =
      (this.height + shot_buffer) * Math.sin((this.direction * Math.PI) / 180);

    spawnBullet(this.x + spawn_x, this.y + spawn_y, this.direction, STUN);
  };

  this.reset = function () {
    this.animator = new SpriteSheetAnimatorClass(this, 4);
    resetGameObject(this);
  };

  this.alerted = function () {
    this.shot_timer.update();

    if (this.flight_state === ASCENDED) {
      this.flight_timer.start();
    }

    if (this.flight_dist <= 0) {
      this.flight_state = DESCENDED;
      this.flight_timer.stop();
      this.shot_timer.start();
    }

    if (this.flight_dist >= 16) {
      this.flight_state = ASCENDED;

      if (!this.checkIfPlayerIsInSight()) {
        this.stopAlert();
        return;
      }
    }

    if (this.shot_timer.finished) {
      this.flight_dist = 1;
      this.flight_timer.start();
      this.shot_timer.stop();
    }

    this.speed = 0;
  };

  this.draw = function () {
    canvasContext.drawImage(
      shadow,
      this.x - this.width / 2,
      this.y + this.flight_dist
    );
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

  this.stopAlert = function () {
    this.shot_timer.stop();
    this.flight_timer.stop();
    this.alert_timer.stop();
    this.state = MOVING;
    this.speed = 1;
  };
}
