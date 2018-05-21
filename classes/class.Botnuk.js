module.exports = class Botnuk {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3],
            [this.x + 3, this.y],
            [this.x + 3, this.y - 3],
            [this.x, this.y - 3]

        ];
    }
    eat() {
        this.multiply++
        if (this.multiply >= 1) {
            this.getNewCoordinates();
            for (var j in this.directions) {
                var x = this.directions[j][0];
                var y = this.directions[j][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] == 2) {
                        for (var i in enemyArr) {
                            if (x == enemyArr[i].x && y == enemyArr[i].y) {
                                enemyArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[y][x] == 1) {
                        for (var i in grassArr) {
                            if (x == grassArr[i].x && y == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[y][x] == 3) {
                        for (var i in gishatichArr) {
                            if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                                gishatichArr.splice(i, 1);
                                break;
                            }
                        }
                    }

                    matrix[y][x] = 4;

                }

            }
        }
    }
    die() {

        matrix[this.y][this.x] = 0;
        for (var j in this.directions) {
            var x = this.directions[j][0];
            var y = this.directions[j][1];
            matrix[y][x] = 0;
        }
    }

}

