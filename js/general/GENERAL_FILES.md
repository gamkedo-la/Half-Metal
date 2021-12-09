# GENERAL FILES

Here is a breakdown of the files in the js/general folder and their uses.

**Constants.js:** holds the constants for string values that are commonly used across the project. Use this file to enforce consistency and provide a single source for frequently used values (such as enemy states, ammo types, etc).

**GamepadSupport.js:** adds in support for controllers without needing to rewrite our keyoard code. No need to edit this file unless we really have to.

**GraphicsCommon.js:** contains common functions for rendering images and text. You'll typically use functions from here when writing code that goes in a Game Object's `draw()` method or when printing text to the canvas.

**ImageLoading.js:** contains the list of images to load on start up. If you need to add an image to the game, follow the pattern established in this file.

**Input.js:** sets up the events for listening to keyboard and mouse input. Also contains constants for key codes/mappings. Update `keySet()` in this file if you want to add a new control input for the player.

**MovementUtils.js:** a few common functions for moving Game Objects in specific directions. Functions in this file will normally be used in a Game Object's `move()` method.

**Ray.js:** holds a class for generating ray casts. Currently only used for helping enemies detect the player. Open to extension.

**SoundLoading.js:** essentially the sound version of `ImageLoading.js`. Add a sound to the `soundList` to load it into the game.

**SpriteSheetAnimator.js:** a class for animating the sprite sheets of Game Objects. Requires a Game Object be passed into it when instantiated. This code will be commonly used by classes in the `js/characters` folder. See `js/general/HOW_TO_ANIMATE.md` for more info.

**WebAudio.js:** initializes sound based on the player's browser. Not to be confused with `SoundLoading.js` (don't use `WebAudio.js` to add new sounds). Only modify this file if we have audio incompatibilities with some browsers.
