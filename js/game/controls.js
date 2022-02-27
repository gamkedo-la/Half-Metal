function Controls() {

    const controls_config = {
        buttons: [
            new ButtonClass(...[, , , , ], "Up Key: Move up", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Down Key: Move down", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Right Key: Move right", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Left Key: Move Left", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "Space Bar: Fire Shot", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "X Key: change ammo Type", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "W Key: Move Up", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "D Key: Move Left", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "S Key: Move Down", ...[, , ], () => {      
            }),
            new ButtonClass(...[, , , , ], "A Key: Move Right", ...[, , ], () => {      
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