class attackBox {
    constructor() {
        this.x = 120;
        this.y = 420;
        this.turnNumber = 0
    }



    // display the box with its text contents
    display() {
        if (this.turnNumber % 2 == 0) {

            textSize(25);
            rect(10, 400, 100, 40);
            rect(10, 440, 100, 40);
            rect(10, 480, 100, 40);
            rect(10, 520, 100, 40);

            triangle(this.x, this.y, this.x + 20, this.y + 10, this.x + 20, this.y - 10);


            fill(0, 0, 0);
            text("ATTACK", 10 + 5, 400 + 30);

            text("SPELL", 10 + 5, 440 + 30);

            text("ITEM", 10 + 5, 480 + 30);

            text("FLEE", 10 + 5, 520 + 30);
        }
    }
}