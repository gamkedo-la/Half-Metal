function Controls() {

    const controls_config = {
        buttons: [
            new ButtonClass(...[, , , , ], "Arrow Key Up:Move up", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Arrow Key Down:Move down", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Arrow Key Right:Move right", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Arrow Key Left:Move Left", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Arrow Key Up:Move up", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Space Bar:Fire Shot", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Key X:change amo Type", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Key W: Move Up", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Key D: Move Left", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Key S: Move Down", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Key A: Move Right", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "BACK", ...[, , ], () => {
                menu_stack.pop();
                this.deactivateMenuButtons();
            }, ...[, , ,],
            "back"),
        ],
        name: "Controls",
        button_start_x: this.button_start_x,
        button_start_y: this.button_start_y,
        show_name: true,
        forceLastButton: true,
        
    };
    MenuClass.call(this, controls_config);
    
    this.update = function () {
        this.updateCursor();
        var button_y_margin = 15;
        this.buttons.forEach((button, index) => {
          button.active = true;
          button.x = this.button_start.x + 10;
          button.y = (this.button_start.y + 40) + button.height + button_y_margin * index;
    
         
        });
    
       
    };
    
    

    

}