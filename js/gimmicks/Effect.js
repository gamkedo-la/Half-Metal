function effectClass(x, y, img) {
    this.x = x;
    this.y = y;
    this.width = 16;
    this.height = 16;
    
    // use img if specified, otherwise assume wall destruction
    this.image = (img?img:wallDestructionSheet);

    this.animations = {
        "one": [{ x: 0, y: 0, w: 16, h: 16 },
        { x: 16, y: 0, w: 16, h: 16 },
        { x: 32, y: 0, w: 16, h: 16 },
        { x: 48, y: 0, w: 16, h: 16 },
        { x: 64, y: 0, w: 16, h: 16 },
        { x: 80, y: 0, w: 16, h: 16 },
        { x: 96, y: 0, w: 16, h: 16 },
        { x: 112, y: 0, w: 16, h: 16 },
        ]
      };

    this.animator = new SpriteSheetAnimatorClass(this, 2);
    this.currentAnimation = "one";

    this.removeSelf = function () {
        effects.splice(effects.indexOf(this), 1);
        delete this;
    };
    

    this.update = function() {
        // console.log("current animation is", this.animator.currentAnimationFrame);
        if (this.playedAnimation) {
          this.removeSelf();
        } else if (this.animator.currentAnimationFrame === 7) {
          this.playedAnimation = true;
        }
       
    };

    this.draw = function() {
      // console.log("doing animation at", this.x, this.y);
      this.animator.animate()
    };
}