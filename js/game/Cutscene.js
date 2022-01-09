const TEXT_SPEED = 12;

function CutsceneClass(dialogue = [""]) {
  this.dialogue = dialogue;
  this.current_line = 0;
  this.current_char = 0;
  this.revealed_chars = [];
  this.x = 0;
  this.y = 0;
  this.text_timer = TEXT_SPEED;
  this.key_next_held = false;
  this.line_complete = false;

  this.draw = function () {
    //   BG
    colorRect(0, this.y, 512, 512, "black");

    // TEXT + BORDER
    colorRect(this.x + 14, this.y + 159, 228, 52, "white");
    colorRect(this.x + 15, this.y + 160, 226, 50, "black");
    renderFont(this.revealed_chars, this.x + 20, this.y + 168);
  };

  this.checkForInput = function () {
    if (this.key_next_held) {
      this.goToNextLine();
    }
  };

  this.goToNextLine = function () {
    //   If we're in the middle of a line, skip to the end of it
    if (
      this.revealed_chars.length !== this.dialogue[this.current_line].length &&
      !this.line_complete
    ) {
      this.revealed_chars.length = 0;
      for (var i = 0; i < this.dialogue[this.current_line].length; i++) {
        this.revealed_chars[i] = this.dialogue[this.current_line][i];
      }
      this.key_next_held = false;
      this.line_complete = true;
      return;
    }

    //   Reset line properties
    this.current_line++;
    this.revealed_chars.length = 0;
    this.current_char = 0;
    this.key_next_held = false;
    this.line_complete = false;

    //   Check if we're at the last line of dialogue
    if (this.current_line > this.dialogue.length - 1) {
      this.current_line--;
      this.revealed_chars.length = 0;
      this.current_char = 0;

      //   Exit cutscene
      currentMode = PLAY_MODE;
    }
  };

  this.progressText = function () {
    //   If we're at the beginning of a dialogue sequence, don't increment the char value
    if (this.revealed_chars.length !== 0) {
      this.current_char++;
    }

    //   If we've exhausted all the characters in this line, let the user move to the next line
    if (
      this.current_char > this.dialogue[this.current_line].length - 1 ||
      this.line_complete
    ) {
      this.checkForInput();
      return;
    }

    //   Get next character in the current line
    var next_char = this.dialogue[this.current_line][this.current_char];

    //   Skips the wait time for spaces in dialogue. Keeps the text from feeling slow/choppy
    if (next_char === " ") {
      this.revealed_chars.push(next_char);
      this.current_char++;
      next_char = this.dialogue[this.current_line][this.current_char];
    }

    this.revealed_chars.push(next_char);
  };

  this.update = function () {
    //   Check if the user wants to go to next line or skip to the end of the current line
    this.checkForInput();

    //   Gradually reveal text
    this.text_timer -= 1;
    if (this.text_timer <= 0) {
      this.progressText();
      this.text_timer = TEXT_SPEED;
    }
  };
}
