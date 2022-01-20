function SpriteSheetAnimatorClass(game_object = {}, speed = 8) {
  this.currentAnimation = game_object?.currentAnimation;
  this.currentAnimationFrame = 0;

  this.animationFrameLimit = speed;
  this.animationFrameProgress = this.animationFrameLimit;

  this.animations = game_object?.animations;

  this.getFrame = function () {
    return this.animations[game_object?.currentAnimation][
      this.currentAnimationFrame
    ];
  };

  this.updateAnimationProgress = function () {
    //Downtick frame progress
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    //Reset the counter
    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.getFrame() === undefined) {
      this.currentAnimationFrame = 0;
    }
  };

  this.animate = function (offset_x = 0, offset_y = 0) {
    const { x, y, w, h } = this.getFrame();
    const offset = 10;
    canvasContext.save();
    // handy debug console spam
    // console.log("translating at", game_object.x, game_object.y);
    canvasContext.translate(game_object.x, game_object.y);
    canvasContext.rotate(0);
    canvasContext.drawImage(
      game_object.image,
      x,
      y,
      w,
      h,
      -game_object.width / 2 + offset_x,
      -game_object.height / 2 + offset_y,
      w,
      h
    );
    canvasContext.restore();

    this.updateAnimationProgress();
  };

  this.setAnimation = function (animation) {
    if (
      game_object.animations.hasOwnProperty(animation) &&
      game_object.currentAnimation !== animation
    ) {
      game_object.currentAnimation = animation;
      this.currentAnimationFrame = 0;
    }
  };
}
