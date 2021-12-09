# WHAT ARE GAME OBJECTS?

For the purposes of _Half-Metal_, our documents refer to all characters, hazards, ammo types, and walls as 'Game Objects'. Essentially, a Game Object is any interactable _thing_ that appears in the game.

All Game Objects have a common set of methods and properties that you can expect to use over and over.

**An Important Note:**
There is no parent `GameObject` class, so these properties aren't guaranteed to be on every Game Object.

Instead, there are distinct Game Object types (`ENEMY`, `PLAYER`, `AMMO`, `WALL`, `HAZARD`) and each type comes with a base prototype from which Objects of that type will inherit (e.g.. the Leaper enemy inherits the `EnemyClass` prototype).

This decision was made so that we don't end up with an inheritance tree that is several layers deep and difficult to modify. This way, we can let each Game Object type remain its own thing while still leveraging the advantages of inheritance.

## Properties

- **x and y:** the X and Y coordinates of the object on the canvas (unscaled).
- **height and width:** the unscaled size of the object (in pixels). Used for determining the size of hitboxes and some animation frames.
- **image:** the image or sprite sheet of the object. Necesary for drawing animations.
- **direction:** the object's current direction of travel (in degrees). Refer to the `DIRECTION_MAP` in `js/general/Constants.js` to easily tell which number maps to which direction.
- **state:** designates the current state of the object. Objects will have different states depending on their type (for example, the player can be `MOVING`, `SHOOTING`, or `IDLE`). Add new states to `js/general/Constants.js`.
- **animations:** a map of all animations for the object. Animations are identified by a string and contain an array of frame coordinates/dimensions.
- **currentAnimation:** a string that holds the name of which animation should currently play
- **animator:** an instance of SpriteSheetAnimatorClass that handles all animation for a Game Object. See `how-to/HOW_TO_ANIMATE.md` for more details.

## Methods

- **update():** handles the general game logic of updating the object's properties each frame.
- **move():** handles the object's movement. Will normally check for which tiles are at the object's coordinates to determine collision.
- **draw():** renders the object or other visual effects. Normall call this.animator.animate() to animate the object's sprite sheet.
- **reset():** essentially "restarts" the object for when the room reloads. Sets the object back to its original position/state.
- **checkIfOutOfBounds():** checks if the object's position is out of the level boundaries.
- **removeSelf():** removes the object from the scene (normally stored in an array of objects of the same type). Deletes the object instance. Usually called in `this.checkIfOutOfBounds()`.
