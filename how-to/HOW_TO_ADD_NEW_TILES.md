# HOW TO ADD NEW TILES

### Step 1: Add a tile type to Constant.js
In `js/general/Constants.js`, create a constant with the name of your tile, following the conventions of the other tiles in the file. Each tile must be assigned a unique integer.

	const TILE_NEW = 20;

### Step 2: Add your tile image
For information on assigning your new tile an image, check the guide on loading new images in `how-to/HOW_TO_LOAD_IMAGES.md`

### Step 3: Add your tile to a level
In `js/game/Levels.js`, pick a level array and add in the number corresponding to your new tile type.

    const  level = [
    
    20,0,20,0,0,20,0,0,20,0,20,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    
    ];
If you run that level map, you should see your tile appear in-game at the same coordinates as its entry in the level array.

**Note:** Please be sure to not reformat the level arrays when saving the `Level.js` file. They're currently formatted in a way that matches the layout of the in-game level, which is helpful for testing/designing.

### Optional: Add transparency to your tile
If your tile image has any transparent elements, add the tile to the `tileTypeHasTransparency()` function in `World.js`.

	checkTileType == TILE_NEW
	
This will ensure that a floor tile is rendered underneath your new tile, so that the floor can be seen through any transparent parts.
