# LEVEL EDITING IN HALF-METAL

## TERMS

- Toolbar - Buttons for saving, loading, playing and creating a new level. Located at the top of the editor

- Tileset Palette - Contains all available tiles for the current tileset. Placed at the bottom of the editor

- Asset Menu - Holds the sub-menus for all Game Object types. Also includes buttons for random level generation and switching tilesets

## ACTIONS

- Select a Game Object - Click on an object name in the Asset Menu

- Select a Tile - Click on a tile in the Tileset Palette at the bottom of the editor

- Place a Game Object or Tile - Click where you want to place your selected asset

- Change Tilesets - Select "TILES" in the Asset Menu and click the name of your desired tileset

- Save Level - Click "Save" in the Toolbar to see the level JSON output in the console _ window. Copy this data to the appropriate level file (e.g., copy data for a cell level _ to the array in `js/CellLevelData.js`)

- Load Level - (Not yet available)

- Generate Level - Click "RANDOM" in the Asset Menu to generate a new level. Note: this feature still has some bugs.

## CONTROLS

- Switch to Play Mode - L key

- Delete a Game Object or Tile - X key (while cursor is on top of the asset to be deleted)

- Undo - U key

- Redo - R key

## BUGS

There are some editor bugs noted in the `bug-log.md` file. If you are encountering any unknown bugs when using the editor, please add them to the bug log and we'll either fix it or create a workaround as soon as possible.
