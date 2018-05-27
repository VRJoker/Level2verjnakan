var Kendani = require("./class.Kendani.js");
module.exports = class Gishatich extends Kendani {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 10;
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newGishatich = new Gishatich(newX, newY, this.index);
            gishatichArr.push(newGishatich);

        }
    }

    move() {
        gishatichmover++;
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat() {
        gishaticheater++;
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(2);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            this.energy++;
            this.x = newX;
            this.y = newY;
            for (var i in enemyArr) {
                if (newX == enemyArr[i].x && newY == enemyArr[i].y) {
                    enemyArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 13 && weather != "winter") {
                this.mul();
                this.energy == 10;
            }


        }
        else {
            this.energy -= 7;
            this.move();

            if (this.energy <= 9) {
                this.die();
            }

        }

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                break;
            }
        }

    }

}
