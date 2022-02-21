function Credits() {

    const credits_config = {
        buttons: [
            new ButtonClass(...[, , , , ], "Michael Tanner Project Lead", ...[, , ], () => {
               
            }),
            new ButtonClass(...[, , , , ], "Raik Bradley Developer", ...[, , ], () => {  
            }),
            new ButtonClass(...[, , , , ], "Kevin R Sound Effects", ...[, , ], () => {  
            }),
            new ButtonClass(...[, , , , ], "Rodrigo Bonzerr L Music", ...[, , ], () => {  
            }),
            new ButtonClass(...[, , , , ], "Copper Wills Developer", ...[, , ], () => {  
            }),
            new ButtonClass(...[, , , , ], "Ketan Patel Music Track", ...[, , ], () => {  
            }),
            new ButtonClass(...[, , , , ], "BACK", ...[, , ], () => {
                menu_stack.pop();
                this.deactivateMenuButtons();
            }, ...[, , ,],
            "back"),
            
        ],
        name: "Credits",
        button_start_x: this.button_start_x,
        button_start_y: this.button_start_y,
        show_name: true,
    };

    MenuClass.call(this, credits_config);
    this.update = function () {
        this.updateCursor();
        var button_y_margin = 20;
        this.buttons.forEach((button, index) => {
          button.active = true;
          button.x = this.button_start.x + 10;
          button.y = (this.button_start.y + 60) + button.height + button_y_margin * index;
    
        });
      
    };

}