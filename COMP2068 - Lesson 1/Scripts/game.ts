class Player {
    strength: number;
    constructor() {
        this.strength = 10;
    }

    jump() {
        console.debug("You jumped!");
    }
}
function main() {
}
var tom = new Player();
tom.jump();