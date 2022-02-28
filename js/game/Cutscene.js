const TEXT_SPEED = 8;

function CutsceneClass(dialogue = [""]) {
  this.dialogue = dialogue;
  this.current_line = 0;
  this.current_char = 0;
  this.revealed_chars = [];
  this.revealed_line = [];
  this.x = 0;
  this.y = 0;
  this.text_timer = TEXT_SPEED;
  this.key_next_held = false;
  this.line_complete = false;
  this.max_line_width = 180;
  this.char_width = 8;
  this.cutscene_started = false;
  this.song = "intro_music";
  this.is_intro = true;
  this.is_outro = false;
  this.is_credits = false;
  this.beats = [];
  this.current_image = null;
  this.key_skip_held = false;

  this.draw = function () {
    //   BG
    colorRect(0, this.y, 512, 512, "black");

    // TEXT + BORDER
    colorRect(this.x + 14, this.y + 159, 228, 52, "white");
    colorRect(this.x + 15, this.y + 160, 226, 50, "black");
    renderFont(this.revealed_chars, this.x + 20, this.y + 165);

    // IMAGE
    if (this.current_image) {
      canvasContext.drawImage(this.current_image, 0, 0);
    }

    // PROMPTS
    renderFont("SKIP: ENTER", this.x + 20, this.y + 224);
    renderFont("PROGRESS: X", this.x + 140, this.y + 224);
  };

  this.checkForInput = function () {
    if (this.key_next_held) {
      this.goToNextLine();
    }

    if (this.key_skip_held) {
      this.endCutscene();
      this.key_skip_held = false;
    }
  };

  this.checkForNewImage = function () {
    this.beats.forEach((beat) => {
      if (beat.index === this.current_line) {
        this.current_image = beat.image;
      }
    });
  };

  this.goToNextLine = function () {
    //   If we're in the middle of a line, skip to the end of it
    if (
      this.revealed_chars.length !== this.dialogue[this.current_line].length &&
      !this.line_complete
    ) {
      this.revealed_chars.length = 0;
      this.revealed_line.length = 0;
      for (var i = 0; i < this.dialogue[this.current_line].length; i++) {
        this.revealed_chars.push(this.dialogue[this.current_line][i]);
        this.revealed_line.push(this.dialogue[this.current_line][i]); // used to track text line length
      }
      this.key_next_held = false;
      this.line_complete = true;
      playSound(sounds.text);
      return;
    }

    //   Reset line properties
    this.current_line++;
    this.revealed_chars.length = 0;
    this.revealed_line.length = 0;
    this.current_char = 0;
    this.key_next_held = false;
    this.line_complete = false;

    //   Check if we're at the last line of dialogue
    if (this.current_line > this.dialogue.length - 1) {
      this.endCutscene();
    }
  };

  this.endCutscene = function () {
    if (this.is_credits) {
      return;
    }

    this.current_line = 0;
    this.revealed_chars.length = 0;
    this.revealed_line.length = 0;
    this.current_char = 0;
    this.text_timer = TEXT_SPEED;
    this.line_complete = false;
    

    if (this.is_intro) {
      currentMode = MENU_MODE;
      this.is_intro = false;
      stopMusic();
      return;
    }

    if (this.is_outro) {
      // Go to credits after final scene
      const current_scene = SCENES.find(
        (scene) => scene.id === "credits_scene"
      );
      stopMusic();
      this.dialogue = current_scene.lines;
      this.song = current_scene.song;
      this.beats = current_scene.beats;
      this.current_line = 0;
      this.current_char = 0;
      currentMode = CUTSCENE_MODE;
      this.is_credits = true;
      enemies.length = 0;
      return;
    }

    stopMusic();
    currentMode = PLAY_MODE;
  };

  this.progressText = function () {
    if (!this.dialogue[this.current_line]) {
      return;
    }

    //   If we're at the beginning of a dialogue sequence, don't increment the char value
    if (this.revealed_chars.length !== 0) {
      this.current_char++;
    }

    //   If we've exhausted all the characters in this line, let the user move to the next line
    if (
      this.dialogue[this.current_line] &&
      (this.current_char > this.dialogue[this.current_line].length - 1 ||
        this.line_complete)
    ) {
      this.checkForInput();
      return;
    }

    //   Get next character in the current line
    var next_char = this.dialogue[this.current_line][this.current_char];

    //   Skips the wait time for spaces in dialogue. Keeps the text from feeling slow/choppy
    if (next_char === " ") {
      this.revealed_chars.push(next_char);
      this.revealed_line.push(next_char);
      this.current_char++;
      next_char = this.dialogue[this.current_line][this.current_char];
    }

    this.revealed_chars.push(next_char);
    this.revealed_line.push(next_char);

    playSound(sounds.text);
  };

  this.update = function () {
    //   Check if the user wants to go to next line or skip to the end of the current line
    this.checkForInput();

    // Check if we need to display a new image at this point in the cutscene
    this.checkForNewImage();

    //   Gradually reveal text
    this.text_timer -= 1;
    if (this.text_timer <= 0) {
      this.progressText();
      this.text_timer = TEXT_SPEED;
    }
  };
}
