const HUNTER_BOT_MOVEMENT_SPEED = 1.0;

function HunterClass() {
  EnemyClass.call(this);
  this.myTileKind = TILE_HUNTER;
  this.type = HUNTER;
  this.x = 75;
  this.y = 75;
  this.speedX = HUNTER_BOT_MOVEMENT_SPEED;
  this.speedY = HUNTER_BOT_MOVEMENT_SPEED;
  this.velX = 1;
  this.velY = 2;
  this.width = 14;
  this.height = 26;
  this.image = hunterSheet;
  this.angleMovement = 0;
  this.currentLevel = [];
  this.pathMap = [];
  this.hitbox_x = this.x;
  this.hitbox_y = this.y;
  this.hitbox_width = this.width;
  this.hitbox_height = this.height;

  this.animations = FRAME_DATA[HUNTER];
  this.currentAnimation = "walk-up";
  this.animator = new SpriteSheetAnimatorClass(this, 5);

  // Pathfinding
  this.open_list = [];
  this.closed_list = [];
  this.grid = [];
  this.player_location = { x: 0, y: 0 };
  this.node = {
    pos: { x: 0, y: 0 },
    f: 0,
    h: 0,
    g: 0,
    is_wall: false,
    is_player: false,
  };
  this.path = [];

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

        this.grid.push(new_node);
      }
    }
  };

  this.followPath = function () {};

  this.findPathToPlayer = function (start, end) {
    var open_list = [];
    var closed_list = [];
    open_list.push(start);

    while (open_list.length > 0) {
      var low_index = 0;
      // Grab node with lowest f(x) to process the next node
      for (var i = 0; i < open_list.length; i++) {
        if (open_list[i].f < open_list[low_index].f) {
          low_index = i;
        }
      }
      var current_node = open_list[low_index];

      // Early exit
      if ((current_node.pos = end.pos)) {
        var curr = currentNode;
        var ret = [];

        while (curr.parent) {
          ret.push(curr);
          curr = curr.parent;
        }

        return ret.reverse();
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
          neighbor.h = this.distanceToTarget(
            neighbor.pos,
            this.player_location
          );
          open_list.push(neighbor);
        } else if (g_score < neighbor.g) {
          best_gscore = true;
        }

        if (best_gscore) {
          neighbor.parent = current_node;
          neighbor.g = g_score;
          neighbor.f = neighbors.g + neighbor.h;
        }

        // Return empty array if no path is found
        return [];
      }
    }
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

    if (this.grid[x - 1] && this.grid[x - 1][y]) {
      ret.push(this.grid[x - 1][y]);
    }
    if (this.grid[x + 1] && this.grid[x + 1][y]) {
      ret.push(this.grid[x + 1][y]);
    }
    if (this.grid[x][y - 1] && this.grid[x][y - 1]) {
      ret.push(this.grid[x][y - 1]);
    }
    if (this.grid[x][y + 1] && this.grid[x][y + 1]) {
      ret.push(this.grid[x][y + 1]);
    }
    return ret;
  };

  this.isWall = function (node) {
    const { x, y } = node.pos;
    const coordinates = getPixelCoordAtTileIndex(x, y);
    const found_wall = walls.find(
      (w) => w.x === coordinates.x && w.y === coordinates.y
    );

    return found_wall;
  };

  this.isPlayer = function (node) {
    // Row and col where node is located
    const { x: col, y: row } = node.pos;

    // Actual x/y coordinates of node
    const coords = getPixelCoordAtTileIndex(col, row);

    // Check if coords are near player
    return (
      coords.x < player.x + player.w &&
      coords.x > player.x &&
      coords.y < player.y + player.h &&
      coords.y > player.y
    );
  };
}
