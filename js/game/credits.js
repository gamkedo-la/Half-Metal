var creditsList = [
"Michael Monty Tanner: Project lead, core gameplay, level design, player sprite, decoration tiles, enemy AI, hazards, UI, music (intro / title screen), Flyer and Leaper enemies, collision code, tutorial, cutscenes, asset integration, electric wall fix, pathfinding, level menu, speedrun mode, volume sliders, title screen art, additional sound effects (menus, shots, destruction, pickups, leaper), tuning, transition effects, bug fixes, team internal documentation",
"Rodrigo Bonzerr Lopez: Hunter bot (art and code), Blocker enemy art, blocker bullet, background sound, courtyard music, ending music, turret sound, assorted bug fixing",
"Cooper Willis: Music (prison, processing, armory), tile destruction effects (window, prototype for wall), editor undo/redo",
"Christer \"McFunkypants\" Kaitila: Enemy explosions, gamepad support, additional key controls, test level generation",
"Raik Gunnar Bradley: Options menu, credits screen",
"Brian J. Boucher: Music track, alternate player movement prototype",
"Ryan Kevin Atienza: Sounds for electronic wall and window break",
"Kevin Rangel: Fixed Linux compatibility issue",
" ",
"Developed in HomeTeamGameDev.com Lighthouse"
];

function lineWrapCredits() { // note: gets calling immediately after definition!
  const newCut = [];
  var maxLineChar = 61;
  var findEnd;

  for(let i = 0; i < creditsList.length; i++) {
    const currentLine = creditsList[i];
    for(let j = 0; j < currentLine.length; j++) {
      /*const aChar = currentLine[j];
      if(aChar === ":") {
        if(i !== 0) {
          newCut.push("\n");
        }

        newCut.push(currentLine.substring(0, j + 1));
        newCut.push(currentLine.substring(j + 2, currentLine.length));
        break;
      } else*/ if(j === currentLine.length - 1) {
        if((i === 0) || (i >= creditsList.length - 2)) {
          newCut.push(currentLine);
        } else {
          newCut.push(currentLine.substring(0, currentLine.length));
        }
      }
    }
  }

  const newerCut = [];
  for(var i=0;i<newCut.length;i++) {
    while(newCut[i].length > 0) {
      findEnd = maxLineChar;
      if(newCut[i].length > maxLineChar) {
        for(var ii=findEnd;ii>0;ii--) {
          if(newCut[i].charAt(ii) == " ") {
            findEnd=ii;
            break;
          }
        }
      }
      newerCut.push(newCut[i].substring(0, findEnd));
      newCut[i] = newCut[i].substring(findEnd, newCut[i].length);
    }
  }

  creditsList = newerCut;
}
lineWrapCredits(); // note: calling immediately as part of init, outside the function

function Credits() {

    const credits_config = {
        buttons: [
            new ButtonClass(...[, , , , ], "BACK", ...[, , ], () => {
                menu_stack.pop();
                this.deactivateMenuButtons();
            }, ...[, , ,],
            "back"),
            
        ],
        name: "Credits",
        button_start_x: this.button_start_x,
        button_start_y: this.button_start_y,
        show_name: false,
        forceLastButton: true,
    };

    MenuClass.call(this, credits_config);

    this.renderExtraText = function() {
        console.log("blorp");
        canvasContext = canvas.getContext("2d");
        canvasContext.font = "9px Arial";
        canvasContext.fillStyle = "white";
        for(var i=0;i<creditsList.length;i++) {
            canvasContext.fillText(creditsList[i],6,12+i*9);
        }
    }

    this.update = function () {
        this.updateCursor();
        var button_y_margin = 10;
        this.buttons.forEach((button, index) => {
          button.active = true;
          button.x = this.button_start.x+15;
          button.y = (this.button_start.y + 210) + button.height + button_y_margin * index;
        });
      
    };

}