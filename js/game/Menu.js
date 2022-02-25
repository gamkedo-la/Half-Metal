function MenuClass(config) {
  // PROPERTIES
  // -General-
  this.buttons = config.buttons || [];
  this.name = config.name || "Menu";
  this.cursor = 0;

  // -Rendering-
  this.width = config.width || 256;
  this.height = config.height || 240;
  this.image = config.image || null;
  this.button_start = {
    x: config.button_start_x || 0,
    y: config.button_start_y || 0,
  };
  this.button_buffer = config.button_buffer || 5;
  this.show_name = config.show_name || false;
  this.forceLastButton = config.forceLastButton || false;

  // -Divisions-
  this.quadrants = [];

  // METHODS

  // -Divisions-
  this.getQuadrants = function () {
    var quadrant = {
      width: this.width / 2,
      height: this.height / 2,
      x: 0,
      y: 0,
    };

    var top_left = { ...quadrant };

    var top_right = { ...quadrant };
    top_right.x = this.width / 2;

    var bottom_left = { ...quadrant };
    bottom_left.y = this.height / 2;

    var bottom_right = { ...quadrant };
    bottom_right.x = this.width / 2;
    bottom_right.y = this.height / 2;

    return [top_left, top_right, bottom_left, bottom_right];
  };

  this.renderExtraText = function () {
    // Override in subclasses
  };

  // -Life cycle methods
  this.draw = function () {
    // BG
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, this.width, this.height);

    // MENU NAME
    if(this.show_name) {
      var name_width = this.name.length * 8;
      renderFont(this.name, this.width / 2 - name_width / 2, 30);
    }

    // IMAGE
    if (this.image) {
      canvasContext.drawImage(this.image, 0, 0, this.width, this.height);
    }

    // BUTTONS
    this.buttons.forEach((button, i) => {
      if (i === this.cursor) {
        canvasContext.fillStyle = "#b21030";
        canvasContext.fillRect(button.x - 12, button.y + 2, 8, 8);
      }
      button.draw();
    });

    // EXTRA TEXT
    this.renderExtraText();
  };

  this.updateCursor = function () {
    // For menu navigation with gamepad
    if (key_up_held || key_left_held) {
      this.cursor--;
      if (this.cursor <= 0) {
        this.cursor = 0;
      }

      key_up_held = false;
      key_left_held = false;

      console.log("CURSOR: ", this.cursor);
    }

    if (key_down_held || key_right_held) {
      this.cursor++;
      if (this.cursor >= this.buttons.length - 1) {
        this.cursor = this.buttons.length - 1;
      }

      key_down_held = false;
      key_left_held = false;

      console.log("CURSOR: ", this.cursor);
    }

    if(this.forceLastButton) {
      this.cursor = this.buttons.length - 1;
    }

    // Activate button handler when pressing select button
    if (key_X_held) {
      const current_button = this.buttons[this.cursor];
      current_button.handler();
      key_X_held = false;
    }

    // Go back to previous menu
    if (key_space_held) {
      key_space_held = false;
      menu_stack.pop();
    }    
  };

  this.update = function () {
    this.updateCursor();
    this.buttons.forEach((button, index) => {
      button.x = this.button_start.x;
      button.y = this.button_start.y + button.height * index;
      button.active = true;
    });
  };

  // -Rendering-
  this.renderQuadrantBorders = function () {
    this.quadrants.forEach((quadrant) => {
      canvasContext.fillStyle = "white";
      canvasContext.fillRect(
        quadrant.x,
        quadrant.y,
        quadrant.width,
        quadrant.height
      );
      canvasContext.fillStyle = "black";
      canvasContext.fillRect(
        quadrant.x + 1,
        quadrant.y + 1,
        quadrant.width - 2,
        quadrant.height - 2
      );
    });
  };

  // -Button State-
  this.deactivateMenuButtons = function () {
    this.buttons.forEach((button) => (button.active = false));
  };
}
