var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
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
exanak = 1;
weather = "spring";


grasseater = 0;
enemyeater = 0;
gishaticheater = 0;
botnukeater = 0;
grassmuller = 0;
enemymover = 0;
gishatichmover = 0;


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
            var bot = new Botnuk(x, y, 4);
            botnukArr.push(bot);
        }

    }
}

tact = 0;
obj = {
    "grasseater": [],
    "grassmuller": [],
    "enemyeater": [],
    "enemymover": [],
    "gishaticheater": [],
    "gishatichmover": [],
    "botnukeater": [],

};

function myFunction() {
    setInterval(function () {
        exanak++;
        if (exanak % 80 == 0) {
            weather = "spring";
        }
        if (exanak % 80 == 20) {
            weather = "summer";
        }
        if (exanak % 80 == 40) {
            weather = "autumn";
        }
        if (exanak % 80 == 60) {
            weather = "winter";
        }

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
        for (var i in enemyArr) {
            enemyArr[i].mul();
        }
        for (var i in gishatichArr) {
            gishatichArr[i].eat();
        }
        if (t >= 2) {
            for (var i in botnukArr) {
                botnukArr[i].die();
            }
            var x = getRandomInt(5, 14);
            var y = getRandomInt(5, 14);
            matrix[y][x] = 4;
            botnukArr[0] = new Botnuk(x, y, 4);
            t = 0;
        }
        io.sockets.emit("matrix", matrix);
        io.sockets.emit("weather", weather);
        tact++;
        var myJSON = JSON.stringify(obj, null, ' ');
        if (tact % 10 == 0) {
            obj.grasseater.push(grasseater);
            obj.enemyeater.push(enemyeater);
            obj.gishaticheater.push(gishaticheater);
            obj.botnukeater.push(botnukeater);
            obj.grassmuller.push(grassmuller);
            obj.enemymover.push(enemymover);
            obj.gishatichmover.push(gishatichmover);
            fs.writeFile("finish.json", myJSON);
        }
    }, 1000);
}

io.on('connection', myFunction);

