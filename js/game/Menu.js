function MenuClass(config) {
  // PROPERTIES
  // -General-
  this.buttons = config.buttons || [];
  this.name = config.name || "Menu";

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

  // METHODS
  // -Life cycle methods
  this.draw = function () {
    // BG
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, this.width, this.height);

    // MENU NAME
    renderFont(this.name, this.width / 2, 30);

    // IMAGE
    if (this.image) {
      canvasContext.drawImage(this.image, 0, 0, this.width, this.height);
    }

    // BUTTONS
    this.buttons.forEach((button) => {
      button.draw();
    });
  };

  this.update = function () {
    this.buttons.forEach((button, index) => {
      button.x = this.button_start.x;
      button.y = this.button_start.y + button.height * index;
      button.active = true;
    });
  };

  this.deactivateMenuButtons = function () {
    this.buttons.forEach((button) => (button.active = false));
  };
}
