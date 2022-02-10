const HUNTER_BOT_MOVEMENT_SPEED = 1.0;

function HunterClass() {
  EnemyClass.call(this);
  this.myTileKind = TILE_HUNTER;
  this.type = HUNTER;
  this.x = 75;
  this.y = 75;
  this.speedX = HUNTER_BOT_MOVEMENT_SPEED;
  this.speedY = HUNTER_BOT_MOVEMENT_SPEED;
  this.width = 14;
  this.height = 26;
  this.image = hunterSheet;
  this.angleMovement = 0;
  this.currentLevel = [];
  this.hitbox_x = this.x;
  this.hitbox_y = this.y;
  this.hitbox_width = this.width;
  this.hitbox_height = this.height;
  this.searching = true;

  this.animations = FRAME_DATA[HUNTER];
  this.currentAnimation = "walk-up";
  this.animator = new SpriteSheetAnimatorClass(this, 5);

  // Pathfinding
  this.open_list = [];
  this.closed_list = [];
  this.grid = [];
  this.node = {
    pos: { x: 0, y: 0 },
    f: 0,
    h: 0,
    g: 0,
    is_wall: false,
    is_player: false,
  };
  this.current_path_node = 0;
  this.path = [];
  this.move_timer = 0;

  // Create a grid of nodes for pathfinding traversal
  this.createGrid = function (rows, cols) {
    this.grid.length = 0;

    for (var i = 0; i < rows; i++) {
      this.grid.push([]);
      for (var j = 0; j < cols; j++) {
        var new_node = JSON.parse(JSON.stringify(this.node));
        new_node.pos.x = j;
        new_node.pos.y = i;

        if (this.isWall(new_node)) {
          new_node.is_wall = true;
        }

        if (this.isPlayer(new_node)) {
          new_node.is_player = true;
        }

        this.grid[i].push(new_node);
      }
    }
  };

  this.getNodeCoordinates = function (node) {
    const { y: row, x: col } = node.pos;
    return getPixelCoordAtTileIndex(col, row);
  };

  this.getGridRowAndCol = function (x, y) {
    var col = Math.floor(x / WORLD_W);
    var row = Math.floor(y / WORLD_H);
    return { row, col };
  };

  this.followPath = function () {
    const lerp = (start, end, percent) => start * (1 - percent) + end * percent;

    if (this.path.length > 0 && this.path[this.current_path_node]) {
      // Move from either the original starting position or the most recently traveled node
      const start_node = this.getNodeCoordinates(
        this.current_path_node === 0
          ? this.getStartNode()
          : this.path[this.current_path_node - 1]
      );

      // Get the next node to traverse
      const next_node = this.getNodeCoordinates(
        this.path[this.current_path_node]
      );

      // Interpolate between starting position and next node positon
      this.x = lerp(start_node.x, next_node.x, this.move_timer);
      this.y = lerp(start_node.y, next_node.y, this.move_timer);

      // Lerping stops when move_timer = 1
      this.move_timer += 0.01;
    }

    const grid_pos = this.getGridRowAndCol();
    const target_node = this.path[this.current_path_node];

    if (
      grid_pos &&
      target_node &&
      grid_pos.x === target_node.x &&
      grid_pos.y === target_node.y
    ) {
      console.log("Reached node");
      this.current_path_node = 0;
      this.searching = true;
    }

    // When the hunter reaches the target node, reset the move timer and get the next node
    if (this.move_timer > 1) {
      this.move_timer = 0;
      this.current_path_node++;
    }
  };

  this.findPathToPlayer = function (start, end) {
    var open_list = [];
    var closed_list = [];
    open_list.push(start);

    while (open_list.length > 0) {
      var low_index = 0;
      // Get node with lowest f(x) to process the next node
      for (var i = 0; i < open_list.length; i++) {
        if (open_list[i].f < open_list[low_index].f) {
          low_index = i;
        }
      }

      var current_node = open_list[low_index];

      // Early exit
      if (current_node.pos === end.pos) {
        var curr = current_node;
        var ret = [];

        while (curr.parent) {
          ret.push(curr);
          curr = curr.parent;
        }

        ret.sort(function (a, b) {
          return a.f > b.f ? 1 : -1;
        });

        // Remove excess nodes with high f scores
        var player_node = ret.find((node) => node.is_player);
        var player_node_index = ret.indexOf(player_node);

        if (player_node_index !== -1) {
          ret = ret.slice(0, player_node_index);
        }

        // Return path to player
        return ret;
      }

      // Examine neighbors of current node
      var current_index = open_list.indexOf(current_node);
      open_list.splice(current_index, 1);
      closed_list.push(current_node);
      var neighbors = this.getNeighbors(current_node);

      for (var i = 0; i < neighbors.length; i++) {
        var neighbor = neighbors[i];

        if (closed_list.includes(neighbor) || neighbor.is_wall) {
          // invalid node, move to next neighbor
          continue;
        }

        var g_score = current_node.g + 1;
        var best_gscore = false;

        if (!open_list.includes(neighbor)) {
          best_gscore = true;
          neighbor.h = this.distanceToTarget(neighbor.pos, end.pos);
          open_list.push(neighbor);
        } else if (g_score < neighbor.g) {
          best_gscore = true;
        }

        if (best_gscore) {
          neighbor.parent = current_node;
          neighbor.g = g_score;
          neighbor.f = neighbor.g + neighbor.h;
        }
      }
    }

    // Return empty array if no path is found
    return [];
  };

  this.distanceToTarget = function (pos0, pos1) {
    // Manhattan distance
    var d1 = Math.abs(pos1.x - pos0.x);
    var d2 = Math.abs(pos1.y - pos0.y);
    return d1 + d2;
  };

  this.getNeighbors = function (node) {
    var ret = [];
    var x = node.pos.x;
    var y = node.pos.y;

    if (this.grid[y - 1] && this.grid[y - 1][x]) {
      ret.push(this.grid[y - 1][x]);
    }
    if (this.grid[y + 1] && this.grid[y + 1][x]) {
      ret.push(this.grid[y + 1][x]);
    }
    if (this.grid[y] && this.grid[y][x - 1]) {
      ret.push(this.grid[y][x - 1]);
    }
    if (this.grid[y] && this.grid[y][x + 1]) {
      ret.push(this.grid[y][x + 1]);
    }
    return ret;
  };

  this.isWall = function (node) {
    const { x, y } = node.pos;
    const found_wall = walls.find((w) => {
      let grid_coords = this.getGridRowAndCol(w.x, w.y);
      return grid_coords.col === x && grid_coords.row === y;
    });

    return found_wall;
  };

  this.isPlayer = function (node) {
    // Row and col where node is located
    const { x: col, y: row } = node.pos;

    // Row and col of hunter
    var player_col = Math.floor(player.x / WORLD_W);
    var player_row = Math.floor(player.y / WORLD_H);

    if (row === player_row && col === player_col) {
      return true;
    }

    return false;
  };

  this.getPlayerNode = function () {
    for (var i = 0; i < this.grid.length; i++) {
      for (var j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j].is_player) {
          return this.grid[i][j];
        }
      }
    }
  };

  this.getStartNode = function () {
    for (var i = 0; i < this.grid.length; i++) {
      for (var j = 0; j < this.grid[i].length; j++) {
        // Row and col where node is located
        const { x: col, y: row } = this.grid[i][j].pos;

        // Row and col of hunter
        var hunter_col = Math.floor(this.x / WORLD_W);
        var hunter_row = Math.floor(this.y / WORLD_H);

        if (row === hunter_row && col === hunter_col) {
          return this.grid[i][j];
        }
      }
    }
  };

  this.move = function () {
    if (this.searching) {
      // Organize game world into a grid of nodes
      this.createGrid(WORLD_ROWS, WORLD_COLS);

      // Determine start and end nodes within the grid
      const start_node = this.getStartNode();
      const goal_node = this.getPlayerNode();

      if (start_node && goal_node) {
        // Construct the path of nodes to traverse toward the player
        this.path = this.findPathToPlayer(start_node, goal_node);
      }

      this.searching = false;
    }

    // Follow the constructed path
    this.followPath();

    // Keep hitboxes in line with character movement
    this.updateHitBoxes();
  };

  this.draw = function () {
    // Render path
    this.path.forEach((node) => {
      // Row and col where node is located
      const { x: col, y: row } = node.pos;

      // Actual x/y coordinates of node
      const coords = getPixelCoordAtTileIndex(col, row);

      // Image for path representation
      canvasContext.drawImage(shot_img, coords.x + 4, coords.y + 4, 8, 8);
    });

    //   Set animation frame to render
    this.animationHandler();

    // Setup drawing for line of sight
    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = "red";
    canvasContext.beginPath();
    canvasContext.moveTo(this.x, this.y);

    //
    this.rays.forEach(function (ray) {
      ray.draw();
    });

    // Draw line of sight to the farthest ray cast (i.e, the earliest in the list)
    const last_ray = this.rays[0];
    if (last_ray) {
      canvasContext.lineTo(
        last_ray.x + last_ray.width / 2,
        last_ray.y + last_ray.height / 2
      );
    }
    canvasContext.stroke();

    // Update sprite animation
    this.animator.animate();

    // Render hitbox for debugging
    if (this.render_hitbox) {
      this.hitboxes.forEach(function (hitbox) {
        canvasContext.fillStyle = hitbox.color;
        canvasContext.fillRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);
      });
    }
  };
}
