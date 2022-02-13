function Credits() {

    const credits_config = {
        buttons: [

            new ButtonClass(...[, , , , ], "BACK", ...[, , ], () => {
                menu_stack.pop();
                this.deactivateMenuButtons();
            }),
        ],
        name: "Credits",
        button_start_x: this.button_start_x,
        button_start_y: this.button_start_y,
        show_name: true,
    };

    MenuClass.call(this, credits_config);

}