function TutorialPromptClass(config = {}) {
  //   PROPERTIES
  // -Content-
  this.prompt = config?.prompt || "";

  // -Dimensions/Position-
  this.background_width = this.prompt.length * 10;
  this.background_height = config?.background_height || 30;
  this.x = config?.x || 0;
  this.y = config?.y || 0;
  this.x_buffer = this.x + 6;
  this.text_height = this.y + this.background_height / 2 - 5;

  // -Level/control check-
  this.control = config?.control || "";
  this.level_name = config?.level_name || "1-1";

  // -Rendering-
  this.render_prompt = config?.render_prompt || true;

  // METHODS
  this.update = function () {
    // Check if the player has accomplished this step of the tutorial
    if (this.keys_to_check.includes(true)) {
      this.render_prompt = false;
    }
  };

  this.draw = function () {
    if (this.render_prompt && level.name === this.level_name) {
      colorRect(
        this.x,
        this.y,
        this.background_width,
        this.background_height,
        "black"
      );
      renderFont(
        this.prompt,
        this.x + this.x_buffer,
        this.y + this.text_height
      );
    }
  };
}
