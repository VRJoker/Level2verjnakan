var Gishatich = require("./class.gishatich.js");
module.exports = class Enemy extends Gishatich {
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
        var emptyCells = this.chooseCell(0 || 1);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            var newEnemy = new Enemy(newX, newY, this.index);
            enemyArr.push(newEnemy);
            this.multiply = 0;
        }
    }

    move() {
        enemymover++;
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat() {
        enemyeater++;
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(1);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            this.energy++;
            this.x = newX;
            this.y = newY;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 13 && weather != "winter") {
                this.mul();
                this.energy == 10;
            }
           


        }
        else {
            this.energy -= 20;
            this.move();
            if (this.energy <= 9) {
                this.die();
            }

        }

    }



    die() {
        for (var i in enemyArr) {
            if (this.x == enemyArr[i].x && this.y == enemyArr[i].y) {
                enemyArr.splice(i, 1);
                break;
            }
        }

    }

}
