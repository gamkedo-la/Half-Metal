var world_grid = [];

function returnTileTypeAtColRow(col, row) {
  if (col >= 0 && col < WORLD_COLS && row >= 0 && row < WORLD_ROWS) {
    var worldIndexUnderCoord = rowColToArrayIndex(col, row);
    return world_grid[worldIndexUnderCoord];
  } else {
    return WORLD_WALL;
  }
}

function snapPixelCoordToTileCoord(px, py) {
  var worldCol = Math.floor(px / WORLD_W);
  var worldRow = Math.floor(py / WORLD_H);
  var x = worldCol * WORLD_W;
  var y = worldRow * WORLD_H;
  return { x: x, y: y };
}

function getTileIndexAtPixelCoord(atX, atY) {
  var world_col = Math.floor(atX / WORLD_W);
  var world_row = Math.floor(atY / WORLD_H);
  var world_index = rowColToArrayIndex(world_col, world_row);

  if (
    world_col >= 0 &&
    world_col < WORLD_COLS &&
    world_row >= 0 &&
    world_row < WORLD_ROWS
  ) {
    return world_index;
  } // end of valid col and row

  return undefined;
}

function getPixelCoordAtTileIndex(col, row) {
  var x = col * WORLD_W;
  var y = row * WORLD_H;
  return { x: x, y: y };
}

function rowColToArrayIndex(col, row) {
  return col + WORLD_COLS * row;
}

function arrayIndexToRowAndCol(index) {
  var row = Math.ceil((index + 1) / WORLD_COLS);
  var col = Math.ceil((index + 1) / row);

  return { row, col };
}

function drawWorld() {
  var array_index = 0;
  var draw_tile_x = 0;
  var draw_tile_y = 0;

  for (var each_row = 0; each_row < WORLD_ROWS; each_row++) {
    for (var each_col = 0; each_col < WORLD_COLS; each_col++) {
      // get index of current tile
      var array_index = rowColToArrayIndex(each_col, each_row);

      // get tile type at that index
      var tile_type = world_grid[array_index];

      // Get image associated with tile type
      var current_image = image_list.find((image) => image?.tile === tile_type);
      var ground_image = image_list.find(
        (image) => image?.tile === TILE_GROUND
      );

      // If no image is found, just render the ground tile
      if (!current_image) {
        current_image = ground_image;
      }

      // Draw image or ground tile underneath
      canvasContext.drawImage(ground_image?.var_name, draw_tile_x, draw_tile_y);
      canvasContext.drawImage(
        current_image?.var_name,
        draw_tile_x,
        draw_tile_y
      );

      draw_tile_x += WORLD_W;
      array_index++;
    }
    draw_tile_y += WORLD_H;
    draw_tile_x = 0;
  }
}

function drawTileset(level) {
  var array_index = 0;
  var draw_tile_x = 0;
  var draw_tile_y = 0;

  for (var each_row = 0; each_row < WORLD_ROWS; each_row++) {
    for (var each_col = 0; each_col < WORLD_COLS; each_col++) {
      // get index of current tile
      var array_index = rowColToArrayIndex(each_col, each_row);

      // get tile type at that index
      var tile_type = level.tile_map[array_index];

      // Search for row and col number within the tile map
      var row_num = 0;
      var col_num = 0;

      for (var i = 0; i <= tile_type; i++) {
        if (i > 0) {
          col_num++;
        }

        if (col_num >= TILE_COLS) {
          row_num++;
        }

        if (col_num >= TILE_COLS) {
          col_num = 0;
        }
      }

      // Draw the current tile
      canvasContext.drawImage(
        // Tileset image
        level.tileset,

        // Tile cut
        col_num * TILE_WIDTH, // x
        row_num * TILE_HEIGHT, // y
        TILE_WIDTH, // w
        TILE_HEIGHT, // h

        // Canvas
        // Include buffer space between grid elements
        draw_tile_x, // x
        draw_tile_y, // y
        TILE_WIDTH, // w
        TILE_HEIGHT // h
      );

      draw_tile_x += WORLD_W;
      array_index++;
    }
    draw_tile_y += WORLD_H;
    draw_tile_x = 0;
  }
}
