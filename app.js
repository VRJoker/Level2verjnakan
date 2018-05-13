var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var Grass = require("./class grass.js");
var Kendani = require("./class Kendani.js");
var Enemy = require("./class enemy.js");
var Gishatich = require("./class gishatich.js");
var Botnuk = require("./class Botnuk.js");





function myFunction() {
    setInterval(function () {
        var matrix = [];
        for (var x = 0; x < 20; x++) {
            matrix[x] = [];
            for (var y = 0; y < 20; y++) {
                matrix[x][y] = Math.round(Math.random() * 3);
            }
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var x1 = getRandomInt(5, 14);
        var y1 = getRandomInt(5, 14);
        matrix[y1][x1] = 4;




        var side = 30;
        var grassArr = [];
        var enemyArr = [];
        var gishatichArr = [];
        var botnukArr = [];

        t++;
        for (var i in botnukArr) {
            botnukArr[i].eat();
        }
        for (var i in grassArr) {
            grassArr[i].mul();
        }
        for (var i in enemyArr) {
            enemyArr[i].eat();
        }
        for (var i in gishatichArr) {
            gishatichArr[i].eat();
        }


        if (t >= 2) {
            for (var i in botnukArr) {
                botnukArr[i].die();
            }
            var y = getRandomInt(5, 14);
            var x = getRandomInt(5, 14);


            console.log(x, y);
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
            }



            if (matrix[y][x] == 0 || matrix[y][x] == 1 || matrix[y][x] == 2 || matrix[y][x] == 3) {
                matrix[y][x] = 4;
                botnukArr[0] = new Botnuk(x, y, 4);
            }

            t = 0;
        }





    }, 2000);
}
