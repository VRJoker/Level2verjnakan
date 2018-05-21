var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});
server.listen(3000);


var Grass = require("./classes/class.grass.js");
var Kendani = require("./classes/class.Kendani.js");
var Enemy = require("./classes/class.enemy.js");
var Gishatich = require("./classes/class.gishatich.js");
var Botnuk = require("./classes/class.Botnuk.js");
grassArr = [];
enemyArr = [];
gishatichArr = [];
botnukArr = [];

// y = getRandomInt(5, 14);
// x = getRandomInt(5, 14);


matrix = [];
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
botnukArr[0] = new Botnuk(x1, y1, 4);


t = 0;
        

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var em = new Enemy(x, y, 2);
            enemyArr.push(em);
        }
        else if (matrix[y][x] == 3) {
            var gish = new Gishatich(x, y, 3);
            gishatichArr.push(gish);
        }
        else if (matrix[y][x] == 4) {
            var bot = new Botnuk(x1, y1, 4);
            botnukArr.push(bot);
        }
    }
}
    





function myFunction() {
    setInterval(function () {
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
        }
        io.sockets.emit("matrix", matrix);
    }, 2000);
}

io.on('connection', myFunction);



