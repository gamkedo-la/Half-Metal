function TitleMenu() {
    // BUTTONS
    const new_game = new ButtonClass(...[, , , , ], "NEW GAME", ...[, , ], () => {
        console.log("Clicked new game");
        currentMode = "PLAY_MODE";
    });

    const select_level = new ButtonClass(
        ...[, , , , ],
        "select level",
        ...[, , ],
        () => {
            console.log("Clicked select level");
            menu_stack.push(level_select_screen);
        }
    );

    const options = new ButtonClass(...[, , , , ], "options", ...[, , ], () => {
        console.log("Clicked options");
        currentMode = MENU_MODE;
        menu_stack.push(options_screen);
    });

    const credits = new ButtonClass(...[, , , , ], "credits", ...[, , ], () => {
        console.log("Clicked credits");
        currentMode = MENU_MODE;
        menu_stack.push(credits_screen);
    });

    const controls = new ButtonClass(...[, , , , ], "controls", ...[, , ], () => {
        console.log("Clicked controls");
        currentMode = MENU_MODE;
        menu_stack.push(controls_screen);
    });

    // CONFIGURATION
    const title_config = {
        name: "Title",
        buttons: [new_game, select_level, options, credits, controls],
        button_start_x: 87,
        button_start_y: 160,
        image: title_img,
    };

    // SUPER CONSTRUCTOR
    MenuClass.call(this, title_config);
}