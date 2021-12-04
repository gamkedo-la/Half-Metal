function UIClass(x, y, width, height) {
    this.backgroundWidth = width;
    this.backgroundHeight = height;
    this.x = x;
    this.y = y;

    this.draw = function () {
        colorRect(0, this.y, this.backgroundWidth, this.backgroundHeight, "black");
        renderFont("TEST AREA", this.x + 20, this.y + 12);
    }
}