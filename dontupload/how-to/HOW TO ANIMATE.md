
# SPRITESHEET ANIMATION IN HALF-METAL

  

For animations that are based on sprite sheets, we'll use a specific class called `SpriteSheetAnimatorClass` (found in the `js/general` folder).

  

## Setting up the animation

  

To use the animator class, your Game Object will need 3 properties: `animator`, `animations`, and `currentAnimation`.

  

**Example:**

  

     function characterClass() {
        
        this.image = mySpritesheet;
    
        this.animations = {
        
        "standing": [{x: 0, y: 0, h: 16, w: 16}] // location of a frame
        
        };
    
	    this.currentAnimation = "standing";
    
	    this.animator = new SpriteSheetAnimator(this);
    
    }

  

Here's a quick breakdown of these properties:

  

-  **this.animations:** This map pairs a string name (e.g., "standing") with an array of frame coordinates.

  

-  **this.currentAnimation:** A string indicating which animation to play

  

-  **this.animator:** The SpriteSheetAnimatorClass that will carry out the actual animation

  

## Calling the animation

  

Finally, in your game object's draw method, call this animator's animation method:

  

    this.draw = function() {
   
	    this.animator.animate();
    
    }

  

## Configurations

  
If you need to change the speed of your animations, you can pass in an integer to the animator like so:

  

    this.animator = new SpriteSheetAnimatorClass(this, 10);`

  

You can also update the animator manually by changing its `animationFrameLimit` property:

  

    this.animator.animationFrameLimit = 10;

  

A higher number will make the animation slower (takes more time to complete each frame).