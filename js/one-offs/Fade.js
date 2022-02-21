function FadeClass(config) {
  // Properties
  this.opacity = config?.opacity || 1;
  this.animation = config?.animation || "fade-in";
  this.color = config?.color || "0, 0, 0";
  this.fade_rate = config?.fade_rate || 0.06;
  this.width = 256;
  this.height = 240;
  this.animation_lookup = {
    "fade-in": {
      starting_opacity: 1,
      target_opacity: 0,
    },
    "fade-out": {
      starting_opacity: 0,
      target_opacity: 1,
    },
  };

  this.lerpFade = function (x, y, a) {
    return x * (1 - a) + y * a;
  };

  // Methods
  this.onFadeComplete =
    config?.onFadeComplete ||
    function () {
      console.log("FADE COMPLETE");
      this.removeSelf();
    };

  this.removeSelf = function () {
    var index = effects.indexOf(this);
    effects.splice(index, 1);
    delete this;
  };

  this.update = function () {
    const target_opacity = this.animation_lookup[this.animation].target_opacity;
    this.opacity = this.lerpFade(this.opacity, target_opacity, this.fade_rate);

    this.fade_rate += Math.random() * 0.1;

    if (this.fade_rate >= 1) {
      this.onFadeComplete();
    }
  };

  this.draw = function () {
    canvasContext.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    canvasContext.fillRect(0, 0, this.width, this.height);
  };
}
