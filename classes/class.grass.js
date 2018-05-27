var Kendani = require("./class.Kendani.js");

module.exports = class Grass extends Kendani {



    constructor(x, y, index) {
        super(x, y, index)

    }

    mul() {
        grassmuller++;
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            grasseater++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}

