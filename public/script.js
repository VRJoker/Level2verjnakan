
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
function setup() {
    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');



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
}


var t = 0;

function draw() {
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


        console.log(x,y);
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
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 1) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
}





























